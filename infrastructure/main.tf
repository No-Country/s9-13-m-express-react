provider "aws" {
  access_key = var.aws_access_key
  secret_key = var.aws_secret_key
  region = var.aws_region
}

data "aws_ami" "ubuntu" {
  most_recent = true

  filter {
    name = "name"
    values = ["ubuntu/images/hvm-ssd/ubuntu-focal-20.04-amd64-server-*"]
  }

  filter {
    name = "virtualization-type"
    values = ["hvm"]
  }

  owners = ["099720109477"] # Canonical
}

#resource "aws_key_pair" "deployer" {
#  key_name = "deployer-key"
#  public_key = ""
#}

resource "aws_security_group" "allow-ssh" {
  name = "allow-ssh"
  description = "Allow SSH inbound traffic"
  vpc_id = var.vpc_id

  ingress = {
    description = "SSH from VPC"
    from_port = 22
    to_port = 22
    protocol = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "allow_ssh"
  }
}

resource "aws_security_group" "allow-http" {
  name = "allow-http"
  description = "Allow http inbound traffic"
  vpc_id = var.vpc_id

  ingress = {
    description = "http from VPC"
    from_port = 80
    to_port = 80
    protocol = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port = 0
    to_port = 0
    protocol = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "allow_http"
  }
}

resource "aws_security_group" "allow_tls" {
  name        = "allow_tls"
  description = "Allow TLS inbound traffic"
  vpc_id      = var.vpc_id

  ingress {
    description = "TLS from VPC"
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = aws_vpc.main.cidr_block
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "allow_tls"
  }
}

resource "aws_instance" "server" {
    ami = var.aws_ami # data.aws_ami.ubuntu.id
    availability_zone = var.availability_zone
    instance_type = var.instance_type
    vpc_security_group_ids = [
      aws_security_group.allow-http.id,
      aws_security_group.allow-ssh.id,
      aws_security_group.allow_tls.id,
    ]

    #user_data =

    tags = {
      Name = "${var.project_name}-web-instance"
    }
}

resource "aws_eip" "eip" {
    instance = aws_instance.server.id
    vpc = true

    tags = {
      Name = "${var.project_name}-server-eip"
    }
}

resource "aws_s3_bucket" "static_website" {
  bucket = var.bucket_name
  acl    = "public-read"

  tags = {
    Name = "${var.project_name}-static-website"
  }
}

resource "aws_s3_bucket_website_configuration" "static_website" {
  bucket = aws_s3_bucket.static_website.bucket

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "error.html"
  }
}

data "aws_iam_policy_document" "allow_access_from_another_account" {
  statement {
    principals {
      type        = "AWS"
      identifiers = ["123456789012"]
    }

    actions = [
      "s3:GetObject",
      "s3:ListBucket",
    ]

    resources = [
      aws_s3_bucket.static_website.arn,
      "${aws_s3_bucket.static_website.arn}/*",
    ]
  }
}

resource "aws_s3_bucket_policy" "allow_access_from_another_account" {
  bucket = aws_s3_bucket.static_website.id
  policy = data.aws_iam_policy_document.allow_access_from_another_account.json
}

output "instance_ip" {
  description = "The public IP for the instance"
  value = aws_instance.server.public_ip
}

output "eip_ip" {
  descripttion = "The eip ip for ssh access"
  value = aws.eip_ip.eip.public_ip
}

output "ssh" {
  value = "ssh -l ubuntu ${aws_eip.eip.public_ip}"
}

output "url" {
  value = "http://${aws_eip.eip.public_ip}"
}

output "static_website" {
  value = aws_s3_bucket.static_website.website_endpoint
}
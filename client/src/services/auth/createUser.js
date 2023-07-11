
export default async function CreateUser({
  username,
  email,
  password,
}) {
  const baseUrl = "https://skillswap.onrender.com";
 
  // todo: use the server url
  const request = await fetch(`${baseUrl}/api/v1/auth/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, email, password }),
  });

  const response = await request.json();
  return response;
}

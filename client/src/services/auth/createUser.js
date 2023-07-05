export default async function CreateUser({
  name,
  surname,
  username,
  email,
  password,
}) {
  // todo: use the server url
  const request = await fetch('/api/auth/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, surname, username, email, password }),
  });

  const response = await request.json();
  return response;
}

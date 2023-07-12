export default async function CreateUser({ username, email, password }) {
  const request = await fetch(`${process.env.BACKEND_URL_BASE}/auth/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, email, password }),
  });

  const response = await request.json();
  return response;
}

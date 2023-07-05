export default async function loginUser({ email, password }) {
  const request = await fetch('/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  const response = await request.json();
  return response;
}
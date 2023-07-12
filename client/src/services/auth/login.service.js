export default async function loginUser({ email, password }) {
  const baseUrl = "https://skillswap.onrender.com";
  const request = await fetch(`${baseUrl}/api/v1/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  const response = await request.json();
  return response;
}
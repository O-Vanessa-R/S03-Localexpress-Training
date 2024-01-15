type Endpoint = `/${string}`;

export default async function fetchData<T>(endpoint: Endpoint) {
  const response = await fetch(`${import.meta.env.VITE_API_URL}${endpoint}`)
  
  if (!response.ok) {
    throw new Error(response.statusText)
  }
  return await response.json() as T;
}

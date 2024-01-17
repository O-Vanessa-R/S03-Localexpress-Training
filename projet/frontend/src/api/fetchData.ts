import wrapPromise from "./wrapPromise";

type Endpoint = `/${string}`;

export default async function fetchData<T>(endpoint: Endpoint) {
  const response = await fetch(`${import.meta.env.VITE_API_URL}${endpoint}`);

  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return (await response.json()) as T;
}

export const delayedFetchData = (endpoint: Endpoint) => {
  const delayedPromise = new Promise((resolve) =>
    setTimeout(resolve, 5000)
  ).then(async () => {
    return await fetchData(endpoint);
  });

  return wrapPromise(delayedPromise);
};

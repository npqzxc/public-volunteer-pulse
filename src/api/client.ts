export async function fetchJson<T>(path: string, init?: RequestInit): Promise<T> {
  const response = await fetch(path, {
    headers: { "Content-Type": "application/json" },
    ...init
  });
  if (!response.ok) {
    throw new Error(`request_failed:${response.status}`);
  }
  return response.json() as Promise<T>;
}

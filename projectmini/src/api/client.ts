import { ApiResponse } from '../types';

export async function fetchJson<T>(url: string): Promise<ApiResponse<T>> {
  const res = await fetch(url);
  if (!res.ok) throw new Error('Network error');
  const json = await res.json();
  return json as ApiResponse<T>;
}

import type { Buku } from "./buku.entity";

export async function getBuku(): Promise<Buku[]> {
  const response = await fetch("/api/buku");

  const result = await response.json();

  return result.data;
}
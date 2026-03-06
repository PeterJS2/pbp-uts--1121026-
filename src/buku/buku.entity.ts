export interface Buku {
  id: string;
  judul: string;
  deskripsi: string;
  tahun: string;
  kategori: string;
  status: string;
  peminjam: string | null;
  imageUrl: string;
}
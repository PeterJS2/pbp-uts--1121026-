import { useEffect, useState } from "react";
import { getBuku } from "./buku/buku.controller";
import type { Buku } from "./buku/buku.entity";

function App() {
  const [books, setBooks] = useState<Buku[]>([]);

  useEffect(() => {
    const loadData = async () => {
      const data = await getBuku();
      console.log(data); // cek apakah data masuk
      setBooks(data);
    };

    loadData();
  }, []);

  return (
    <div>
      <h1>Daftar Buku</h1>

      {books.map((book) => (
        <div key={book.id}>
          <h3>{book.judul}</h3>
          <p>{book.deskripsi}</p>
          <img src={book.imageUrl} width="150" />
        </div>
      ))}
    </div>
  );
}

export default App;
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div>
        <h1> Este es un sitio para comprar tus peliculas favoritas.</h1>
        <Link href="/movies"> Comprar!</Link>
      </div>
    </main>
  );
}

import Link from 'next/link'
import Form from "../components/Form";

const movies = [
  {
    name: "Revengers",
    maxTickets: 12,
  },
  {
    name: "SpuderMoon",
    maxTickets: 10,
  },
  {
    name: "BaturuMan",
    maxTickets: 8,
  },
  {
    name: "JourneyRabbit",
    maxTickets: 2,
  },
  {
    name: "BluePenter",
    maxTickets: 3,
  },
  {
    name: "RiverGensMidGame",
    maxTickets: 5,
  },
];

export default function MoviePage() {
  return (
    <div>
        <Link href='/'>
            Atrás
        </Link>

        <h2> Películas </h2>

        {movies.map((movie) => (
            <Form 
                key={movie.name} 
                movie={movie} 
                available={movie.available} 
            />
        ))}

    </div>
  );
}

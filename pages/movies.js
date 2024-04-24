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
];

export default function MoviePage() {
  return (
    <>
      <div className='container'>

        <div className='divButton'>
          <Link href='/'>
            <p className='backButton'> Atrás </p>
          </Link>
        </div>

          <h2 className='title'> Películas </h2>

          {movies.map((movie) => (
              <Form 
                  key={movie.name} 
                  movie={movie} 
                  available={movie.available} 
              />
          ))}

      </div>
      <style jsx>{`
      
      .container {
        transform: translateY(-3.9vh);
        display: grid;
        justify-self: center;
        height: 100vh;
        width: 90vw;
        text: center;
      }
      
      .title {
        color: white;
        text-align: center;
        text-shadow: 3px 3px 6px black;
      }

      .divButton {
        transform: translate(3vw, 3vh);
        display: flex;
        justify-content: start;
      }

      .backButton {
        text-align: center;
        color: white;
        background-color: #4781FF;
        width: 15vh;
        border-radius: 12px;
        padding: 3px 0 3px;
      }

      .backButton {
        color: white;
        text-decoration: none;
        font-size: 15px;
      }

      .backButton:hover {
        color: yellow;
        transform: scale(1.2);
      }


      `}</style>
    </>
  );
}

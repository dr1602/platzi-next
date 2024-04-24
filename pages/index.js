import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className='main'>
        <div className='container'>

          <h1 className='title'> Este es un sitio para comprar tus peliculas favoritas.</h1>
          <div className='divButton'>
            <a href='/movies' className='buy'> <p className='buyParagraph'> ¡Comprar! </p> </a>
          </div>
          
        </div>
      </main>

      <style jsx>{`
        .main {
          display: grid;
          justify-self: center;
          height: 100vh;
          width: 90vw;
          text: center;
          background-image: url('https://i.pinimg.com/originals/02/64/e3/0264e3c2dce8496c2ba6dd37cb7a45b1.jpg');
          background-repeat: no-repeat;
          background-size: 72vw 100vh;
          background-position-x: center;
        }

        .container {
          place-content: center;
        }

        .title {
          color: white;
          text-align: center;
          text-shadow: 3px 3px 6px black;
        }

        .divButton {
          transform: translateY(3vh);
          display: flex;
          justify-content: center;
        }

        a {
          color: white;
          text-decoration: none;
          font-size: 24px;
        }

        a:hover {
          color: yellow;
          transform: scale(1.2);
        }

        .buyParagraph {
          text-align: center;
          background-color: #4781FF;
          width: 30vh;
          border-radius: 12px;
          padding: 6px 0 6px;
        }

      `}</style>
    </>
  );
}

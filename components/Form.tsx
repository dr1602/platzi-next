import React from 'react';
import Link from "next/link";
// usar styled jsx y hacer el mismo codigo pero para nuxt.js
//https://nextjs.org/blog/styling-next-with-styled-jsx

//https://nextjs.org/learn-pages-router/basics/create-nextjs-app/editing-the-page

export default function Form(props) {
  const [count, setCount] = React.useState(0);
  const { movie } = props;

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submit");
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        onMouseEnter={() => props.updateTheme}
      >
          
          <p>{movie.name}</p>
          <button
              type="submit"
              onClick={() => setCount(count - 1)}
              disabled={count <= 0}
          >
              {" "}
              -{" "}
          </button>
          {count}
          <button
              type="submit"
              onClick={() => setCount(count + 1)}
              disabled={count >= movie.maxTickets}
          >
              {" "}
              +{" "}
          </button>

          <div className='divButton'>
            <Link href={{ pathname: 'pay', query: { name: movie.name, count }}}>
                <p className='pagarButton'> Pagar </p>
            </Link>
          </div>

      </form>
      <style jsx>{`
          form {
            text-align: center;
            color: white;
          }

          &:hover {
            animation: ${(p) => p.theme.animation} 2s linear infinite;
          }
        
          @keyframes grow {
            0%, {
              transform: scale(1.2);
            }
            }
            25% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.75);
            }
            75% {
              transform: rotateZ(scale(1.50));
            }
            100% {
              transform: rotateZ(2.1);
            }
          }

          
          @keyframes wiggle {
            0%, 7% {
              transform: rotateZ(0);
            }
            15% {
              transform: rotateZ(-15deg);
            }
            20% {
              transform: rotateZ(10deg);
            }
            25% {
              transform: rotateZ(-10deg);
            }
            30% {
              transform: rotateZ(6deg);
            }
            35% {
              transform: rotateZ(-4deg);
            }
            40%, 100% {
              transform: rotateZ(0);
            }
          }

          button {
            cursor: pointer;
            padding: 6px 6px;
            margin: auto 1.2vw;
            border: 1px solid transparent;
            border-radius: 9px;
            transition: 150ms border-color;
          }

          &:hover {
            border-color: ${(p) => p.theme.color};
          }
        
          &[disabled]: {
            background: ${(p) => p.theme.color};
          }

          .divButton {
            transform: translateY(0.9vh);
            display: flex;
            justify-content: center;
          }

          .pagarButton{
            color: white;
            text-align: center;
            background-color: #4781FF;
            width: 30vh;
            border-radius: 12px;
            padding: 6px 0 6px;
          }

          .pagarButton:hover {
            color: yellow;
            transform: scale(1.2);
          }
      `}</style>
    </>
  );
}

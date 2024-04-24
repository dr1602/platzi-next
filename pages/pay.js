import Link from "next/link";
import { useRouter } from "next/router";

export default function PayPage() {

    const { query } = useRouter();

    return (
        <>
            <div className='main'>
                <h3 className='title'> ¡FELICIDADES! </h3>
                <p className='paragraph'> Has comprado {query.count} boleto(s) de la pellícula {query.name}. </p>

                <div className='divButton'>
                    <Link href='movies'>
                        <p className='devolverButton'> Devolverlos </p>
                    </Link>
                </div>
            </div>
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

                .title {
                    color: white;
                    text-align: center;
                    text-shadow: 3px 3px 6px black;
                    font-size: 30px;
                }

                .paragraph {
                    color: white;
                    text-align: center;
                    text-shadow: 3px 3px 6px black;
                    font-size: 30px;
                }

                .divButton {
                    transform: translateY(0.9vh);
                    display: flex;
                    justify-content: center;
                }

                .devolverButton{
                    color: white;
                    text-align: center;
                    background-color: #4781FF;
                    width: 30vh;
                    border-radius: 12px;
                    padding: 6px 0 6px;
                  }
        
                  .devolverButton:hover {
                    color: yellow;
                    transform: scale(1.2);
                  }
                
            `}</style>
        </>
    );
}  
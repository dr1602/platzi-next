import Link from "next/link";
import { useRouter } from "next/router";

export default function PayPage() {

    const { query } = useRouter();

    return (
        <div>
            <h3> ¡FELICIDADES! </h3>
            <p> Has comprado {query.count} boleto(s) de la pellícula {query.name}. </p>

            <Link href='movies'>
                Devolverlos
            </Link>
        </div>
    );
}  
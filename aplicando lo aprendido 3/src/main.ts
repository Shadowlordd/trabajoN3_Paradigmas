import { Calculadora } from "./Calculadora";
import * as readlineSync from "readline-sync";

const calculadora = new Calculadora();

function iniciar(): void {

    while (true) {

        const num1 = Number(
            readlineSync.question("Ingresa un número: ")
        );

        const num2 = Number(
            readlineSync.question("Ingresa otro número: ")
        );

        const opcion = readlineSync.question(
            "\nIngresa la operación:\n" +
            "1] Sumar (+)\n" +
            "2] Restar (-)\n" +
            "3] Multiplicar (*)\n" +
            "4] Dividir (/)\n" +
            "0] Salir\n" +
            "Elige una opción: "
        );

        if (opcion === "0") {
            console.log("Saliendo de la calculadora...");
            break;
        }

        const operacion =
            calculadora.calcular(
                num1,
                num2,
                opcion
            );

        if (operacion === null) {

            console.log(
                "Opción no válida."
            );

        } else {

            console.log(
                `El resultado de ${num1} ` +
                `${operacion.simbolo} ${num2} ` +
                `es: ${operacion.resultado}`
            );
        }

        console.log(
            "--------------------------------"
        );
    }
}

iniciar();
export class Calculadora {

    public calcular(
        num1: number,
        num2: number,
        opcion: string
    ): { resultado: number | string, simbolo: string } | null {

        switch (opcion) {

            case "1":
                return {
                    resultado: num1 + num2,
                    simbolo: "+"
                };

            case "2":
                return {
                    resultado: num1 - num2,
                    simbolo: "-"
                };

            case "3":
                return {
                    resultado: num1 * num2,
                    simbolo: "*"
                };

            case "4":

                if (num2 === 0) {
                    return {
                        resultado: "Error: División por cero no es válida",
                        simbolo: "/"
                    };
                }

                return {
                    resultado: num1 / num2,
                    simbolo: "/"
                };

            default:
                return null;
        }
    }
}
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculadora = void 0;
class Calculadora {
    calcular(num1, num2, opcion) {
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
exports.Calculadora = Calculadora;

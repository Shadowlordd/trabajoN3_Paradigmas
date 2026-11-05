"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const Calculadora_1 = require("./Calculadora");
const readlineSync = __importStar(require("readline-sync"));
const calculadora = new Calculadora_1.Calculadora();
function iniciar() {
    while (true) {
        const num1 = Number(readlineSync.question("Ingresa un número: "));
        const num2 = Number(readlineSync.question("Ingresa otro número: "));
        const opcion = readlineSync.question("\nIngresa la operación:\n" +
            "1] Sumar (+)\n" +
            "2] Restar (-)\n" +
            "3] Multiplicar (*)\n" +
            "4] Dividir (/)\n" +
            "0] Salir\n" +
            "Elige una opción: ");
        if (opcion === "0") {
            console.log("Saliendo de la calculadora...");
            break;
        }
        const operacion = calculadora.calcular(num1, num2, opcion);
        if (operacion === null) {
            console.log("Opción no válida.");
        }
        else {
            console.log(`El resultado de ${num1} ` +
                `${operacion.simbolo} ${num2} ` +
                `es: ${operacion.resultado}`);
        }
        console.log("--------------------------------");
    }
}
iniciar();

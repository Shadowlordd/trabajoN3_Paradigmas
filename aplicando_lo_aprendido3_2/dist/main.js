"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const tarea_1 = require("./tarea");
/*
 * Al usar funciones constructoras,
 * necesitamos indicar a TypeScript
 * que se puede usar con new.
 */
const gestor = new tarea_1.GestorTareas();
let opcion;
do {
    console.log("\n=== MENU ===");
    console.log("1. Agregar tarea");
    console.log("2. Ver todas");
    console.log("3. Ver pendientes");
    console.log("4. Buscar tarea");
    console.log("0. Salir");
    opcion = Number(readline_sync_1.default.question("Opcion: "));
    switch (opcion) {
        case 1: {
            const descripcion = readline_sync_1.default.question("Descripcion: ");
            gestor.agregarTarea(descripcion);
            break;
        }
        case 2:
            gestor.verTodas();
            break;
        case 3:
            gestor.verPendientes();
            break;
        case 4: {
            const id = Number(readline_sync_1.default.question("Ingrese ID: "));
            gestor.buscarTarea(id);
            break;
        }
        case 0:
            console.log("Hasta luego.");
            break;
        default:
            console.log("Opcion invalida.");
    }
} while (opcion !== 0);

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GestorTareas = GestorTareas;
const readline_sync_1 = __importDefault(require("readline-sync"));
function GestorTareas() {
    this.tareas = [];
    this.contador = 1;
}
/*
AGREGAR TAREA
*/
GestorTareas.prototype.agregarTarea = function (descripcion) {
    const nueva = {
        id: this.contador++,
        descripcion,
        estado: "pendiente",
        creacion: new Date(),
    };
    this.tareas.push(nueva);
    console.log("Tarea agregada correctamente.");
};
/*
LISTADOS
*/
GestorTareas.prototype.verTodas = function () {
    this.listar(this.tareas, "Todas las tareas");
};
GestorTareas.prototype.verPendientes = function () {
    const pendientes = this.tareas.filter(t => t.estado === "pendiente");
    this.listar(pendientes, "Tareas pendientes");
};
GestorTareas.prototype.verEnCurso = function () {
    const enCurso = this.tareas.filter(t => t.estado === "en curso");
    this.listar(enCurso, "Tareas en curso");
};
GestorTareas.prototype.verTerminadas = function () {
    const terminadas = this.tareas.filter(t => t.estado === "terminada");
    this.listar(terminadas, "Tareas terminadas");
};
/*
LISTAR Y SELECCIONAR
*/
GestorTareas.prototype.listar = function (lista, titulo) {
    if (lista.length === 0) {
        console.log(`No hay ${titulo.toLowerCase()}.`);
        return;
    }
    console.log(`\n=== ${titulo} ===`);
    lista.forEach((t) => {
        console.log(`${t.id}: ${t.descripcion}`);
    });
    let id;
    do {
        id = Number(readline_sync_1.default.question("\nIngrese ID para ver detalles o 0 para volver: "));
        if (id === 0) {
            return;
        }
        const existe = lista.some(t => t.id === id);
        if (existe) {
            this.mostrarDetalles(id);
        }
        else {
            console.log("ID invalido.");
        }
    } while (id !== 0);
};
/*
BUSCAR
*/
GestorTareas.prototype.buscarTarea = function (id) {
    const existe = this.tareas.some(t => t.id === id);
    if (!existe) {
        console.log("Tarea no encontrada.");
        return;
    }
    this.mostrarDetalles(id);
};
/*
DETALLES
*/
GestorTareas.prototype.mostrarDetalles = function (id) {
    const tarea = this.tareas.find(t => t.id === id);
    if (!tarea) {
        console.log("Tarea no encontrada.");
        return;
    }
    console.log("\n=== DETALLES DE LA TAREA ===");
    console.log(`ID: ${tarea.id}`);
    console.log(`Descripcion: ${tarea.descripcion}`);
    console.log(`Estado: ${tarea.estado}`);
    console.log(`Creacion: ${tarea.creacion.toLocaleString()}`);
    console.log(`Vencimiento: ${tarea.vencimiento
        ? tarea.vencimiento.toLocaleDateString()
        : "No definido"}`);
    const opcion = readline_sync_1.default.question("\nPresione [E] para editar o [0] para volver: ");
    if (opcion.toLowerCase() === "e") {
        this.editarTarea(id);
    }
};
/*
EDICIÓN
*/
GestorTareas.prototype.editarTarea = function (id) {
    const tarea = this.tareas.find(t => t.id === id);
    if (!tarea) {
        console.log("Tarea no encontrada.");
        return;
    }
    console.log("\n=== MENU DE EDICION ===");
    console.log("1 - Cambiar descripcion");
    console.log("2 - Cambiar estado");
    console.log("3 - Cambiar vencimiento");
    console.log("0 - Volver");
    const opcion = Number(readline_sync_1.default.question("Seleccione una opcion: "));
    switch (opcion) {
        case 1:
            tarea.descripcion =
                readline_sync_1.default.question("Nueva descripción: ");
            break;
        case 2:
            console.log("1 - Pendiente");
            console.log("2 - En curso");
            console.log("3 - Terminada");
            const estado = Number(readline_sync_1.default.question("Seleccione estado: "));
            switch (estado) {
                case 1:
                    tarea.estado = "pendiente";
                    break;
                case 2:
                    tarea.estado = "en curso";
                    break;
                case 3:
                    tarea.estado = "terminada";
                    break;
                default:
                    console.log("Estado invalido.");
            }
            break;
        case 3:
            const fecha = readline_sync_1.default.question("Nueva fecha (YYYY-MM-DD): ");
            tarea.vencimiento =
                new Date(fecha);
            break;
        case 0:
            return;
        default:
            console.log("Opción invalida.");
            return;
    }
    console.log("\nTarea modificada correctamente.");
    this.mostrarDetalles(id);
};

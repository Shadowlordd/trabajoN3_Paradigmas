import readlineSync from "readline-sync";
import { GestorTareas } from "./tarea";

/*
 * Al usar funciones constructoras,
 * necesitamos indicar a TypeScript
 * que se puede usar con new.
 */
const gestor = new (GestorTareas as any)();

let opcion: number;

do {
  console.log("\n=== MENU ===");
  console.log("1. Agregar tarea");
  console.log("2. Ver todas");
  console.log("3. Ver pendientes");
  console.log("4. Buscar tarea");
  console.log("0. Salir");

  opcion = Number(
    readlineSync.question("Opcion: ")
  );

  switch (opcion) {

    case 1: {

      const descripcion =
        readlineSync.question(
          "Descripcion: "
        );

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

      const id = Number(
        readlineSync.question(
          "Ingrese ID: "
        )
      );

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
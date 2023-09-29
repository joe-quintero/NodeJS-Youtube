import {createInterface} from "readline";
import chalk from "chalk";
import { Console } from "console";

const tasks = [];

const rl = createInterface({
    input: process.stdin,
    output: process.stdout    
});

function displayMenu(){ // Funcion Menu
     console.log(chalk.yellow.bold("To Do App"));
     console.log(chalk.blueBright.bold("Menu de opciones"));
     console.log("1. Agregar tarea");
     console.log("2. Listar tareas");
     console.log("3. Completar tareas");
     console.log("4. Salir");
}

function addTask() {
    rl.question("Escribe la tarea: ", (task) =>{
        tasks.push({task, completed: false});
        console.log(chalk.green.bold("Tarea agregada con exito"));
        displayMenu();
        chooseOption();
    })
}

function chooseOption(){
    rl.question("Digita el numero de tu opción:", (chioce)=>{
        switch (chioce){
            case "1":
                addTask();
                break;
            case "2":
                console.log("Listar tareas");
                break;
            case "3":
                console.log("Completar tareas");
                break;
            case "4":
                console.log(chalk.yellow("Adios"));
                rl.close(); //Metodo de rl para que se pueda seguir utilizando la terminal.
                break;
            default:
                console.log(chalk.red("Opcion Invalida, intenta nuevamente.\n"))
                displayMenu();
                chooseOption();
                break;
        }
    });
}

displayMenu();
chooseOption();
import PacientesController from  './controller/PacientesController.js'


export default function adicionarRotas (servidor){
    servidor.use (PacientesController); 
}
import { Request, Response } from 'express';

export class Controller {
    public getAllTasks(_req: Request, _res: Response) {
        // Lógica para obtener todas las tareas
    }

    public getTaskById(_req: Request, _res: Response) {
        // Lógica para obtener una tarea por su ID
    }

    public createTask(_req: Request, _res: Response) {
        // Lógica para crear una nueva tarea
    }

    public updateTask(_req: Request, _res: Response) {
        // Lógica para actualizar una tarea
    }

    public deleteTask(_req: Request, _res: Response) {
        // Lógica para eliminar una tarea
    }
}
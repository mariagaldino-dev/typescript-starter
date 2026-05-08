import { Injectable, Logger } from "@nestjs/common";
import { CreateTodoRepository } from "src/todos/repositorio";
import { CreateTodoDto } from "../dto/create-todo.dto";

@Injectable()
export class CreateTodoUseCase {
    constructor(
        private readonly createTodoRepositorio: CreateTodoRepository,
        private readonly logger: Logger,
    ) { }
 
    async execute(data: CreateTodoDto) {
        try {
            this.logger.log('Creating toDo...');
            const todo = await this.createTodoRepositorio.create(data);
            this.logger.log('ToDo created successfully');
            return todo;
        } catch (error) {
            this.logger.error(error);
            throw new Error('Failed to create toDo');
        }
    }
}

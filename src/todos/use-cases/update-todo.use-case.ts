import { Injectable, Logger, NotFoundException } from "@nestjs/common";
import { UpdateTodoDto } from "../dto/update-todo.dto";
import { UpdateTodoByID } from "src/todos/repositorio";

@Injectable()
export class UpdateTodoUseCase {
    findTodoById: any;
    constructor(
        private readonly repository: UpdateTodoByID,
        private readonly logger: Logger,
    ) { }

    async execute(id: string, data: UpdateTodoDto) {
        try {
            this.logger.log('Updating toDo...');

            const todo = await this.findTodoById.execute(id);

            if (!todo) {
                throw new NotFoundException('Todo não encontrado');
            }

            const updatedTodo = await this.repository.update(id, data);
            this.logger.log('ToDo updated successfully');
            return updatedTodo;
        } catch (error) {
            this.logger.error(error);
            throw new Error('Failed to update toDo');
        }
    }
}


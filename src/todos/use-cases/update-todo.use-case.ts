import { Injectable, Logger } from "@nestjs/common";
import { UpdateTodoDto } from "../dto/update-todo.dto";
import { UpdateTodoByID } from "src/repositorio";

@Injectable()
export class UpdateTodoUseCase {
    constructor(
        private readonly repository: UpdateTodoByID,
        private readonly logger: Logger,
    ) { }

    async execute(id: string, data: UpdateTodoDto) {
        try {
            this.logger.log(`Updating toDo with id: ${id}...`);
            const updatedTodo = await this.repository.update(id, data);
            this.logger.log('ToDo updated successfully');
            return updatedTodo;
        } catch (error) {
            this.logger.error(error);
            throw new Error('Failed to update toDo');
        }
    }
}


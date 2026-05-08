import { Inject, Injectable, Logger, NotFoundException } from "@nestjs/common";
import { DeleteTodoRepository } from "src/todos/repositorio/delete-todo.repositorio";

@Injectable()
export class DeleteTodoUseCase {
    findTodoByIdRepository: any;
    constructor(
        private readonly repository: DeleteTodoRepository, // Ajuste o nome do repositório se necessário
        private readonly logger: Logger,
    ) { }

    async execute(id: string) {
        try {
            this.logger.log('Deleting toDo...');

            const todo = await this.findTodoByIdRepository.findById(id);

            if (!todo) {
                throw new NotFoundException('ToDo not found');
            }

            await this.repository.delete(id);
            this.logger.log('ToDo deleted successfully');
            return { success: true };
        } catch (error) {
            this.logger.error(error);
            throw new Error('Failed to delete toDo');
        }
    }
}

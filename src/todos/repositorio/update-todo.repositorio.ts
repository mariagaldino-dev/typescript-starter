import { Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { PrismaService } from "prisma.databases";
import { UpdateTodoDto } from "src/todos/dto/update-todo.dto";

@Injectable()
export class UpdateTodoByID {
    constructor(private readonly prisma: PrismaService) { }

    async update(id: string, data: UpdateTodoDto) {
        return await this.prisma.todo.update({
            where: { id },
            data: data as Prisma.TodoUncheckedUpdateInput
        });
    }
}
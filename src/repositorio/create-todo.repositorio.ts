import { Injectable } from "@nestjs/common";
import { PrismaService } from "prisma.databases";
import { CreateTodoDto } from "src/todos/dto/create-todo.dto";

//  
@Injectable()
export class CreateTodoRepository {
    constructor(private readonly prisma: PrismaService) { }

    async create(data: CreateTodoDto) {
        return await this.prisma.todo.create({ data })
    }
}
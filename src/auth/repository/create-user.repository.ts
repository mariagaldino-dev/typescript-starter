import { Injectable } from "@nestjs/common";
import { PrismaService } from "prisma.databases";

type CreateUserParams = {
    name?: string;
    email: string;
    passawordHash: string;
}

@Injectable()
export class CreateUserRepository {
    constructor(private readonly prisma: PrismaService) { }

    async create(data: CreateUserParams) {
        return await this.prisma.user.create({
            data,
            select: {
                id: true,
                name: true,
                email: true,
            }
         });
    }
}
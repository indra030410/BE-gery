import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';

@Injectable()
export class EmployeeService {
    constructor(private readonly prismaService : PrismaService){}

    async createEmployee(data : CreateEmployeeDto) {
        try {
            if (data.firstname.split(' ').length > 1 || data.lastname.split(' ').length > 1) throw new Error('First name or Last name must be one word')
            return this.prismaService.employee.create({data})
        } catch (error) {
            throw new BadRequestException(error?.message)
        }

    }

    async getEmployees() {
        try {
            return this.prismaService.employee.findMany();
        } catch (error) {
            throw new BadRequestException()
        }
    }



}

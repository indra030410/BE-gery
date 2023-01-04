import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { EmployeeService } from './employee.service';

@Module({ providers: [PrismaService, EmployeeService], exports : [EmployeeService] })
export class EmployeeModule {}

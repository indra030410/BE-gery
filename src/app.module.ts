import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeeService } from './employee/employee.service';
import { EmployeeModule } from './employee/employee.module';
import { PrismaService } from './prisma.service';

@Module({
  imports: [EmployeeModule],
  controllers: [AppController],
  providers: [AppService, EmployeeService, PrismaService],
})
export class AppModule {}

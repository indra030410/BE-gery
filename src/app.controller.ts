import { UseInterceptors } from '@nestjs/common';
import { Post,Get, Body, Controller } from '@nestjs/common';
import { TransformInterceptor } from './common/transform-response.interceptor';
import { CreateEmployeeDto } from './employee/dto/create-employee.dto';
import { EmployeeService } from './employee/employee.service';

@UseInterceptors(new TransformInterceptor)
@Controller()
export class AppController {
  constructor(private readonly employeeService : EmployeeService) {}

  @Post('create')
  async createEmployee(@Body() data : CreateEmployeeDto) {
    return this.employeeService.createEmployee(data);
  }

  @Get('view/all')
  async getEmployees() {
    return this.employeeService.getEmployees();
  }
}

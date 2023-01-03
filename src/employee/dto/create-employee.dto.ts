import { IsNotEmpty, IsString } from "class-validator"



export class CreateEmployeeDto  {
    
    @IsString()
    @IsNotEmpty()
    firstname : string

    @IsString()
    @IsNotEmpty()
    lastname : string

    @IsString()
    @IsNotEmpty()
    position : string

}
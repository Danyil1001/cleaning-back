// write request dto here
import { IsNumber, IsOptional, IsString } from "class-validator";

export class ServiceRepairRequestDto {
    @IsString()
    name: string;

    @IsString()
    email: string;

    @IsString()
    phone_number: string;
    
    @IsOptional()
    address?: string;
}
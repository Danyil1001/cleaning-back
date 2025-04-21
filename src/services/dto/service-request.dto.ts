// write request dto here
import { IsNumber, IsOptional, IsString } from "class-validator";

export class ServiceRequestDto {
    @IsString()
    name: string;

    @IsString()
    email: string;

    @IsString()
    phone_number: string;
    @IsOptional()
    address?: string;

    @IsNumber()
    service_id: number;

    @IsNumber()
    rooms_amount: number;

    @IsNumber()
    bathroom_amount: number;

    @IsNumber()
    stores_amount: number;

    @IsNumber()
    price: number;

    @IsNumber()
    time: number

    @IsOptional()
    @IsString()
    moving_from: string
    
    @IsOptional()
    @IsString()
    moving_to: string
}
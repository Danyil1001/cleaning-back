import { IsOptional, IsString } from "class-validator";

export class ClientRequestDto {
    @IsString()
    clientName: string;

    @IsString()
    email: string;

    @IsString()
    phone_number: string;

    @IsOptional()
    address?: string;
}
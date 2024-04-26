import { PartialType } from '@nestjs/mapped-types';
import { Type } from 'class-transformer';
import { IsDate, IsInt, IsNotEmpty, IsOptional, IsString, Min } from 'class-validator';

export class CreatePatientDto {

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsInt()
  @Min(0)
  age: string;

  @IsString()
  citizen_id: string;

  @IsOptional()
  @IsDate()
  @Type(() => Date) // Ensures proper transformation of string input to Date object
  birth_date?: Date;
}

export class UpdatePatientDto extends PartialType(CreatePatientDto) {}

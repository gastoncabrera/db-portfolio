import { PartialType } from '@nestjs/mapped-types';
import { IsArray, IsNumber } from 'class-validator';
import { CreateProyectDto } from './create-proyect.dto';

export class UpdateProyectDto extends PartialType(CreateProyectDto) {
  @IsNumber()
  order: number;

  @IsArray()
  title: string;
}

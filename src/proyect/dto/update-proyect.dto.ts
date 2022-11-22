import { PartialType } from '@nestjs/mapped-types';
import { IsArray, IsNumber, IsString } from 'class-validator';
import { CreateProyectDto } from './create-proyect.dto';

export class UpdateProyectDto extends PartialType(CreateProyectDto) {
  @IsNumber()
  order: number;

  @IsString()
  title: string;

  @IsString()
  demolink: string;

  @IsString()
  repolink: string;
}

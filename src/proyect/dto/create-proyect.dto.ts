import { IsNumberString, IsString, IsNotEmpty } from 'class-validator';

export class CreateProyectDto {
  readonly id: any;

  @IsNotEmpty()
  @IsString()
  readonly title: string;

  @IsString()
  readonly description: string;

  @IsString()
  @IsNotEmpty()
  readonly skill: string;

  @IsString()
  readonly demolink: string;

  @IsString()
  readonly repolink: string;

  @IsString()
  @IsNotEmpty()
  readonly image: string;
}

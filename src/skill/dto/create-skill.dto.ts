import { IsNumberString, IsString, IsNotEmpty } from 'class-validator';

export class CreateSkillDto {
  readonly id: any;

  @IsNotEmpty()
  readonly skill: string;

  @IsString()
  @IsNotEmpty()
  readonly image: string;
}

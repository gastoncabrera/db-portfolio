import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SkillDocument = Skill & Document;

@Schema()
export class Skill {
  @Prop()
  skill: string;

  @Prop()
  image: string;
}

export const SkillSchema = SchemaFactory.createForClass(Skill);

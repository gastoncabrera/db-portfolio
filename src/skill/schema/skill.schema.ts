import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SkillDocument = Skill & Document;

@Schema()
export class Skill {
  @Prop()
  id: string;

  @Prop({ required: true })
  skill: string;

  @Prop()
  image: string;
}

export const SkillSchema = SchemaFactory.createForClass(Skill);

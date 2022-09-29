import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Skill } from '../../skill/schema/skill.schema';

export type ProyectDocument = Proyect & Document;

@Schema()
export class Proyect {
  @Prop()
  id: string;

  @Prop()
  title: string;

  @Prop()
  image: string;

  @Prop()
  description: string;

  @Prop({ type: [{ type: Types.ObjectId, ref: Skill.name }] })
  skill: Types.Array<Skill>;

  @Prop()
  demolink: string;

  @Prop()
  repolink: string;
}

export const ProyectSchema = SchemaFactory.createForClass(Proyect);

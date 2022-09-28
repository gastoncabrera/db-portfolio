import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

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

  @Prop()
  skill: string;

  @Prop()
  demolink: string;

  @Prop()
  repolink: string;
}

export const ProyectSchema = SchemaFactory.createForClass(Proyect);

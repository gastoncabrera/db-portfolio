import { Module } from '@nestjs/common';
import { ProyectService } from './proyect.service';
import { ProyectController } from './proyect.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Proyect, ProyectSchema } from './schema/proyect.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Proyect.name, schema: ProyectSchema }]),
  ],
  controllers: [ProyectController],
  providers: [ProyectService],
})
export class ProyectModule {}

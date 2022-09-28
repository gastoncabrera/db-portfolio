import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SkillModule } from './skill/skill.module';
import { MongooseModule } from '@nestjs/mongoose';
// import { Skill, SkillSchema } from './skill/schema/skill.schema';
import { ProyectModule } from './proyect/proyect.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://gaston:5YIgYbr5AsLUb9OA@cluster0.ro2zvph.mongodb.net/?retryWrites=true&w=majority',
    ),
    //   MongooseModule.forFeature([{ name: Skill.name, schema: SkillSchema }]),
    SkillModule,
    ProyectModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

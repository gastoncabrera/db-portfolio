import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProyectDto } from './dto/create-proyect.dto';
import { UpdateProyectDto } from './dto/update-proyect.dto';
import { Proyect, ProyectDocument } from './schema/proyect.schema';

@Injectable()
export class ProyectService {
  constructor(
    @InjectModel(Proyect.name) private proyectModel: Model<ProyectDocument>,
  ) {}

  async create(createProyectDto: CreateProyectDto, file) {
    try {
      const res = {
        ...createProyectDto,
        image: file.filename,
      };
      const createdProyect = new this.proyectModel(res);
      createdProyect.save();
      return {
        message: 'successfully created proyect',
      };
    } catch (error) {
      throw new NotFoundException(`proyect #${error} not found`);
    }
  }

  findAll() {
    return this.proyectModel.find().populate('skill').exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} proyect`;
  }

  update(id: number, updateProyectDto: UpdateProyectDto) {
    return `This action updates a #${id} proyect`;
  }

  remove(id: number) {
    return `This action removes a #${id} proyect`;
  }
}

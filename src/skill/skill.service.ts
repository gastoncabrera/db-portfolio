import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateSkillDto } from './dto/create-skill.dto';
import { UpdateSkillDto } from './dto/update-skill.dto';
import { Skill } from './entities/skill.entity';
import { SkillDocument } from './schema/skill.schema';

@Injectable()
export class SkillService {
  constructor(
    @InjectModel(Skill.name) private skillModel: Model<SkillDocument>,
  ) {}

  async create(createSkillDto: CreateSkillDto) {
    const createdSkill = await new this.skillModel(createSkillDto);
    try {
      createdSkill.save();
      return {
        message: 'successfully created skills',
      };
    } catch (error) {
      throw new NotFoundException(`skill #${error} not found`);
    }
  }

  async findAll() {
    return this.skillModel.find().exec();
  }

  async update(id: number, updateListDto) {
    try {
      await this.skillModel.findByIdAndUpdate(id, updateListDto);
      return {
        message: 'successfully update skills',
      };
    } catch (error) {
      throw new NotFoundException(`skill #${id} not found`);
    }
  }

  async findOne(id: number) {
    const list = await this.skillModel.findById(id);
    if (!list) {
      throw new NotFoundException(`skill #${id} not found`);
    }
    return list;
  }

  async remove(id: number) {
    try {
      const list = await this.skillModel.findById(id);
      list.remove();
      return {
        message: 'successfully delete skills',
      };
    } catch (error) {
      throw new NotFoundException(`skill #${id} not found`);
    }
  }
}

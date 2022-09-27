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
    const createdSkill = new this.skillModel(createSkillDto);
    try {
      createdSkill.save();
    } catch (error) {
      console.error(error);
    }
    return {
      message: 'successfully created skills',
    };
  }

  async findAll() {
    return this.skillModel.find().exec();
  }

  // findOne(id: number) {
  //   const res = this.skills.filter((item) => item.id === id);
  //   if (!res.length) {
  //     throw new NotFoundException(`skill #${id} not found`);
  //   }
  //   return res;
  // }

  // update(id: number, updateSkillDto: UpdateSkillDto) {
  //   const res = this.findOne(id);
  //   if (!res.length) {
  //     throw new NotFoundException(`skill #${id} not found`);
  //   }
  // }

  // remove(id: number) {
  //   const res = this.findOne(id);
  //   if (!res.length) {
  //     throw new NotFoundException(`skill #${id} not found`);
  //   } else {
  //     this.skills.filter((item) => item.id !== id);
  //   }
  //   return {
  //     message: 'successfully delete skills',
  //   };
  // }
}

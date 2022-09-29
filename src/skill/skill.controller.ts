import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
  Res,
} from '@nestjs/common';
import { SkillService } from './skill.service';
import { CreateSkillDto } from './dto/create-skill.dto';
// import { UpdateSkillDto } from './dto/update-skill.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { Observable, of } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
import path = require('path');
import { join } from 'path';

export const storage = {
  storage: diskStorage({
    destination: './uploads/skillimages',
    filename: (req, file, cb) => {
      const filename: string =
        path.parse(file.originalname).name.replace(/\s/g, '') + uuidv4();
      const extension: string = path.parse(file.originalname).ext;
      cb(null, `${filename} ${extension}`);
    },
  }),
};

@Controller('skill')
export class SkillController {
  constructor(private readonly skillService: SkillService) {}

  @Post()
  @UseInterceptors(FileInterceptor('image', storage))
  create(@Body() createSkillDto, @UploadedFile() file) {
    return this.skillService.create(createSkillDto, file);
  }
  uploadFile(@UploadedFile() file): Observable<object> {
    return of({ imagePath: file.filename });
  }

  @Get()
  findAll() {
    return this.skillService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: any) {
    return this.skillService.findOne(id);
  }

  @Get('skill-image/:imagename')
  findProfileImage(
    @Param('imagename') imagename,
    @Res() res,
  ): Observable<object> {
    return of(
      res.sendFile(join(process.cwd(), 'uploads/skillimages/' + imagename)),
    );
  }

  @Patch(':id')
  update(@Param('id') id: any, @Body() updateSkillDto) {
    return this.skillService.update(id, updateSkillDto);
  }

  @Delete(':id')
  remove(@Param('id') id: any) {
    return this.skillService.remove(id);
  }
}

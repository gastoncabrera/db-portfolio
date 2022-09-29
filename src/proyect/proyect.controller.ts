import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UploadedFile,
  UseInterceptors,
  Res,
} from '@nestjs/common';
import { ProyectService } from './proyect.service';
import { CreateProyectDto } from './dto/create-proyect.dto';
import { UpdateProyectDto } from './dto/update-proyect.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { Observable, of } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
import path = require('path');
import { join } from 'path';

export const storage = {
  storage: diskStorage({
    destination: './uploads/proyectimages',
    filename: (req, file, cb) => {
      const filename: string =
        path.parse(file.originalname).name.replace(/\s/g, '') + uuidv4();
      const extension: string = path.parse(file.originalname).ext;
      cb(null, `${filename} ${extension}`);
    },
  }),
};

@Controller('proyect')
export class ProyectController {
  constructor(private readonly proyectService: ProyectService) {}

  @Post()
  @UseInterceptors(FileInterceptor('image', storage))
  create(@Body() createProyectDto, @UploadedFile() file) {
    return this.proyectService.create(createProyectDto, file);
  }
  uploadFile(@UploadedFile() file): Observable<object> {
    return of({ imagePath: file.filename });
  }

  @Get()
  findAll() {
    return this.proyectService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id) {
    return this.proyectService.findOne(id);
  }

  @Get('proyect-image/:imagename')
  findProfileImage(
    @Param('imagename') imagename,
    @Res() res,
  ): Observable<object> {
    return of(
      res.sendFile(join(process.cwd(), 'uploads/proyectimages/' + imagename)),
    );
  }

  @Patch(':id')
  update(@Param('id') id, @Body() updateProyectDto: UpdateProyectDto) {
    return this.proyectService.update(id, updateProyectDto);
  }

  @Delete(':id')
  remove(@Param('id') id) {
    return this.proyectService.remove(id);
  }
}

import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { MatriculasService } from './matriculas.service';

@Controller('matriculas')
export class MatriculasController {
  constructor(private readonly matriculasService: MatriculasService) {}

  @Post()
  create(@Body() body: any) {
    return this.matriculasService.create(body);
  }

  @Get()
  findAll() {
    return this.matriculasService.findAll();
  }

  @Get(':disciplina/:estudante')
  findOne(@Param('disciplina') d: string, @Param('estudante') e: string) {
    return this.matriculasService.findOne(+d, +e);
  }

  @Put(':disciplina/:estudante')
  update(@Param('disciplina') d: string, @Param('estudante') e: string, @Body() body: any) {
    return this.matriculasService.update(+d, +e, body);
  }

  @Delete(':disciplina/:estudante')
  remove(@Param('disciplina') d: string, @Param('estudante') e: string) {
    return this.matriculasService.remove(+d, +e);
  }
}

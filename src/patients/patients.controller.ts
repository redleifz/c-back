import { Body, Controller, Get, NotFoundException, Param, Post, Put } from '@nestjs/common';
import { PatientsService } from './patients.service';
import { CreatePatientDto, UpdatePatientDto } from './dto/createPatientDto';

@Controller('patients')
export class PatientsController {
  constructor(private readonly patientsService: PatientsService) {}

  @Get()
  findAll() {
    return this.patientsService.findAll();
  }

  @Post()
  create(@Body() createPatientDto: CreatePatientDto) {
    return this.patientsService.create(createPatientDto);
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.patientsService.findById(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updatePatientDto: UpdatePatientDto
    ,
  ) {
    const updatedPatient = await this.patientsService.update(id, updatePatientDto);
    if (!updatedPatient) {
      throw new NotFoundException('Patient not found');
    }
    return updatedPatient;
  }
}

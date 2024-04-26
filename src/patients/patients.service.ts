import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Patient } from './entities/patient.model';
import { Repository } from 'typeorm';
import { CreatePatientDto, UpdatePatientDto } from './dto/createPatientDto';

@Injectable()
export class PatientsService {
  constructor(
    @InjectRepository(Patient)
    private readonly patientsRepo: Repository<Patient>,
  ) {}

  async findAll() {
    return await this.patientsRepo.find();
  }

  async create(createPatientDto: CreatePatientDto) {
    const newPatient = this.patientsRepo.create(createPatientDto);
    return await this.patientsRepo.save(newPatient);
  }

  async findById(id: string) {
    const result = await this.patientsRepo.findOne({ where: { id } });
    if (result) {
      return result;
    } else {
      throw new NotFoundException('Patient not found');
    }
  }
  
  

  async update(id: string , updatePatientDto: UpdatePatientDto) {
    await this.patientsRepo.update({ id }, updatePatientDto);

    // Retrieve and return the updated entity
    return this.patientsRepo.findOneBy({ id });
  }
}

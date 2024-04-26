import { Test, TestingModule } from '@nestjs/testing';
import { PatientsService } from './patients.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Patient } from './entities/patient.model';

describe('PatientsService', () => {
  let service: PatientsService;
  let mockRepository;

  beforeEach(async () => {
    mockRepository = {
      find: jest.fn(),
      findOne: jest.fn(),
      create: jest.fn(),
      save: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PatientsService,
        {
          provide: getRepositoryToken(Patient),
          useValue: mockRepository,
        },
      ],
    }).compile();

    service = module.get<PatientsService>(PatientsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  
  describe('findAll', () => {
    it('should return an array of patients', async () => {
      const expectedPatients = [
        { id: '1', name: 'John Doe', age: '30', citizen_id: '123456', birth_date: new Date(), status: 'active' },
        { id: '2', name: 'Jane Doe', age: '25', citizen_id: '789012', birth_date: new Date(), status: 'active' },
      ];
      mockRepository.find.mockResolvedValue(expectedPatients);
      expect(await service.findAll()).toEqual(expectedPatients);
    });
  });

  describe('create', () => {
    it('should successfully insert a patient', async () => {
      const patientData = { name: 'New Patient', age: '29', citizen_id: '456789', birth_date: new Date(), status: 'active' };
      mockRepository.create.mockReturnValue(patientData);  // Simulate the creation logic
      mockRepository.save.mockResolvedValue(patientData);
  
      expect(await service.create(patientData)).toEqual(patientData);
    });
  });
  
  describe('findOne', () => {
    it('should return a single patient', async () => {
      const patient = { id: '1', name: 'John Doe', age: '30', citizen_id: '123456', birth_date: new Date(), status: 'active' };
      mockRepository.findOne.mockResolvedValue(patient);
  
      expect(await service.findById('1')).toEqual(patient);
    });
  });
  
  
  // Additional test cases will be implemented here
});

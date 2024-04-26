import { Test, TestingModule } from '@nestjs/testing';
import { PatientsController } from './patients.controller';
import { PatientsService } from './patients.service';

interface Patient {
  id: string;  // Make sure the type here matches the type used in your implementations.
  name: string;
  citizen_id: string;
  birth_date: Date;
  status: string;
}


describe('PatientsController', () => {
  let controller: PatientsController;
  let service: PatientsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PatientsController],
      providers: [
        {
          provide: PatientsService,
          useValue: {
            findAll: jest.fn(),
          }
        }
      ],
    }).compile();

    controller = module.get<PatientsController>(PatientsController);
    service = module.get<PatientsService>(PatientsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  // Test cases for findAll will be added here
  describe('findAll', () => {
    it('should return an array of patients', async () => {
      const result: Patient[] = [{
        id: '1',  // Ensure this matches the type defined in your Patient interface
        name: 'John Doe',
        citizen_id: '123456789',
        birth_date: new Date('1990-01-01'),
        status: 'active'
      }];
  
      jest.spyOn(service, 'findAll').mockImplementation(() => Promise.resolve(result));
      expect(await controller.findAll()).toEqual(result);
    });
  });
});

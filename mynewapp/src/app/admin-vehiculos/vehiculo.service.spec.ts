import { TestBed, ComponentFixture } from '@angular/core/testing';
import { of } from 'rxjs';
import { VehiculoComponent } from './vehiculo.component';
import { VehiculoService } from './vehiculo.service';
import { Vehiculo } from './vehiculo';

describe('VehiculoComponent', () => {
  let component: VehiculoComponent;
  let fixture: ComponentFixture<VehiculoComponent>;
  let mockVehiculoService: jasmine.SpyObj<VehiculoService>;

  beforeEach(async () => {
    mockVehiculoService = jasmine.createSpyObj('VehiculoService', [
      'consultarVehiculos',
    ]);
    await TestBed.configureTestingModule({
      declarations: [VehiculoComponent],
      providers: [
        { provide: VehiculoService, useValue: mockVehiculoService },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(VehiculoComponent);
    component = fixture.componentInstance;
  
  });

  // Probamos si el componente se crea correctamente
  it('debe crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('Se debe llamar consultar vehiculos  en la inicialización', () => {
    const vehiculos: Vehiculo[] = [
      { marca: 'Nissan', modelo: '1990', linea: 'March' },      
      { marca: 'Chevrolet', modelo: '2017', linea: 'Onix' },
      { marca: 'Chevrolet', modelo: '2000', linea: 'Cavalier' },
    ];

    mockVehiculoService.consultarVehiculos.and.returnValue(of(vehiculos));
    fixture.detectChanges();
    expect(component.vehiculos.slice(0, 3)).toEqual(vehiculos);
  });

  it('Al consultar generos en la inicialización se genera un error', () => {
    expect(() => {
        mockVehiculoService.consultarVehiculos.and.throwError(
            new Error('Error en el servicio por consulta de vehículos')
          );
    })
  });
});

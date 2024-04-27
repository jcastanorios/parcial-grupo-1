import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { VehiculoModule } from './admin-vehiculos/vehiculo.module';
import { HttpClientModule } from '@angular/common/http';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,VehiculoModule, HttpClientModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();


    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });


  it(`should have as title 'Parcial - Grupo 1 - Juan Gonzalo Castaño Rios'`, () => {
    expect(component.title).toEqual('Parcial - Grupo 1 - Juan Gonzalo Castaño Rios');
  });
});


  
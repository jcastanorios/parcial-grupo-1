import { Component, OnInit } from '@angular/core';
import { VehiculoService } from './vehiculo.service';
import { Vehiculo } from './vehiculo';

@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.component.html',
  styleUrls: ['./vehiculo.component.css'],
})
export class VehiculoComponent implements OnInit {
  //Atributo que determina una instancia para administrar atributos del género
  public vehiculos = new Array<Vehiculo>();

  tituloPagina:string = 'TuSegundazo.com';
  urlBanner: string = '../../../assets/banner.jpg';

  /**
   *
   * @param vehiculoService instancia para administrar servicios de vehículo
   */
  constructor(private vehiculoService: VehiculoService) {}

  ngOnInit() {
    this.consultarVehiculos();
  }

  /**
   * Método que permite listar los vehículos almacenados en el sistema
   */
  public consultarVehiculos(): void {
    this.vehiculoService.consultarVehiculos().subscribe({
      next: (data: Vehiculo[]) => {
        this.vehiculos = data;
      },
      error: (e: Error) => this.normalizeError(e),
    });
  }

  /**
   * Método que permite dividir la respuesta del observable de consulta de vehículos
   * y dar un manejo al error generado
   * @param e respuesta de error del servicio de consulta de vehículos
   */
  private normalizeError(e: any): void {
    console.log('errores', e);
  }
}

import { Component, OnInit } from '@angular/core';
import { VehiculoService } from './vehiculo.service';
import { Vehiculo } from './vehiculo';
import { ReporteVehiculo } from './reporte.vehiculo';

@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.component.html',
  styleUrls: ['./vehiculo.component.css'],
})
export class VehiculoComponent implements OnInit {
  //Atributo que determina una instancia para administrar atributos del género
  public vehiculos = new Array<Vehiculo>();
  public reporteVehiculos = new Array<ReporteVehiculo>();

  public tituloPagina: string = 'TuSegundazo.com';
  public urlBanner: string = '../../../assets/banner.jpg';
  public piePagina: string =
    'Contact us: +57 3102105253 - info@tusegundazo.com - @tusegundazo';
    public labelMarca:string="Total marca";
    public separador:string=":";

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
        this.generarReporte();
      },
      error: (e: Error) => this.normalizeError(e),
    });
  }

  private generarReporte(): void {
    const marcas = this.vehiculos.map((vehiculo) => vehiculo.marca);


    this.vehiculos.forEach((vehiculo) => {
      let reporte = this.reporteVehiculos.find(
        (rep) => rep.marca === vehiculo.marca
      );
      if (!!reporte) {
          reporte.total += 1;
          this.reporteVehiculos.splice(this.reporteVehiculos.indexOf(reporte), 1, reporte); 
      } else {
        this.reporteVehiculos.push(new ReporteVehiculo(vehiculo.marca, 1));
      }
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

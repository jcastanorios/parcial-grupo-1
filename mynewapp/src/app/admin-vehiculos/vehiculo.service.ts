import { Injectable } from '@angular/core';
import { Vehiculo } from './vehiculo';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { ConstantesVehiculo } from './constantes.vehiculo';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class VehiculoService {
  header = new HttpHeaders().set('Type-Content', 'application/json');

  constructor(private http: HttpClient) {}
  /**
   *  Servicio que permite consultar la información del vehículo
   * @returns observable de lista con información del vehículo
   */
  public consultarVehiculos(): Observable<Array<Vehiculo>> {
    let url = environment.baseUrl+ConstantesVehiculo.URL_VEHICULOS;
    return this.http
      .get<Array<Vehiculo>>(url)
      .pipe(
        catchError((err) =>
          throwError(
            () => new Error('Error en el servicio por consulta de vehículos')
          )
        )
      );
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empleado } from './empleado'
 
@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  //esta ur obtiene el listado de los empleados//
  private baseURL = "http://localhost:8080/api/v1/empleados";

  constructor(private httpClient : HttpClient) { }

  ////este metodo nos obtiene los empeados
  obtenerListaDeEmpleados():Observable<Empleado[]>{
    return this.httpClient.get<Empleado[]>(`${this.baseURL}`)  
  }
   
  //metodo para regidtrar un empleado
  registrarEmpleado(empleado:Empleado) :Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,empleado);
  }

   //metodo para actualizar un empleado
   actualizarEmpleado(id:number,empleado:Empleado) : Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,empleado);
  }

   //metodo para obtener un empleado por id 
   obtenerEmpleadoPorId(id:number):Observable<Empleado>{
    return this.httpClient.get<Empleado>(`${this.baseURL}/${id}`);
  }

  eliminarEmpleado(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}

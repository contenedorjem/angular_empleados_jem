/**
 * Autor: Joan Edo Moreno
 * Fecha: 21 de diciembre de 2023
 * Descripción: Este servicio proporciona métodos para realizar operaciones CRUD en empleados
 */

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empleado } from './empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  // URL de la API
  private apiUrl = 'http://localhost:3000/empleados';

  constructor(private http: HttpClient) { }

  // Obtiene todos los empleados
  getAllEmpleados(): Observable<Empleado[]> {
    return this.http.get<Empleado[]>(this.apiUrl);
  }

  // Obtiene un empleado por su ID
  getEmpleadoById(id: string): Observable<Empleado> {
    return this.http.get<Empleado>(`${this.apiUrl}/${id}`);
  }

  // Crea un nuevo empleado
  createEmpleado(empleado: Empleado): Observable<Empleado> {
    return this.http.post<Empleado>(this.apiUrl, empleado);
  }

  // Actualiza un empleado existente
  updateEmpleado(empleado: Empleado): Observable<Empleado> {
    return this.http.put<Empleado>(`${this.apiUrl}/${empleado.id}`, empleado);
  }

  // Elimina un empleado por su ID
  deleteEmpleado(id: string): Observable<Empleado> {
    return this.http.delete<Empleado>(`${this.apiUrl}/${id}`);
  }
}
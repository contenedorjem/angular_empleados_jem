/**
 * Autor: Joan Edo Moreno
 * Fecha: 21 de diciembre de 2023
 * Descripción: Este componente gestiona la lista de empleados y las operaciones CRUD relacionadas
 */

import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from './empleado.service';
import { Empleado } from './empleado';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // Lista de empleados
  empleados: Empleado[] = [];
  // Empleado seleccionado
  empleado: Empleado | null = null;

  constructor(private empleadoService: EmpleadoService) { }

  ngOnInit() {
    // Obtiene la lista de empleados al inicializar el componente
    this.getEmpleados();
  }

  // Método para obtener todos los empleados
  getEmpleados(): void {
    this.empleadoService.getAllEmpleados().subscribe(empleados => this.empleados = empleados);
  }

  // Método para obtener un empleado por su ID
  getEmpleadoById(id: string): void {
    this.empleadoService.getEmpleadoById(id).subscribe(empleado => this.empleado = empleado);
  }

  // Método para crear un nuevo empleado
  createEmpleado(empleado: Empleado): void {
    this.empleadoService.createEmpleado(empleado).subscribe(empleado => {
      // Añade el nuevo empleado a la lista de empleados
      this.empleados.push(empleado);
    });
  }

  // Método para actualizar un empleado existente
  updateEmpleado(empleado: Empleado): void {
    this.empleadoService.updateEmpleado(empleado).subscribe(() => {
      // Actualiza el empleado en la lista de empleados
      const index = this.empleados.findIndex(e => e.id === empleado.id);
      if (index !== -1) {
        this.empleados[index] = empleado;
      }
    });
  }

  // Método para eliminar un empleado
  deleteEmpleado(id: string): void {
    this.empleadoService.deleteEmpleado(id).subscribe(() => {
      // Elimina el empleado de la lista de empleados
      this.empleados = this.empleados.filter(empleado => empleado.id !== id);
    });
  }
}
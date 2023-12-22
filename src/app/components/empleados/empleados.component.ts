/**
 * Autor: Joan Edo Moreno
 * Fecha: 21 de diciembre de 2023
 * Descripción: Este componente gestiona la lista de empleados
 */

import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../../empleado.service'; 
import { Empleado } from '../../empleado'; 
import Swal from 'sweetalert2';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
})
export class EmpleadosComponent implements OnInit {
  // Array para almacenar los empleados
  empleados: Empleado[] = [];
  
  // Variable para almacenar el índice del empleado que se está editando
  editingIndex: number | null = null;

  constructor(private empleadoService: EmpleadoService) { }

  ngOnInit(): void {
    // Al inicializar el componente, obtenemos todos los empleados
    this.empleadoService.getAllEmpleados().subscribe((data: Empleado[]) => {
      this.empleados = data;
    });
  }

  // Método para activar/desactivar la edición de un empleado
  toggleEdit(index: number, empleado: Empleado) {
    // Si ya estamos editando este empleado, preguntamos si queremos actualizarlo
    if (this.editingIndex === index) {
      Swal.fire({
        title: '¿Estás seguro?',
        text: "¿Deseas actualizar este empleado?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, actualizar!',
        cancelButtonText: 'No, cancelar!'
      }).then((result) => {
        if (result.isConfirmed) {
          // Si el usuario confirma, actualizamos el empleado y desactivamos la edición
          this.updateEmpleado(empleado);
          this.editingIndex = null;
        } else {
          // Si el usuario cancela, simplemente desactivamos la edición
          this.editingIndex = null;
        }
      })
    } else {
      // Si no estamos editando este empleado, activamos la edición
      this.editingIndex = index;
    }
  }

  // Método para actualizar un empleado
  updateEmpleado(empleado: Empleado) {
    this.empleadoService.updateEmpleado(empleado).subscribe({
      next: (response: any) => {
        console.log(response);
        Swal.fire('¡Éxito!', 'Empleado actualizado con éxito!', 'success');
      },
      error: (error: any) => {
        console.error(error);
        Swal.fire('¡Error!', 'Error al actualizar el empleado.', 'error');
      }
    });
  }

  // Método para eliminar un empleado
  deleteEmpleado(index: number, empleado: Empleado) {
    Swal.fire({
      title: '¿Estás seguro?',
      text: "¿Deseas eliminar este empleado?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar!',
      cancelButtonText: 'No, cancelar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.empleadoService.deleteEmpleado(empleado.id).subscribe({
          next: (response: any) => {
            console.log(response);
            Swal.fire('¡Eliminado!', 'El empleado ha sido eliminado.', 'success');
            // Eliminamos el empleado del array de empleados
            this.empleados.splice(index, 1);
          },
          error: (error: any) => {
            console.error(error);
            Swal.fire('¡Error!', 'Error al eliminar el empleado.', 'error');
          }
        });
      }
    })
  }
}
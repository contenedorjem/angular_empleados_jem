/**
 * Autor: Joan Edo Moreno
 * Fecha: 21 de diciembre de 2023
 * Descripción: Este componente permite crear un nuevo empleado
 */
// Importa los módulos necesarios
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmpleadoService } from '../../empleado.service';
import { Router } from '@angular/router'; // Importa Router para la navegación entre rutas
import Swal from 'sweetalert2'; // Importa Swal para mostrar alertas

// Decorador Component para definir un componente de Angular
@Component({
  selector: 'app-create-empleado', // Selector para usar este componente en otros templates
  templateUrl: './create-empleado.component.html', // Template HTML del componente
  styleUrls: ['./create-empleado.component.scss'], // Estilos CSS del componente
})
export class CreateEmpleadoComponent implements OnInit {
  // Define el formulario y sus validaciones
  empleadoForm: FormGroup = this.fb.group({
    nombre: ['', Validators.required],
    apellidos: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    sueldo: ['', Validators.required],
    categoria: ['', Validators.required],
    cargo: ['', Validators.required],
    antiguedad: ['', Validators.required],
  });

  // Inyecta las dependencias necesarias en el constructor
  constructor(
    private fb: FormBuilder, // Para construir el formulario
    private empleadoService: EmpleadoService, // Para interactuar con el servicio de empleados
    private router: Router // Para navegar entre rutas
  ) {}

  // Método que se ejecuta al inicializar el componente
  ngOnInit(): void {}

  // Método que se ejecuta al enviar el formulario
  onSubmit(): void {
    // Comprueba si el formulario es válido
    if (this.empleadoForm.valid) {
      console.log('Enviando:', this.empleadoForm.value);

      // Llama al método createEmpleado del servicio de empleados
      this.empleadoService.createEmpleado(this.empleadoForm.value).subscribe({
        // En caso de éxito, muestra una alerta y redirige a la ruta '/empleados'
        next: (response: any) => {
          console.log(response);
          Swal.fire('¡Éxito!', 'Alta de empleado realizada con éxito!', 'success');
          console.log('Redirigiendo a /empleados');
          this.router.navigate(['/empleados']);
        },
        // En caso de error, muestra una alerta de error
        error: (error: any) => {
          console.error(error);
          Swal.fire('Error', 'Error al crear el empleado.', 'error');
        },
      });
    }
  }
}
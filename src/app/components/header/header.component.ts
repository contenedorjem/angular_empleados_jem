/**
 * Autor: Joan Edo Moreno
 * Fecha: 21 de diciembre de 2023
 * Descripción: Este componente gestiona el encabezado de la aplicación
 */

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // Variable para almacenar el estado de inicio de sesión del usuario
  isLoggedIn = false;

  constructor(private router: Router) { }

  ngOnInit() {
    // Al inicializar el componente, verificamos si el usuario está conectado
    this.isLoggedIn = !!localStorage.getItem('user');
  }

  // Método para cerrar la sesión del usuario
  logout() {
    // Eliminamos el usuario del almacenamiento local
    localStorage.removeItem('user');
    // Actualizamos el estado de inicio de sesión a falso
    this.isLoggedIn = false;
    // Mostramos un mensaje de éxito
    Swal.fire({
      title: 'Desconexión exitosa',
      text: 'Has sido desconectado exitosamente.',
      icon: 'success',
      confirmButtonText: 'OK'
    }).then(() => {
      // Redirigimos al usuario a la página de inicio
      this.router.navigate(['/inicio']);
    });
  }
}
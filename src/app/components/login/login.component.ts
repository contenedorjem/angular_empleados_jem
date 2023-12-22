/**
 * Autor: Joan Edo Moreno
 * Fecha: 21 de diciembre de 2023
 * Descripción: Este componente gestiona la página de inicio de sesión de la aplicación
 */

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  // Variables para almacenar el nombre de usuario y la contraseña ingresados
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  // Método para volver a la página de inicio
  goBack() {
    this.router.navigate(['/inicio']);
  }

  // Método para iniciar sesión
  login(): void {
    this.authService.getUser().subscribe((user) => {
      if (user.nick === this.username && user.pass === this.password) {
        // Si las credenciales son correctas, muestra un mensaje de éxito y redirige al usuario a la página de inicio
        Swal.fire({
          icon: 'success',
          title: '¡Inicio de sesión correcto!',
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          this.router.navigate(['/inicio']).then(() => {
            window.location.reload();
          });
        });
      } else {
        // Si las credenciales son incorrectas, muestra un mensaje de error
        Swal.fire({
          icon: 'error',
          title: 'Credenciales incorrectas',
          text: '¡Inicio de sesión fallido!',
        });
      }
    });
  }
}
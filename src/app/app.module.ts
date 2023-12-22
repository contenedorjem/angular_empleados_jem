/**
 * Autor: Joan Edo Moreno
 * Fecha: 21 de diciembre de 2023
 * Descripción: Este módulo define las importaciones, declaraciones, proveedores y bootstrap para la aplicación
 */

// Módulos de Angular
import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';

// Componentes de la aplicación
import { AppComponent } from './app.component';
import { EmpleadosComponent } from './components/empleados/empleados.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CreateEmpleadoComponent } from './components/create-empleado/create-empleado.component';
import { LoginComponent } from './components/login/login.component';

// Servicios y guardias
import { EmpleadoService } from './empleado.service';
import { AuthGuard } from './auth.guard';

// Registro de la localización en español
registerLocaleData(localeEs, 'es');

// Definición de las rutas de la aplicación
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  {
    path: 'empleados',
    component: EmpleadosComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'create-empleado',
    component: CreateEmpleadoComponent,
    canActivate: [AuthGuard],
  },
  { path: '**', redirectTo: '/inicio' },
];

// Registro de la localización en español
registerLocaleData(localeEs, 'es');

@NgModule({
  declarations: [
    AppComponent,
    EmpleadosComponent,
    CreateEmpleadoComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
  ],
  providers: [
    EmpleadoService,
    AuthGuard,
    { provide: LOCALE_ID, useValue: 'es' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
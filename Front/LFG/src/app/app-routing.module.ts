import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AmigosComponent } from './amigos/amigos.component';
import { GruposComponent } from './grupos/grupos.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { MensajesComponent } from './mensajes/mensajes.component';
import { SobreComponent } from './sobre/sobre.component';

const routes: Routes = [
  {path: 'inicio', component: InicioComponent},
  {path: 'amigos', component: AmigosComponent},
  {path: 'grupos', component: GruposComponent},
  {path: 'mensajes', component: MensajesComponent},
  {path: 'sobre', component: SobreComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
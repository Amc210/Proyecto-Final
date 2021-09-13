import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAmigoComponent } from './add-amigo/add-amigo.component';
import { AmigosComponent } from './amigos/amigos.component';
import { CrearGruposComponent } from './crear-grupos/crear-grupos.component';
import { GruposComponent } from './grupos/grupos.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { MensajesComponent } from './mensajes/mensajes.component';
import { SobreComponent } from './sobre/sobre.component';

const routes: Routes = [
  {path: 'inicio', component: InicioComponent},
  {path: 'amigos', component: AmigosComponent},
  {path: 'amigos-add', component: AddAmigoComponent},
  {path: 'grupos', component: GruposComponent},
  {path: 'grupos-crear', component: CrearGruposComponent},
  {path: 'mensajes', component: MensajesComponent},
  {path: 'sobre', component: SobreComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
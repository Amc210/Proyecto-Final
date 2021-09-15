import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddAmigoComponent } from './amigos/add-amigo/add-amigo.component';
import { AmigosComponent } from './amigos/amigos.component';
import { CrearGrupoComponent } from './grupos/crear-grupo/crear-grupo.component';
import { GruposComponent } from './grupos/grupos.component';
import { MensajesComponent } from './mensajes/mensajes.component';
import { SobreComponent } from './sobre/sobre.component';
import { AutenticacionComponent } from './autenticacion/autenticacion.component';

const routes: Routes = [
  {path: 'amigos', component: AmigosComponent},
  {path: 'amigos-add', component: AddAmigoComponent},
  {path: 'grupos', component: GruposComponent},
  {path: 'grupos-crear', component: CrearGrupoComponent},
  {path: 'mensajes', component: MensajesComponent},
  {path: 'sobre', component: SobreComponent},
  {path: 'auth', component: AutenticacionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
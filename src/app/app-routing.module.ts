import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAmigoComponent } from './amigos/add-amigo/add-amigo.component';
import { AmigosComponent } from './amigos/amigos.component';
import { CrearGrupoComponent } from './grupos/crear-grupo/crear-grupo.component';
import { GruposComponent } from './grupos/grupos.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './autenticacion/login/login.component';
import { MensajesComponent } from './mensajes/mensajes.component';
import { SobreComponent } from './sobre/sobre.component';
import { TestpadreComponent } from './testpadre/testpadre.component';
import { AutenticacionComponent } from './autenticacion/autenticacion.component';

const routes: Routes = [
  {path: 'inicio', component: InicioComponent},
  {path: 'amigos', component: AmigosComponent},
  {path: 'amigos-add', component: AddAmigoComponent},
  {path: 'grupos', component: GruposComponent},
  {path: 'grupos-crear', component: CrearGrupoComponent},
  {path: 'mensajes', component: MensajesComponent},
  {path: 'sobre', component: SobreComponent},
  {path: 'auth', component: AutenticacionComponent},
  {path: 'testpadre', component: TestpadreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
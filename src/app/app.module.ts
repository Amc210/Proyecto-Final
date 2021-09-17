import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { InicioComponent } from './inicio/inicio.component';
import { UserbarComponent } from './userbar/userbar.component';
import { NavbarComponent } from './navbar/navbar.component';

import { SobreComponent } from './sobre/sobre.component';

import { AutenticacionComponent } from './autenticacion/autenticacion.component';
import { LoginComponent } from './autenticacion/login/login.component';
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';

import { AmigosComponent } from './amigos/amigos.component';
import { AddAmigoComponent } from './amigos/add-amigo/add-amigo.component';
import { VerAmigosComponent } from './amigos/ver-amigos/ver-amigos.component';

import { GruposComponent } from './grupos/grupos.component';
import { VerGruposComponent } from './grupos/ver-grupos/ver-grupos.component';
import { MisGruposComponent } from './grupos/mis-grupos/mis-grupos.component';
import { BuscarGrupoComponent } from './grupos/buscar-grupo/buscar-grupo.component';
import { CrearGrupoComponent } from './grupos/crear-grupo/crear-grupo.component';

import { MensajesComponent } from './mensajes/mensajes.component';
import { EnviarMensajeComponent } from './mensajes/enviar-mensaje/enviar-mensaje.component';
import { VerMensajesComponent } from './mensajes/ver-mensajes/ver-mensajes.component';
import { DetalleMensajeComponent } from './mensajes/detalle-mensaje/detalle-mensaje.component';
import { TwitchUrlPipe } from './twitch-url.pipe';
import { AsideComponent } from './aside/aside.component';
import { DetalleGrupoComponent } from './grupos/detalle-grupo/detalle-grupo.component';
import { TwitchThumbnailPipe } from './twitch-thumbnail.pipe';
import { SobreContenidoComponent } from './sobre/sobre-contenido/sobre-contenido.component';
import { TipoGrupoPipe } from './tipo-grupo.pipe';
import { ToNumPipe } from './to-num.pipe';

@NgModule({
  declarations: [
    AppComponent,
    GruposComponent,
    AmigosComponent,
    MensajesComponent,
    InicioComponent,
    SobreComponent,
    LoginComponent,
    VerGruposComponent,
    CrearGrupoComponent,
    AddAmigoComponent,
    VerAmigosComponent,
    EnviarMensajeComponent,
    PerfilUsuarioComponent,
    NavbarComponent,
    VerMensajesComponent,
    DetalleMensajeComponent,
    AutenticacionComponent,
    UserbarComponent,
    MisGruposComponent,
    BuscarGrupoComponent,
    TwitchUrlPipe,
    AsideComponent,
    DetalleGrupoComponent,
    TwitchThumbnailPipe,
    SobreContenidoComponent,
    TipoGrupoPipe,
    ToNumPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

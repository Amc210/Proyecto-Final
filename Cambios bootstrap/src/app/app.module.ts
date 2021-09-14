import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GruposComponent } from './grupos/grupos.component';
import { AmigosComponent } from './amigos/amigos.component';
import { MensajesComponent } from './mensajes/mensajes.component';
import { InicioComponent } from './inicio/inicio.component';
import { SobreComponent } from './sobre/sobre.component';
import { LoginComponent } from './login/login.component';
import { CrearGruposComponent } from './crear-grupos/crear-grupos.component';
import { AddAmigoComponent } from './add-amigo/add-amigo.component';
import { EnviarMensajeComponent } from './mensajes/enviar-mensaje/enviar-mensaje.component';
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    GruposComponent,
    AmigosComponent,
    MensajesComponent,
    InicioComponent,
    SobreComponent,
    LoginComponent,
    CrearGruposComponent,
    AddAmigoComponent,
    EnviarMensajeComponent,
    PerfilUsuarioComponent
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

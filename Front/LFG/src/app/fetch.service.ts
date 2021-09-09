import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class FetchService {

  obtenerDatos(tipo:string) {

    let auth_token:string = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJyb290IiwiZXhwIjoxNjMxMjAyOTQ2fQ.XuBsGZWYqrhA6-0wkWi383cFWO76ypOQlAkBxD8CCye-wDXyWt0cMHj70rXM07NmUqbWoKHUChFtqM_im9JKOg";

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + auth_token + ''
    })

    let url ="http://localhost:8181/api/";

    if (tipo == "root") {
      return this.http.get(url);
    }

    if (tipo == "grupos") {
      return this.http.get(url + "grupos/nombre/grupo%20test", {headers: headers});
    }

    if (tipo == "mensajes") {
      return this.http.get(url + "mensajes/");
    }

    if (tipo == "amigos") {
      return this.http.get(url + "amigos/");
    }

    else {
      return this.http.get(url);
    }

  }

  constructor(private http: HttpClient) { 
  }
  
}

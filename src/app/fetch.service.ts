import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8181/api/';
//const API_URL = "https://trabajo-final01.herokuapp.com/api/";
const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';

const httpOptions = {
  headers: new HttpHeaders(
    {
      'Content-Type': 'application/json'
    }
)};

@Injectable({
  providedIn: 'root'
})

export class FetchService {

  authToken:string = "eyJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE2MzE4NDc4MjUsImlzcyI6InJvb3QiLCJzdWIiOiJ0ZXN0IiwiZXhwIjoxNjMyNzExODI1fQ.94MAU774t_N3YQF0qXYPpBDOYV1aevkLVngT-pY7EPal35PyS2AcSyUPganFstEBYeL__hZlTAFsw2T-PGxd8Q";
  //authToken:string = "eyJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE2MzE4MTU3NDQsImlzcyI6InJvb3QiLCJzdWIiOiJ0ZXN0IiwiZXhwIjoxNjMyNjc5NzQ0fQ.y-i_3JnnXgPD_BoQnUiEUdnsji9sxAoBlDHjjwUitCxgc_BrMKVcgoQnYvx7qvgVjpgkftqIilLqiDwSWfbWcQ";

  constructor(private http: HttpClient) {}

  // Almacena el bearer token, indica que estamos logueados
  loguear(user:string, password:string): Observable<any>{
    return this.http.post(API_URL + "login", {
      user,
      password
    }, httpOptions);
  }

  desloguear(): void{
    window.sessionStorage.clear();
  }

  public guardarToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public obtenerToken(): string | null {
    return window.sessionStorage.getItem(TOKEN_KEY);
  }

  public guardarUsuarioToken(user: any) {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public obtenerUsuarioToken(): any{
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }

    return {};

  }

  // 
  registrar(user:string, email: string, password:string): Observable<any>{
    return this.http.post(API_URL + "login", {
      user,
      email,
      password
    }, httpOptions);
  }
  
  enviarDatos(tipo:string, object:any): Observable<any>{

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.authToken + ''
    })

    if (tipo == 'grupos'){
      return this.http.post(API_URL + "grupos/", object, {headers: headers});
    }

    if (tipo == 'amigos'){
      return this.http.post(API_URL + "grupos/", object, {headers: headers});
    }

    else {
      console.log("Error en los datos del post");
      return this.http.get(API_URL);
    }

  }

  obtenerDatos(tipo:string) : Observable<any> {

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.authToken + ''
    })

    if (tipo == "root") {
      return this.http.get(API_URL);
    }

    if (tipo == "gruposxnombre") {
      return this.http.get(API_URL + "grupos/nombre/", {headers: headers});
    }

    if (tipo == "gruposxid") {
      return this.http.get(API_URL + "grupos/id/1", {headers: headers});
    }

    if (tipo == "grupos") {
      return this.http.get(API_URL + "grupos/", {headers: headers});
    }

    if (tipo == "mensajes") {
      return this.http.get(API_URL + "mensajes/");
    }

    if (tipo == "amigos") {
      return this.http.get(API_URL + "amigos/");
    }

    if (tipo == "juegos") {
      return this.http.get(API_URL + "juegos/", {headers: headers});
    }

    else {
      return this.http.get(API_URL);
    }

  }


  
}

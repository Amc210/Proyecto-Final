import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

//const API_URL = 
//const API_URL = 'http://localhost:8181/api/';
const API_URL = "https://api.twitch.tv/helix/";

const httpOptions = {
  headers: new HttpHeaders(
    {
      "Client-ID": "o3fgxhag6m7u124ipais3ctijgs9k0",
      "Authorization": "Bearer lcnknv9ymi3zbpeb2kqumq1721wxb7"
    }
)};

@Injectable({
  providedIn: 'root'
})

export class TwitchFetchService {

  constructor(private http: HttpClient) {}

  obtenerDatos(tipo:string) {

    if (tipo == "juegos") {
      return this.http.get(API_URL + "games/top?first=4", httpOptions);
    }

    if (tipo == "streams") {
      return this.http.get(API_URL + "streams/?first=4", httpOptions);
    }

    if (tipo == "streamers") {
      return this.http.get(API_URL + "games/top?first=4", httpOptions);
    }

    else {
      return this.http.get(API_URL);
    }

  }

  enviarDatos(){

  }
  
}

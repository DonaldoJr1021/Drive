import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {

  constructor(public http: HttpClient) {

  }

  //Dirección de la api
  url = "http://localhost:3100/usuario";
  urlc = "http://localhost:3100/conductor";
  urls = "http://localhost:3100/servicio"

  //funcion para obtener información de los usuarios registrados en la api
  getUsers(){
    return new Promise(resolve =>{
      this.http.get(this.url).subscribe(data => {
        resolve(data);
      }, err =>{
        console.log(err);
      });
    });
  };

  addUser(data){
    return new Promise((resolve, reject) =>{
      this.http.post(this.url,data).subscribe(res =>{
        resolve(res);
      }, (err) => {
        reject(err);
    });
    });
  };

  addConductor(data){
    return new Promise((resolve, reject) =>{
      this.http.post(this.urlc,data).subscribe(res =>{
        resolve(res);
      }, (err) => {
        reject(err);
    });
    });
  };

  Servicios(data){
    return new Promise((resolve, reject) =>{
      this.http.post(this.urls,data).subscribe(res =>{
        resolve(res);
      }, (err) => {
        reject(err);
      });
      });
    };

  }

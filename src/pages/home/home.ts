import { ServicioPage } from './../servicio/servicio';
import { ConductorPage } from './../conductor/conductor';
import { RegistrarPage } from './../registrar/registrar';
import { RestProvider } from './../../providers/rest/rest';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public restProvider: RestProvider) {
    this.getUsers();
  }
  users: any;

  getUsers(){
    this.restProvider.getUsers().then(data =>{
      this.users = data;
      console.log(this.users);
    });
  };

  Registro(){
    this.navCtrl.push(RegistrarPage);
  }

  Login(){
    this.navCtrl.push(LoginPage);
  }

  Conductor(){
    this.navCtrl.push(ConductorPage);
  }

  Servicio(){
    this.navCtrl.push(ServicioPage);
  }
}

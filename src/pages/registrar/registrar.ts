import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from './../../providers/rest/rest';
import { ServicioPage } from './../servicio/servicio';

/**
 * Generated class for the RegistrarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registrar',
  templateUrl: 'registrar.html',
})
export class RegistrarPage {
  users: any ={
    "Nombres_Apellidos": "",
    "Celular": "",
    "email": "",
    "passw": ""
    }
  constructor(public navCtrl: NavController, public navParams: NavParams, public restprovider: RestProvider) {
  }

  addusers(){
    this.restprovider.addUser(this.users).then(res =>{
      console.log(res)
    }).catch(err =>{
      console.log(err)
    })
    alert("Registro Exitoso!");
    this.navCtrl.push(ServicioPage);
  }
}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from './../../providers/rest/rest';

/**
 * Generated class for the ConductorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-conductor',
  templateUrl: 'conductor.html',
})
export class ConductorPage {
  conductores: any ={
    "Nombres_Apellidos": "",
    "Celular": "",
    "email": "",
    "passw": "",
    "Foto_perfil": "Foto",
    "cedula": "",
    "placa": "",
    "disponibilidad": "0",
    "Foto1": "derecha",
    "Foto2": "izquierda",
    "Foto3": "frontal",
    "Foto4": "placa"
    }

  constructor(public navCtrl: NavController, public navParams: NavParams, public restprovider: RestProvider) {
  }

  addconductores(){
    this.restprovider.addConductor(this.conductores).then(res =>{
      console.log(res)
    }).catch(err =>{
      console.log(err)
    })
    alert("Registro Exitoso!")
  }
}

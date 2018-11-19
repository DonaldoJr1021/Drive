import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from './../../providers/rest/rest';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  users: any ={
    "Nombres_Apellidos": "",
    "Celular": "",
    "email": "",
    "passw": ""
    }
  constructor(public navCtrl: NavController, public navParams: NavParams, public restprovider: RestProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  addusers(){
    this.restprovider.addUser(this.users).then(res =>{
      console.log(res)
    }).catch(err =>{
      console.log(err)
    })
  }
}

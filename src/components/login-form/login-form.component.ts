import { Component,EventEmitter, Output } from '@angular/core';
import {  NavController } from 'ionic-angular';

import { Account } from "../../models/account/account.interface";
import { LoginResponse } from "../../models/login/login.response.interface";
import { AuthService } from '../../providers/auth/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: 'login-form.component.html'
})
export class LoginFormComponent {

  @Output() loginStatus:EventEmitter<LoginResponse>;


  account = {} as Account;

  constructor(private auth:AuthService, private navCtrl: NavController) {
    this.loginStatus = new EventEmitter<LoginResponse>();
  }

  async login(){

    const result = await this.auth.signInWithEmailAndPassword(this.account)

    this.loginStatus.emit(result);
  }
  // navigateToPage(pageName:string){
  //   pageName === 'TabsPage' ? this.navCtrl.setRoot(pageName) : this.navCtrl.push(pageName);
  // }

  navigateToRegisterPage(){
    this.navCtrl.push('RegisterPage');
  }

}

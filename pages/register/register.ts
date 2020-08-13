import { Component } from '@angular/core';
import { LoginService } from '../../app/services/login.service';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})

export class LoginPage{

  public login = {email: '', password: ''};

  constructor(public loginService : LoginService) { }

  IniciarSesion($event){
    // alert("Funciona el boton");
    // this.loginService.login(this.login.email, this.login.password);

  }
}
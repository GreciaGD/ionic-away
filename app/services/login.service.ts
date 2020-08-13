import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class LoginService {

  api = "https://intense-shelf-17342.herokuapp.com/"
  constructor( public httpclient: HttpClient) { }

  getHeaders(){
    return new HttpHeaders({
      'Authorization': 'Bearer' + localStorage.getItem("access_token"),'Conten-Type': 'application/x-www-form-urlencoded'
    });
  }

  public get logIn() : boolean {
    if ( localStorage.getItem("access_token") !== null ){
      var punto = new Date(localStorage.getItem("expires_in"));
      var actual = new Date();
      if(actual < punto){
        return true;
      }
      return false;
    }
    return false;
  }

  postMe(){
    return this.httpclient.post(this.api + "api/auth/me", {

    }, {
      headers: this.getHeaders()
    });
  }

  login(email: string, password: string) {
    this.httpclient.post(this.api + "api/auth/login", {email: email, password: password})
    .subscribe((response: any) => {
        console.log(">", response); 
        localStorage.setItem("access_token", response.access_token);
        localStorage.setItem("token_type", response.token_type);
        var tiempo = new Date(Date.now() + (response.expires_in * 1000));
        localStorage.setItem("expires_in", tiempo.toString());
        alert("Bienvenido");
      }, (error: any) => {
        console.log("Error");
        alert("Credenciales incorrectas");
    });
  }

  logout(){
    this.httpclient.post(this.api + "api/auth/logout", {});
  } 
}
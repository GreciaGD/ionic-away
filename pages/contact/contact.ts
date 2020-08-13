import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  image = "https://lorempixel.com/g/400/200/";
  fecha = new Date();
  constructor(public navCtrl: NavController) {

  }
  pickerCancel(){
    alert("se ha cancelado la fecha");
  }
}

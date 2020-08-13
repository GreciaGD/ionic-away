import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoaderController } from '../../app/providers/loader.controller';
import { ProductService } from '../../app/services/products.service';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  loader;
  addProductsForm: FormGroup;

  constructor(public navCtrl: NavController, private formBuilder: FormBuilder, private loaderController: LoaderController, private productService: ProductService ) {
    this.addProductsForm = formBuilder.group({
      'name': '',
      'brand':'',
      'price':'',
      'thumbImage':'',
      'stock':'',
      'description':'',
      'specification':''
    })
  }

  onSubmit(){
    // alert("xd");
    this.loader = this.loaderController.create({
      'content': 'Cargando... Espere un momento',
      duration: 2000
    });
    this.loader.present();
  }

}

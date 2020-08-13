import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProductService } from '../../app/services/products.service';
import { LoaderController } from '../../app/providers/loader.controller';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  loader;
  products:any = [];
  constructor(public navCtrl: NavController, private productService : ProductService, private loaderController: LoaderController ) {
    this.productService.filter()
      .subscribe((res)=>{        
        this.products = res["objects"];
        this.loader.dismiss();
      }, (err)=>{})
  }

  ionViewDidLoad(){
    this.loader = this.loaderController.create({
      'content': 'Cargando productos',
      // duration: 2000
    });
    this.loader.present();
  }

}

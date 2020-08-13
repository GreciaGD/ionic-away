import { LoadingController, Loading, LoadingOptions, NavOptions } from 'ionic-angular';
import { Injectable } from '@angular/core';

@Injectable()

export class LoaderController extends LoadingController{
  public create(opt: LoadingOptions = {}): MyLoading{
    let options: LoadingOptions = {
      content: "Cargando...",
      dismissOnPageChange: true,
      enableBackdropDismiss: false,
      showBackdrop: true
    };
    for(let key in options){
      if( typeof opt[key]=="undefined"){
        opt[key] == options[key];
      }
    }
    return MyLoading.decorate(super.create(opt));
  }
}

class MyLoading extends  Loading{
  public static decorate(ctrl: Loading): MyLoading{
    ctrl.present = MyLoading.prototype.present;
    return <MyLoading> ctrl;
  }

  public present(opt?: NavOptions): Promise<any>{
    let warning = setTimeout(()=>{
      this.data.content += "<br/> click para cancelar";
    }, 3000);
    this.onWillDismiss(()=>{
      clearTimeout(warning)
    });
    return super.present(opt);
  }
}
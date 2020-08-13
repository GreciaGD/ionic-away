import {Injectable} from '@angular/core';

import {HttpClient, HttpHeaders} 
  from '@angular/common/http';

@Injectable()
export class ProductService {
  api = "https://intense-shelf-17342.herokuapp.com/"
  constructor(public httpClient:HttpClient) {}

  private headers = new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded'
  })

  getFormUrlEncoded(toConvert){
    const formBody = [];
    for (const property in toConvert){
      const encodedKey = encodeURIComponent(property);
      const encodedValue = encodeURIComponent(toConvert[property]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    return formBody.join('&');
  }

  filter() {
    return this.httpClient.get(this.api+"api/auth/products");
  }

  post(name:string, brand:string, price:number, salePrice:number, thumbImage:string, stock:number, description:string, specification:string){
    return this.httpClient.post(this.api + "api/auth/products", this.getFormUrlEncoded({
      'name': name,
      'brand': brand,
      'price': price,
      'salePrice': salePrice,
      'thumbImage': thumbImage,
      'stock': stock,
      'description': description,
      'specification': specification
    }), {'headers': this.headers});
  }
}
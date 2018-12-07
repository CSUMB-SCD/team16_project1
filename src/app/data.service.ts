import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private http: HttpClient) {}
  cartObject: {
    id: String,
    description: Object,
    image: Object,
    stock: number,
    name: String,
    price: number,
    quant: number
  } [] = [];

  // tslint:disable-next-line:max-line-length
  addToCart(product: {id: String, description: Object, image: Object, stock: number, name: String, price: number, quant: number}, quantity: number) {
   const index = this.cartObject.findIndex(data => data.id === product.id);
   if (index === -1) {
     // item not in cart
     this.cartObject.push(product);
     this.cartObject[0].quant = 1;
     console.log(product);
     console.log(this.cartObject);
   } else {
     // item in cart increment amount wanted
      this.cartObject[index].quant = this.cartObject[index].quant + quantity;
      console.log(product);
      console.log(this.cartObject);

   }
  }

  deleteAll() {
    this.cartObject = [];
  }

  getProducts() {
    return this.http.get('https://team16-productdbsvc.herokuapp.com/products');
  }

  getProductID(productID) {
      return this.http.get('https://team16-productdbsvc.herokuapp.com/productid/' + productID);
  }

  getUser(userID) {
      return this.http.get('https://team16-userdbsvc.herokuapp.com/userid/' + userID);
  }

  getUsername(username) {
    return this.http.get('https://team16-userdbsvc.herokuapp.com/username/' + username);
  }

  updateStockNum(id, value) {
    return this.http.get('https://team16-userdbsvc.herokuapp.com/username/' + id + '/' + value);
  }

}

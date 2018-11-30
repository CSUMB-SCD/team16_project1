import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  constructor(private http: HttpClient) {}

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

  // getPassword() {
  //   return this.http.get("https://team16-userdbsvc.herokuapp.com/password/" + password);
  // }

}

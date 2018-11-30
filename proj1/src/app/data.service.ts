import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  constructor(private http: HttpClient) {}

  getProducts() {
    // return this.http.get();
    return null;
  }

   getProductID(productID) {
        // return this.http.get();
        return null;
  }

  getUser(userID) {
        // return this.http.get();
        return null;
  }

}

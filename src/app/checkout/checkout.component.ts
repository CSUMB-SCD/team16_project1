import { DataService } from './../data.service';
import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { NumberFormatStyle } from '@angular/common';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  Cart: Object[];
  prod$: Object;
  CartItemO: any;
  temp: string;
  tot:  number;
  i: number;

  constructor(private data: DataService) { }

  ngOnInit() {
    if (localStorage.getItem('currentUser') != null) {
      for (this.i = 1; this.i <= Number(localStorage.getItem('CartSize')); this.i++ ) {
        this.CartItemO = JSON.parse(localStorage.getItem('Item' + this.i.toString()));
        this.data.getProductID(this.CartItemO.prodId.toString()).subscribe(
          data => this.prod$ =  data
        );

        this.Cart.push(this.prod$);
      }
    }
  }

  removeAllInstances() {
  }

  updateCart() {
  }

}

import { DataService } from './../data.service';
import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  Cart: Object[];
  // prices: number[];
  prod$: Object;
  CartItemO: any;
  temp: string;
  tot:  number;
  cat: number;
  i: number;
  currenturl: string;

  public prices: {
    id: String,
    p: number
  } [] = [];


  constructor(public data: DataService, private router: Router) {
    router.events.subscribe((_: NavigationEnd) => this.currenturl = _.url);
  }

  ngOnInit() {
    // if (localStorage.getItem('currentUser') != null) {
    //   for (this.i = 1; this.i <= Number(localStorage.getItem('CartSize')); this.i++ ) {
    //     this.CartItemO = JSON.parse(localStorage.getItem('Item' + this.i.toString()));
    //     this.data.getProductID(this.CartItemO.prodId.toString()).subscribe(
    //       data => this.prod$ =  data
    //     );

    //     this.Cart.push(this.prod$);
    //   }
    // }
  console.log(this.data.cartObject);
    this.tot = 0;

  }

  removeAllInstances() {
  }

  setCost(i: string, price: number) {
    const index = this.prices.findIndex(data => data.id === i);
   if (index === -1) {
    this.prices.push({id: i, p: price});
   } else {
     this.prices[index].p = price;
   }
  }

  calculate() {
    this.tot = 0;
    console.log(this.prices);
    for (let i = 0; i < this.prices.length; i++) {
        this.tot += this.prices[i].p;
        console.log('help' + this.tot);
    }
    // this.prices = [];
    return this.tot;
  }

}

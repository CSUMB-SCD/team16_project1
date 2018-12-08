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
  console.log(this.data.cartObject);
    this.tot = 0;

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

    return this.tot;
  }

}

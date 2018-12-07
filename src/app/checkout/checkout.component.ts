import { DataService } from './../data.service';
import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

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


  constructor(private data: DataService, private router: Router) {
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

  updateCart() {
  }

  calculate(price : number) {
    this.tot = this.tot + price;
  }

}

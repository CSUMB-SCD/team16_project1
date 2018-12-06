import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  Cart$: Object;
  Subtotal: number;
  itemTotals: number[];

  constructor(private data: DataService) { }

  ngOnInit() {
  }

  removeAll() {
  }

  updateCount() {
  }

  placeOrder() {
  }

}

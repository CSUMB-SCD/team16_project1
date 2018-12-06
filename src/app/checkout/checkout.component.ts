import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  Cart: Array<any>[];

  constructor(private data: DataService) { }

  ngOnInit() {

  }

  removeAllInstances() {
  }

  updateCart() {
  }

}

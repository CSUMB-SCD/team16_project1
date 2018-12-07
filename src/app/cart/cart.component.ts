import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  Cart: Object;
  ProdList: Object;
  user: any;

  constructor(private data: DataService) { }

  ngOnInit() {
  }

}

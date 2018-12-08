import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {Observable } from 'rxjs';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
 animations: [
   trigger('listStagger', [
     transition('* <=> *', [
       query(':enter',
       [
         style({opacity: 0, transform: 'translateY(-15px)'}),
         stagger('50ms',
         animate('550ms ease-out',
         style({ opacity: 1, transform: 'translateY(0px)'})))
       ], { optional: true }),
       query(':leave', animate('50ms', style ({ opacity: 0 })), {
         optional: true
       })
     ])
   ])
 ]
})

export class ProductsComponent implements OnInit {

  product$: Object;
  CartItemI: any;
  CartItemO: any;
  size: number;
  tot: number;
  order: string;
  i: number;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getProducts().subscribe(
      data => this.product$ = data
    );

    localStorage.setItem('CartSize', '0');
  }

  // tslint:disable-next-line:max-line-length
  addOneToCart(item: {id: String, description: Object, image: Object, stock: number, name: String, price: number, quant: number}, q: number) {
    if (localStorage.getItem('currentUser') != null) {
     this.data. addToCart(item, q);
      alert('Item added to Cart');

    } else {
    alert('Please login');
    }
  }

}

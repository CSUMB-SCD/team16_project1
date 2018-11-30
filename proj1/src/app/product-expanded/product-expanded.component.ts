import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Observable } from 'rxjs';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-product-expanded',
  templateUrl: './product-expanded.component.html',
  styleUrls: ['./product-expanded.component.scss'],
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

export class ProductExpandedComponent implements OnInit {

  product$: any;

  constructor(private data: DataService, private route : ActivatedRoute) {
    this.route.params.subscribe(params => this.product$ = params.id);

  }

  ngOnInit() {
    this.data.getProductID(this.product$).subscribe(
      data => this.product$ = data
    );
  }

}

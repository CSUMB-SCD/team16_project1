import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {Observable } from 'rxjs';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
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


export class HomeComponent implements OnInit {
  images = [
    'https://i.pinimg.com/736x/04/7f/46/047f468286c538988a279d14027ef3b5.jpg',
    'https://bkstr.scene7.com/is/image/Bkstr/2029-CUDDLEBUD-WDMK-Puppy?$GMCategory$&$MoreColors$',
    'https://bkstr.scene7.com/is/image/Bkstr/6-66-1B--1P-1-Brown-Pink?$GMCategory$',
  ];
  product$: Object;
  arraym = [];
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getProducts().subscribe(
      data => this.product$ = data);
  }

}

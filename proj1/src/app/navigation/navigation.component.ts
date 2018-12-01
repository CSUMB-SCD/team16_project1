import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})

export class NavigationComponent implements OnInit {

  currentUrl: string;

  constructor(private router: Router) {
    // router.events.subscribe((_: NavigationEnd) => this.currentUrl = _.url);
    router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((_: NavigationEnd) => this.currentUrl = _.url);
   }

  ngOnInit() {
  }

}

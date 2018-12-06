import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})

export class NavigationComponent implements OnInit, AfterViewChecked {

  currentUrl: string;
  logged: boolean;
  i: number;
  size: number;

  constructor(private router: Router) {
    // router.events.subscribe((_: NavigationEnd) => this.currentUrl = _.url);
    router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((_: NavigationEnd) => this.currentUrl = _.url);
   }

  ngOnInit() {
  }

  ngAfterViewChecked() {
    this.logged = Number(localStorage.getItem('currentState')) === 1;
  }

  logout() {
    localStorage.removeItem('currentUser');
    localStorage.setItem('currentState', '0');

    this.size = Number(localStorage.getItem('CartSize'));

      for (this.i = 1; this.i <= this.size; this.i++ ) {
        localStorage.removeItem('Item' + this.i.toString() );
      }

    localStorage.setItem('CartSize', '0');
  }

}

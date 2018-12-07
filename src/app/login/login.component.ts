import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  User$: Object = null;
  userName: string;
  passWord: string;
  succ = false;
  log = 0;
  i: number;
  size: number;

  constructor(private data: DataService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.data.getUsername(this.userName).subscribe(
      data => this.User$ = data);


    if (this.User$ != null) {
      this.succ = true;
      this.log = 1;
      this.router.navigate(['/home']);
      localStorage.setItem('currentUser', JSON.stringify(this.userName));
      localStorage.setItem('currentState', JSON.stringify(this.log));
      alert('Login Successful');
    }
  }
}

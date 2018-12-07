import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';

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
  loginForm: FormGroup;
  submitted = false;

  constructor(private data: DataService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {

    this.submitted = true;

    this.data.getUsername(this.userName).subscribe(
      data => this.User$ = data);

    if (this.loginForm.invalid) {
      return;
    }

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

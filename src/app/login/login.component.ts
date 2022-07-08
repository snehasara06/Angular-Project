import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../Services/Auth/auth.service';
import { DataService } from '../Services/Data/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(public dataService: DataService, private router: Router, private auth: AuthService) { }

  ngOnInit(): void { }

  login(loginForm: NgForm) {
    console.log('Logged in!')
    console.log(loginForm.value);

    this.auth.loginUser(loginForm.value)
      .subscribe(
        res => {
          console.log(res)
          localStorage.setItem('token', res.token)
          this.router.navigate(['vacay'])
        },
        err => { console.log(err) }

      )
  }

  
}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../Services/Login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(public loginService: LoginService, private router: Router) { }

  ngOnInit(): void { }

  login(form: NgForm) {
    this.loginService.login(form.value).subscribe((data: any) => {
      this.loginService.role = data.user.role
      if (this.loginService.loginRole == "Admin") {
        localStorage.setItem('role', data.user.role);
      }
      localStorage.setItem('token', data.token)
      form.reset()
    }, (error) => {
      console.log("Error in Login ts");
    })
  }

  signUp() {
    this.router.navigate(['/register'])
  }


}

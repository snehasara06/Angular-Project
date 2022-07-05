import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from '../Models/Login/login';
import { LoginService } from '../Services/Login/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [LoginService]
})
export class RegisterComponent implements OnInit {

  constructor(public loginService: LoginService, private router: Router) { }
  visible: boolean = false;
  registerUser!: Login;
  checkPass(e: Event) {
    if (this.loginService.pass1 == this.loginService.pass2) {
      this.visible = false;
    }
    else {
      this.visible = true;
    }
  }
  ngOnInit(): void {
  }
  register(form: NgForm) {
    // this.loginService.postUser(form.value).subscribe((data: any) => {
    //   console.log(data.token);
    //   localStorage.setItem('token', data.token)
    //   window.alert("Successfully registered:)");
    console.log('Registered')
      this.router.navigate(['/']);
    // })
  }
  cancel(){
    this.router.navigate(['login']);
  }

}

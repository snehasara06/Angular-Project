import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { dataUser } from '../Models/dataUser';
import { AuthService } from '../Services/Auth/auth.service';
import { DataService } from '../Services/Data/data.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [DataService]
})
export class RegisterComponent implements OnInit {

  constructor(public dataService: DataService, private router: Router, private auth: AuthService) { }
  visible: boolean = false;
  registerUser!: dataUser;

  checkPass(e: Event) {
    if (this.dataService.password == this.dataService.confirmPassword) {
      this.visible = false;
    }
    else {
      this.visible = true;
    }
  }
  ngOnInit(): void { }

  register(registerForm: NgForm) {
    this.auth.registerUser(registerForm.value)
      .subscribe(
        res => {
          console.log(res)
          localStorage.setItem('token', res.token)
          this.router.navigate(['vacay'])
        },
        err => {
          console.log(err)
        }
      )
  }
  cancel() {
    this.router.navigate(['login']);
  }

}

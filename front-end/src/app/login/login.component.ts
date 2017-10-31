import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userModel = {
    username: "",
    password: "",
  }

  authError: any;

  constructor(private authService:AuthService) { }

  login(form: NgForm) {
    this.authError = "";

    if (form.value.username && form.value.password) {
      this.authService.login(form)
        .subscribe(
          (res) => {
            console.log(res);
            this.authService.saveToken(res.token);
          },
          err => {
            console.log(err);
            this.authError = "Incorrect credentials";
          }
        );
    }
  }

  ngOnInit() {
  }

}

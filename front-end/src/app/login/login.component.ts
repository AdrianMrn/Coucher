import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userModel = {
    email: "",
    password: "",
  }

  authError: any;

  constructor(private authService:AuthService) { }

  @Output() onClickRegister = new EventEmitter();
  @Output() onLoggedIn = new EventEmitter();

  login(form: NgForm) {
    this.authError = "";

    if (form.value.username && form.value.password) {
      this.authService.login(form)
        .subscribe(
          (res) => {
            this.authService.saveToken(res.token);
            this.onLoggedIn.emit();
          },
          err => {
            this.authError = "Incorrect credentials";
          }
        );
    }
  }

  register() {
    this.onClickRegister.emit();
  }

  ngOnInit() {
  }

}
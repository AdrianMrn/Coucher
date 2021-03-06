import { Component, OnInit, EventEmitter, ViewChild } from '@angular/core';
import { MaterializeAction } from 'angular2-materialize';
import { EasingLogic } from 'ng2-page-scroll';

import { AuthService } from '../services/auth.service';

import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isLoggedIn: any;

  //nav buttons easing
  myEasing: EasingLogic = {
    ease: (t: number, b: number, c: number, d: number): number => {
        // easeInOutExpo easing
        if (t === 0) return b;
        if (t === d) return b + c;
        if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
        return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
    }
  };

  constructor(private authService:AuthService) { 
    this.isLoggedIn = this.authService.isLoggedIn();
  }

  modalActions = new EventEmitter<string|MaterializeAction>();
  openModal(){
    this.modalActions.emit({action:"modal",params:['open']});
  }

  closeModal() {
    this.modalActions.emit({action:"modal",params:['close']});
  }

  @ViewChild(UserComponent) private userComponent: UserComponent;
  openLoginModal() {
    this.userComponent.register();
  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  user:User;

  constructor(private userservice:UserService,private router:Router) {
    this.user = new User();
   }

  ngOnInit(): void {
  }
  
  loginSubmit() {
    console.log(this.user.username);
    console.log(this.user.password);
    const isLogin = this.userservice.loginUser(this.user);
    if (isLogin) {
      this.router.navigate(['']);
    } else {
      this.router.navigate(['/loginpage']);
    }
  }
}

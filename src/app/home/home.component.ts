import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocialAuthService, SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userLogged: SocialUser;
  isLogged : boolean = false;

  constructor(
    private authService: SocialAuthService,
    private router: Router
    
  ) { }

  ngOnInit(): void {
    this.authService.authState.subscribe(
      data => {
       this.userLogged = data;
       this.isLogged = (this.userLogged != null);
       
      }
    );
  }

}

import {Component, OnInit} from '@angular/core';
import { AuthService, FacebookLoginProvider, SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Auth-SSD';

  loginUser: SocialUser;
  loggedStatus: boolean;

  constructor(private authService: AuthService) { }

  loginWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  logOut(): void {
    this.authService.signOut();
  }

  ngOnInit() {
    if (localStorage.fbToken) {
      this.loggedStatus = true;
    }
    this.authService.authState.subscribe((user) => {
      this.loginUser = user;
      this.loggedStatus = (user != null);
      console.log(this.loginUser);
    });
  }
}

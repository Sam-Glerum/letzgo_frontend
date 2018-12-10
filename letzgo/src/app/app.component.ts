import { Component } from '@angular/core';
import { AuthenticationService } from "./services/authenticationService/authentication.service";
import { Location } from "@angular/common";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mainHeading = 'LetzGo';
  title = 'letzgo';
  username = '';
  loggedInUser = this.isLoggedIn();


  constructor(private authenticationService: AuthenticationService, private location: Location) {
    this.setIsLoggedInInfo();
  }

  isLoggedIn(): boolean {
    return this.authenticationService.isAuthenticated();
  }

  logoutUser(): void {
    this.authenticationService.logout();
    window.alert("Logged out succesfully");
  }

  setIsLoggedInInfo(): void {
    // if (this.authenticationService.isAuthenticated()) {
    if (this.isLoggedIn()) {
      this.username += localStorage.getItem("Username");
    }
    this.location.forward();
  }
}

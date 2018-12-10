import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AuthenticationService} from "../../app/services/authenticationService/authentication.service";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  profileForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
});

  constructor(private route: ActivatedRoute, private authenticationService: AuthenticationService, private location: Location) { }

  goBack(): void {
    this.location.back();
  }

  ngOnInit() {
  }

  onSubmit() {
    let username = this.profileForm.controls.username.value;
    let password = this.profileForm.controls.password.value;
    this.authenticationService.loginUser(username, password);
    console.log("form " + this.profileForm.controls.username.value);
    this.goBack();
    // this.authenticationService.loginUser(this.profileForm.controls['username'].value, this.profileForm.controls['password'].value);
  }

}

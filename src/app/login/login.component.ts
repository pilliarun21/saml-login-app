import { Component } from '@angular/core';
// import { SamlAuthService } from 'angular-saml-auth'; // Import the appropriate SAML library

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor() {}

  initiateSAMLLogin() {
    // Call the SAML library's method to initiate SAML login
    // this.samlAuthService.login();
  }
}

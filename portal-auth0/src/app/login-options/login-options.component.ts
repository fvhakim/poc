import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-login-options',
  templateUrl: './login-options.component.html',
  styleUrls: ['./login-options.component.css']
})
export class LoginOptionsComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit(): void {
  }
  loginWithRedirectIndividual()
  {
    //this.auth.loginWithPopup();
    this.auth.loginWithRedirect();
  }

  loginWithRedirectABC()
  {
    this.auth.loginWithRedirect({'organization':'org_EBHY1QFeX7AFSqEa'});
  }




  loginPasswordless(): void {

   
    this.auth.loginWithRedirect({'connection':'email'} );

  

  }

  loginOktaIdp(): void {
   
  this.auth.loginWithRedirect({'connection':'Okta-IdP'});

  }

    
}

import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { HttpHeaders } from '@angular/common/http';
import {HttpClient} from '@angular/common/http';
import { SignupComponent } from './signup/signup.component';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { PasswordlessComponent } from './passwordless/passwordless.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private passwordlessDialog: MatDialog, private signupDialog: MatDialog, private http: HttpClient,  public auth: AuthService) {}
  title = 'portal-auth0';

  loginWithRedirect(): void {
    // Call this to redirect the user to the login page
    this.auth.loginWithRedirect();
   //this.auth.loginWithPopup();
  }

  logout(): void {

    this.auth.logout({ returnTo: 'http://localhost:4201'});
   //window.location.href = "https://fhakim-demo.us.auth0.com/v2/logout?returnTo=http://localhost:4200&client_id=GlaCN55wdPF9REUuC1WDSJ8dH4NpDX7M";
   

  }


  loginPasswordless(): void {

    this.passwordlessDialog.open(PasswordlessComponent, 
      {
        data: { },
        width: '500px'
      });
      this.passwordlessDialog.afterAllClosed.subscribe(result => 
        {
       console.log(result);
        });  

  

  }

  signup(): void {

   
    this.signupDialog.open(SignupComponent, 
      {
        data: { },
        width: '500px'
      });
      this.signupDialog.afterAllClosed.subscribe(result => 
        {
       console.log(result);
        });  

  }

}

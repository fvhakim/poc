import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { HttpHeaders } from '@angular/common/http';
import {HttpClient} from '@angular/common/http';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { LoginOptionsComponent } from './login-options/login-options.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

   orgId:any = '';

  constructor(private loginOtionsDialog: MatDialog, private passwordlessDialog: MatDialog, private signupDialog: MatDialog, private http: HttpClient,  public auth: AuthService) 
  {
     this.auth.isAuthenticated$.subscribe (result =>
   {
      if (result)
      {
        this.auth.idTokenClaims$.subscribe((claims) => {
         
         this.orgId = claims?.org_id;
         console.log (claims?.org_id);
         localStorage.setItem('orgId',this.orgId);     
         
        });
        
      }

   });


  }

  title = 'portal-auth0';

  loginWithRedirect(): void {


   this.loginOtionsDialog.open(LoginOptionsComponent, 
    {
      data: { },
      width: '500px'
    });
    this.passwordlessDialog.afterAllClosed.subscribe(result => 
      {
     console.log(result);
      });  

  }

  logout(): void {

    this.auth.logout({ returnTo: 'http://localhost:4200'});
   localStorage.setItem('orgId',''); 

  }



}

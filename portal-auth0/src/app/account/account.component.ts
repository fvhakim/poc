import { Component, OnInit } from '@angular/core';
import { AuthService, IdToken } from '@auth0/auth0-angular';
import { JwtHelperService } from "@auth0/angular-jwt";
import { HttpMethod } from '@auth0/auth0-angular';
import {HttpClient} from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  id_token_raw? = '';
  id_token_decoded = '';
  id_token_expiration?: any;
  
  access_token_raw = '';
  access_token_decoded = '';
  access_token_expiration? : any;

  PermissionCheckText? : any ;

  

  constructor(private http: HttpClient, public auth: AuthService, private jwtHelper: JwtHelperService) {

     console.log(localStorage);
    auth.idTokenClaims$.subscribe((claims) => {
      this.id_token_raw = claims?.__raw;
      this.id_token_decoded = jwtHelper.decodeToken(claims?.__raw);
      this.id_token_expiration = jwtHelper.getTokenExpirationDate(claims?.__raw);
      
 
    });

     auth.getAccessTokenSilently().subscribe((token) => {
       this.access_token_raw = token;
       this.access_token_decoded = jwtHelper.decodeToken(token);
       this.access_token_expiration = jwtHelper.getTokenExpirationDate(token);
       
     });


   }
  
  ngOnInit(): void {
  }

  addusers(): void {

    let PermissionCheck : any ;
    this.auth.getAccessTokenSilently().subscribe((token) => {
      
      let header = new HttpHeaders({'Access-Control-Allow-Origin': '*', 'Authorization': 'Bearer ' + token});
   
     this.http.get('https://auth0-fhakim-management-api.glitch.me/addusers', {'headers': header}).subscribe(result => {
     
    
     PermissionCheck = result;
     console.log(PermissionCheck);
     this.PermissionCheckText = PermissionCheck.Permission_check;
     alert (this.PermissionCheckText);
    
   },  error => alert ('Unauthorized request. Insufficient permissions'));  
  
  });

    

  }
 
}

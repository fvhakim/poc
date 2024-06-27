import { Component, OnInit } from '@angular/core';
import { AuthService, IdToken } from '@auth0/auth0-angular';
import { JwtHelperService } from "@auth0/angular-jwt";

@Component({
  selector: 'app-finances',
  templateUrl: './finances.component.html',
  styleUrls: ['./finances.component.css']
})
export class FinancesComponent implements OnInit {

  constructor(public auth: AuthService, private jwtHelper: JwtHelperService) { 

    /*
    auth.idTokenClaims$.subscribe((claims) => {

      console.log(claims?.amr);
      if (claims?.amr === undefined)
      {
        
          auth.loginWithRedirect({
            response_type: 'code',
            scope: 'openid',
            redirectUri: 'http://localhost:4200',
            client_id: 'GlaCN55wdPF9REUuC1WDSJ8dH4NpDX7M',
            acr_values: 'http://schemas.openid.net/pape/policies/2007/06/multi-factor',   
            appState: { target: '/finances' }
            });    
      }
      });
      
     */

    }
    

  ngOnInit(): void {
  }

}

import { LoginModule } from './modules/login/login.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { JwtModule } from '@auth0/angular-jwt';
import { AuthGuard } from './guards/auth.guard';
import { UsersComponent } from './users/users.component';

export function tokenGetter(){
  return localStorage.getItem("jwt");
}

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    JwtModule.forRoot({
      config: { 
        tokenGetter: tokenGetter,
        allowedDomains: ["localhost:7036"],
        disallowedRoutes: [],
      }
    }),
    AppRoutingModule,
    LoginModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

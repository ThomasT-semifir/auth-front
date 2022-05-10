import { UsersComponent } from './users/users.component';
import { AuthGuard } from './guards/auth.guard';
import { AccueilComponent } from './accueil/accueil.component';
import { LoginComponent } from './modules/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", component: AccueilComponent },
  { path: "users", component: UsersComponent },
  { path: "login", component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

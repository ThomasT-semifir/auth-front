import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  constructor(private router: Router, private jwtHelper: JwtHelperService) { }

  ngOnInit(): void {
  }

  logout = () => {
    localStorage.removeItem("jwt");
    this.router.navigate(["/login"]);
  }
}

import { AuthenticatedResponse } from './../../models/authenticated-response.model';
import { LoginModel } from './../../models/login.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  invalidLogin!: boolean;
  credentials: LoginModel = {username: '', password: ''}

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
  }

  login = (form: NgForm) => {
    if (form.valid) {
      this.http.post<AuthenticatedResponse>("https://localhost:7036/api/auth/login", this.credentials, {
        headers: new HttpHeaders({"Content-Type":"application/json"})
      })
      .subscribe({
        next: (res: AuthenticatedResponse) => {
          const token = res.token;
          localStorage.setItem("jwt", token);
          this.invalidLogin = false;
          this.router.navigate(["/"])
        },
        error: (err: HttpErrorResponse) => this.invalidLogin = true
      })
    }
  }

}

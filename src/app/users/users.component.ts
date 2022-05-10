import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: any;
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.http.get("https://localhost:7036/api/users")
      .subscribe({
        next: (res: any) => this.users = res,
        error: (err: HttpErrorResponse) => {console.error(err); this.router.navigate(["/"])}
      })
  }

}

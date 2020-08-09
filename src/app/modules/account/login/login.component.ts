import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userName = '';
  remember = false;
  errMsg = '';

  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    this.errMsg = '';
    this.authService.login(this.userName).subscribe(res => {
      this.authService.setAuthCredentials({userName: this.userName}, this.remember);
      this.router.navigate(['/'] , {replaceUrl: true});
      console.log(res);
    }, (err: HttpErrorResponse) => {
      this.errMsg = err.status === 404 ? 'User Not Found' : 'Something Went wrong, Please check your connection';
    });
  }
}

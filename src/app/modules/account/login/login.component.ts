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
      if(err.status === 404) {
        this.errMsg = 'User Not Found';
      }else if(err.status === 403) {
        this.errMsg = 'Forbidden : ' + err.error.message;
      }else {
        this.errMsg = 'Something Went wrong, Please check your connection'
      }
    });
  }
}

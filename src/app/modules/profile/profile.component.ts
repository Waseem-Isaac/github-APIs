import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ProfileService } from './services/profile.service';
import { User } from 'src/app/shared/models/user';
import { Repository } from 'src/app/shared/models/repository';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private http: HttpClient, private profieService: ProfileService) { }
  userCred = sessionStorage.getItem('credentials') || localStorage.getItem('credentials');
  userName = this.userCred && JSON.parse(this.userCred).userName;
  user: User;
  repos: Array<Repository>;
  userApiErrorMsg = '';
  repoApiErrorMsg = '';
  searchModel: string; 
  imgLoaded =  false;
  ngOnInit(): void {
    this.getUser(this.userName);
    this.getUserRepos(this.userName);
  }

  getUser(userName: string) {
    this.profieService.getUser(userName).subscribe((res: User) => {
      this.user = res;
    }, (err: HttpErrorResponse) => {
      console.log(err.status);
      this.userApiErrorMsg = err.status !== 0 ? err.error.message : 'Something went wrong, Please check your network connection';
    });
  }
  getUserRepos(userName) {
    this.profieService.getUserRepos(userName).subscribe((res: any) => {
      this.repos = res;
    }, (err: HttpErrorResponse) => {
      this.repoApiErrorMsg = err.status !== 0 ? err.error.message : 'Something went wrong, Please check your network connection';
    });
  }

  filterRepos(e) {
    this.searchModel = e.target.value;
  }
}

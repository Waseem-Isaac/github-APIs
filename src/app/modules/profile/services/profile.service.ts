import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }
  api_url = environment.api_url;

  getUser(userName: string) { 
    return this.http.get(this.api_url + '/users/' + userName);
  }

  getUserRepos(userName) {
    return this.http.get(this.api_url + '/users/' + userName + '/repos');
  }
}

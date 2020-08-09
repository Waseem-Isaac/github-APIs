import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.listRepos()
  }

  listRepos() {
    this.http.get('https://api.github.com/users/Waseem-Isaac/repos').subscribe(res => {
      console.log(res)
    })
  }

}

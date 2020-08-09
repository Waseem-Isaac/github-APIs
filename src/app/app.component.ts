import { Component } from '@angular/core';
import { AuthenticationService } from './modules/account/services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public authService: AuthenticationService) {}
  title = 'git-repos';
}

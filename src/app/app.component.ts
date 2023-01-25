import { Component } from '@angular/core';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-material-app';

  constructor(
    private _authService: AuthService,
  ){

  }

  async ngOnInit() {

    this._authService.setSelectedUserFlag(true);

  }
}



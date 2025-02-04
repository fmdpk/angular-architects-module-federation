import { Component } from '@angular/core';
import { AuthLibService } from 'auth-lib';
import 'shared-styles';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'shell';

  constructor(private service: AuthLibService) {
    this.service.login('Max', null);
  }
}

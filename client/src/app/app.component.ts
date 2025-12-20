import {Component, OnInit, signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {AuthService} from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  // templateUrl: './app.component.html',
  template: '<router-outlet></router-outlet>',
  // styleUrl: './app.css'
})
export class AppComponent implements OnInit{
  // protected readonly title = signal('client');
  constructor(private auth: AuthService) {
  }

  ngOnInit() {
    const potentialToken = localStorage.getItem('auth-token');
    if (potentialToken !==  null) {
      this.auth.setToken(potentialToken)
    }
  }
}



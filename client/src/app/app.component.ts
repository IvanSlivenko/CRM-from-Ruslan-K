import { Component, signal } from '@angular/core';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  // templateUrl: './app.component.html',
  template: '<router-outlet></router-outlet>',
  // styleUrl: './app.css'
})
export class AppComponent {
  // protected readonly title = signal('client');
}



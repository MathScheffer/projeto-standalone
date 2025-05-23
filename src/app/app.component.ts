import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  template: 
  `
    <app-header/>
    <router-outlet />
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projeto-standalone';
}

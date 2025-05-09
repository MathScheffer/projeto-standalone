import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  template: 
  `
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <!-- 
          routerLink serva para
          routerLinkActive serve para 
          -->
          <a class="nav-link" routerLink="/home" routerLinkActive="active">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" routerLink="/novo" routerLinkActive="active">Novo Item</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" routerLink="/tabela" routerLinkActive="active">Tabela</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" routerLink="/lista" routerLinkActive="active">Lista</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  `,
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}

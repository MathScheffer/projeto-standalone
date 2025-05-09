import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormClienteComponent } from './form-cliente/form-cliente.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormClienteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projeto-standalone';
}

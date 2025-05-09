import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-cliente',
  standalone: true,
  imports: [JsonPipe, ReactiveFormsModule],
  template: `
    <form [formGroup]="clientForm">
      <label>
        Name
        <input type="text" formControlName="nome" />
      </label>
      <label>
        Email
        <input type="text" formControlName="email" />
      </label>
            <label>
        Email
        <input type="text" formControlName="telefone" />
      </label>
            <label>
        Email
        <input type="text" formControlName="dataNascimento" />
      </label>
      <button type="submit" (click)="handleSubmit($event)">Submit</button>
    </form>
    <p>{{ clientForm.value.nome | json}}</p>
  `,
})
export class FormClienteComponent {
  clientForm = new FormGroup({
    nome: new FormControl(''),
    email: new FormControl(''),
    telefone: new FormControl(''),
    dataNascimento: new FormControl('')
  })

  handleSubmit(event: any){
    console.log(event.preventDefault())
  }

  
}

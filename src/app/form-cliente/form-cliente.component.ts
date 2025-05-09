import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ClienteService } from '../cliente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-form-cliente',
  standalone: true,
  imports: [JsonPipe, ReactiveFormsModule],
  template: `
    <form [formGroup]="clientForm" (ngSubmit)="salvar()">
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

  id?: number;
  botaoAcao?: string;
  cliente: Cliente = new Cliente();

  constructor(private clienteService: ClienteService
    ,    private route: ActivatedRoute, 
    private router: Router,
  ){
    this.id = parseInt(this.route.snapshot.params['id']);

      if(this.id){
        this.botaoAcao = "Editar";
        this.cliente = clienteService.buscarPorId(this.id);
      }
  }

  handleSubmit(event: any){
    //event.preventDefault()
    console.log("Se event.preventDefault() estiver sendo chamado, cancela o evento ngSubmit!")
  }

  salvar = () => {
    
    
    

    if(this.id){
      this.clientForm.controls.nome.setValue(this.cliente.nome);

      let clientObj = {id: this.id,...this.clientForm.value};
      console.log(`Editando: ${JSON.stringify(clientObj)}`)
      //this.clienteService.editar(this.id,)
    }
    //this.clienteService.addCliente(this.clientForm.value)
  }
  
}

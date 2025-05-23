import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ClienteService } from '../cliente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-form-cliente',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
  <div class="container d-flex justify-content-center">
    <form [formGroup]="clientForm" (ngSubmit)="salvar()" class="container d-flex justify-content-center flex-column">
    <div class="mb-3 row">
      <label class="form-label">
        Name
        <input class="form-control"type="text" formControlName="nome" />
      </label>
    </div>
    <div class="mb-3 row">
      <label class="form-label">
        Email
        <input class="form-control" type="text" formControlName="email" />
      </label>
    </div>
    <div class="mb-3 row">
            <label class="form-label">
        Telefone
        <input class="form-control"  type="text" formControlName="telefone" />
      </label>
    </div>
    <div class="mb-3 row">
            <label class="form-label">
        Data de Nascimento
        <input class="form-control" type="date" formControlName="dataNascimento" />
      </label>
    </div>
    <div class="mb-3 row justify-content-between">
      <button class="col-5 btn btn-primary me-3" type="submit" (click)="handleSubmit($event)">Salvar</button>
            <button class="col-5 btn btn-primary me-3" type="submit" (click)="irTabela()">Ir para Tabela</button>
    </div>
    </form>
    </div>
  `,
})
export class FormClienteComponent {
  clientForm = new FormGroup({
    nome: new FormControl(),
    email: new FormControl(),
    telefone: new FormControl(),
    dataNascimento: new FormControl()
  })

  id?: number;
  cliente: Cliente = new Cliente();
  listaClientes: Cliente[];
  constructor(private clienteService: ClienteService
    ,    private route: ActivatedRoute, 
    private router: Router,
  ){
    this.listaClientes = this.clienteService.listar();

    this.id = parseInt(this.route.snapshot.params['id']);

      if(this.id){
        
        this.cliente = clienteService.buscarPorId(this.id);
        
        this.clientForm.controls.nome.setValue(this.cliente?.nome??"");
        this.clientForm.controls.email.setValue(this.cliente?.email??"");
        this.clientForm.controls.telefone.setValue(this.cliente?.telefone??"");
        this.clientForm.controls.dataNascimento.setValue(this.cliente?.dataNascimento??new Date());
      }
  }

  handleSubmit(event: any){
    //event.preventDefault()
    console.log("Se event.preventDefault() estiver sendo chamado, cancela o evento ngSubmit!")
  }

  irTabela(){
    this.router.navigate(["/tabela"])
  }
  salvar = () => {
    if(this.id){
      let clientObj = {id: this.id,...this.clientForm.value};
      console.log(`Editando: ${JSON.stringify(clientObj)}`)

      this.cliente = new Cliente(clientObj.id,clientObj.nome, clientObj.email, 
        clientObj.telefone, clientObj.dataNascimento)

      this.clienteService.editar(this.id, this.cliente)
    }
    //this.clienteService.addCliente(this.clientForm.value)
 
  else{
    if (this.clientForm.value.nome){

      const id = (this.listaClientes[this.listaClientes.length - 1]?.id ?? 0) + 1;

      let clientObj = {id: id,...this.clientForm.value}

      this.cliente = new Cliente(clientObj.id,clientObj.nome, clientObj.email, 
                          clientObj.telefone, clientObj.dataNascimento)
      console.log(this.cliente)
      this.clienteService.addCliente(this.cliente)
    }
  }

  this.router.navigate(["/tabela"])
}
}

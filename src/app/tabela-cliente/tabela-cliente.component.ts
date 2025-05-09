import { Component } from '@angular/core';
import { FiltroPesquisaPipe } from '../filtro-pesquisa.pipe';
import { CommonModule, DatePipe, UpperCasePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-tabela-cliente',
  imports: [FormsModule,CommonModule,FiltroPesquisaPipe, DatePipe, UpperCasePipe, RouterLink],
  standalone: true,
  template: `
  <div class="container">

  <h3>Tabela de Clientes</h3>

  <div class="mb-3">
    <label for="nomePesquisa" class="form-label">Pesquisar:</label>
    <input type="string" [(ngModel)]="nomePesquisa" id="nomePesquisa" class="form-control" placeholder="Digite um nome para pesquisar...">
  </div>

  <!--
  <h4 *ngIf="(listaProdutos | filtroPesquisa: nomePesquisa).length ==0">
    Não há produtos cadastrados!
  </h4>
  -->
  @if((listaClientes | filtroPesquisa: nomePesquisa).length > 0){
  <table class="table table-striped">
    <thead>
      <tr>
        <th>ID</th>
        <th>NOME</th>
        <th>EMAIL</th>
        <th>TELEFONE</th>
        <th>DATA DE NASCIMENTO</th>
      </tr>
    </thead>
    <tbody>
      <!-- <tr *ngFor="let cliente of listaProdutos "> -->
      <!-- <tr *ngFor="let cliente of (listaProdutos | filtroPesquisa: nomePesquisa)"> -->
      @for (cliente of (listaClientes | filtroPesquisa: nomePesquisa); track cliente.id){
        <tr>
          <td>{{cliente.id}}</td>
          <td>{{cliente.nome}}</td>
          <td>{{cliente.email}}</td>
          <td>{{ cliente.telefone | uppercase }}</td>
          <td>{{ cliente.dataNascimento | date: 'dd/MM/YYYY' }}</td>
          <td><a class="btn btn-primary" routerLink="/edit/{{ cliente.id }}">Editar</a></td>
          <td><a class="btn btn-danger" routerLink="/tabela" (click)="deletar(cliente.id)"> Deletar</a></td>
        </tr>
      }
    </tbody>
  </table>
  }
  @else{
  <h4>
    Não há produtos cadastrados!
  </h4>
  }
</div>
  `,
  styleUrl: './tabela-cliente.component.css'
})
export class TabelaClienteComponent {
  listaClientes: Cliente[] = []
  nomePesquisa?: string;

  constructor(private clienteService: ClienteService){
    this.listaClientes = clienteService.listar();
  }

  deletar = (id?: number) => {
    this.clienteService.deletar(id) 
  }
}

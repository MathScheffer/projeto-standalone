import { Injectable } from '@angular/core';
import { Cliente } from './cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private clientes: Cliente[] = [
    {id: 1 ,nome: "Abacaxi", email: "teste@gmail.com",telefone: "51 9 9999-9999", dataNascimento: new Date("2000-04-22")},
    {id: 2 ,nome: "Uva", email: "teste1@gmail.com",telefone: "51 9 9999-9999", dataNascimento: new Date("2001-04-22")},
    {id: 3 ,nome: "Limao", email: "teste2@gmail.com",telefone: "51 9 9999-9999", dataNascimento: new Date("2002-04-22")}
  ]
  constructor() { }

  addCliente(cliente: Cliente) {
    this.clientes.push(cliente)
  }

  listar():Cliente[]{
    return this.clientes;
  }

  buscarPorId(id: number): Cliente | null{
    const cliente = this.clientes.find(cliente => cliente.id == id);
    return cliente ? Object.assign({}, cliente) : null ;
  }

  editar(id: number, cliente: Cliente) {
    const i = this.getIndice(id);
    if(i >= 0) {
      this.clientes[i] = cliente;
    }
  }
  deletar(id?: number) {
    const i = this.getIndice(id);
    if(i >= 0){
      this.clientes.splice(i, 1);
    }
  }
  private getIndice(id?: number) {
    return this.clientes.findIndex(cliente => cliente.id == id);
  }
  
}

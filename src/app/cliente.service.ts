import { Injectable } from '@angular/core';
import { Cliente } from './cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private clientes: Cliente[] = [
    {nome: "Abacaxi", email: "teste@gmail.com",telefone: "51 9 9999-9999", dataNascimento: new Date("2000-04-22")},
    {nome: "Uva", email: "teste1@gmail.com",telefone: "51 9 9999-9999", dataNascimento: new Date("2001-04-22")},
    {nome: "Limao", email: "teste2@gmail.com",telefone: "51 9 9999-9999", dataNascimento: new Date("2002-04-22")}
  ]
  constructor() { }

  
}

import { Pipe, PipeTransform } from '@angular/core';
import { Cliente } from './cliente';

@Pipe({
  name: 'filtroPesquisa',
  pure: false
})
export class FiltroPesquisaPipe implements PipeTransform {

  transform(listaProdutos: Cliente[], nomeProduto: string | undefined): Cliente[] {
    if(!nomeProduto || nomeProduto.length < 3){
      return listaProdutos;
    }
    return listaProdutos.filter(produto => produto.nome?.toLocaleLowerCase().includes(nomeProduto.toLocaleLowerCase()));
  }
}

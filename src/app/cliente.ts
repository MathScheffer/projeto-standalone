export class Cliente {
  id?: number;
  nome?: string;
  email?: string;
  telefone?: string;
  dataNascimento?: Date

  constructor(id?: number,
    nome?: string,
    email?: string,
    telefone?: string,
    dataNascimento?: Date ){
        this.id = id
        this.nome = nome
        this.email = email
        this.telefone = telefone
        this.dataNascimento = dataNascimento
  }

}

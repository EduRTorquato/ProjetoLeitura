import { Autor } from './Autor';

export class Livros{

  public livroId: number;
  public nome: string;
  public resenha: string;
  public dataInicioLeitura: Date;
  public dataFinalLeitura: Date;
  public numPag: number;
  public curtir?: number;
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Livros } from 'src/app/models/Livros';

@Injectable({
  providedIn: 'root'
})

export class LivroService {

  constructor(
    private http: HttpClient
  ){ }


  getAllLivros(): Observable<Livros[]>
  {
    return this.http.get<Livros[]>('http://localhost:8080/livros/todos')
  }

  postLivro(livros: Livros): Observable<Livros> {
    return this.http.post<Livros>('http://localhost:8080/livros/salvar', livros );
  }

  deleteLivros(livroId: number){
    return this.http.delete(`http://localhost:8080/livros/delete/${livroId}`)
  }

}

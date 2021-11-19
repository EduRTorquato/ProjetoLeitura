import { Component, OnInit } from '@angular/core';
import { Livros } from 'src/app/models/Livros';
import { LivroService } from '../services/livro.service';
import { Autor } from '../models/Autor';
import Swal from 'sweetalert2';
import { AccordionModule } from 'primeng/accordion';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  livrosArray: Livros[] = [];
  livros: Livros = new Livros();
  autores: Autor = new Autor();
  autoresArray: Autor[] = [];

  idLivros : number;


  like: number = 0;
  like1: number = 0;
  like2: number = 0;

  constructor(private service: LivroService ) { }

  ngOnInit(): void {
    this.findAll();
  }

  raiseLike(){
    this.livros.curtir = 0;
    this.livros.curtir++;
    console.log(this.livros.curtir)
  }

   findAll(){
     this.service.getAllLivros().subscribe(resposta =>{
        this.livrosArray = resposta;
        console.log(resposta);
     })
   }

   mostraLivro(idLivros){
    this.livros.livroId = idLivros;
    console.log(this.livros.livroId)
      Swal.fire({
        title: 'Tem certeza?',
        text: "O livro será deletado para sempre",
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          this.service.deleteLivros(idLivros).subscribe(() => {
          })
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
          showConfirmButton: false
          window.location.reload();
        }
      })

    }
   }


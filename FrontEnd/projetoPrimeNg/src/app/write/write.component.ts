import { Router, RouterModule } from '@angular/router';
import { LivroService } from './../services/livro.service';
import { Component, OnInit } from '@angular/core';
import { Livros } from '../models/Livros';
import { Autor } from '../models/Autor';
import Swal from 'sweetalert2';
import {AccordionModule} from 'primeng/accordion';


@Component({
  selector: 'app-write',
  templateUrl: './write.component.html',
  styleUrls: ['./write.component.scss']
})
export class WriteComponent implements OnInit {

  livro: Livros = new Livros();
  autor: Autor = new Autor();
  livrosList: Livros[];

  constructor(
    private livroService: LivroService,
  ) { }

  ngOnInit(): void {


  }

  postMessage(){
    this.livroService.postLivro(this.livro).subscribe((resp: Livros)=>{
     this.livro = resp;

     Swal.fire({
     title: '<p>Livro postado!<p>',
     icon: 'success',
     timer: 1000,
     showConfirmButton: false
     });

     window.location.reload();

    });
  }






  salvarLivro(){

  }
}

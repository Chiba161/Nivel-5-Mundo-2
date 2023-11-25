import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Livro } from '../livro';
import { Editora } from '../editora';
import { ControleEditoraService } from '../controle-editora.service';
import { ControleLivrosService } from '../controle-livros.service';

@Component({
  selector: 'app-livro-dados',
  templateUrl: './livro-dados.component.html',
  styleUrls: ['./livro-dados.component.css']
})
export class LivroDadosComponent implements OnInit {
  livro: Livro = new Livro(0, -1, '', '', []);
  autoresForm: string = '';
  editoras: Editora[] = [];

  constructor(
    private servEditora: ControleEditoraService,
    private servLivros: ControleLivrosService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.editoras = this.servEditora.getEditoras();
    console.log('Valor de livro.codEditora:', this.livro.codEditora);
    console.log('Valor de servEditora:', this.servEditora);

    const nomeEditora = this.servEditora.getNomeEditora(this.livro.codEditora);

    console.log('Nome da Editora:', nomeEditora);
  }

  incluir = (): void => {
    this.livro.autores = this.autoresForm.split('\n');
    this.livro.codEditora = Number(this.livro.codEditora);
    this.servLivros.incluir(this.livro);
    this.router.navigateByUrl('/lista');
  }
}

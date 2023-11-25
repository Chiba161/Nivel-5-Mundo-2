import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LivroMongo } from './livro-mongo';

export interface Livro {
  codigo: string;
}

@Injectable({
  providedIn: 'root'
})
export class ControleLivrosService {
  private baseURL: string = 'http://localhost:3030/livros';

  constructor(private http: HttpClient) {}

  async obterLivros(): Promise<Livro[]> {
    try {
      const livrosMongo: LivroMongo[] = await this.http.get<LivroMongo[]>(this.baseURL).toPromise();
      const livros: Livro[] = livrosMongo.map(livroMongo => {
        return {
          codigo: String(livroMongo.codigo),

        };
      });
      return livros;
    } catch (error) {
      console.error('Erro ao obter livros:', error);
      throw new Error('Erro ao obter livros');
    }
  }

  async incluir(livro: LivroMongo): Promise<boolean> {
    try {
      const response: any = await this.http.post(this.baseURL, livro).toPromise();
      return response.ok;
    } catch (error) {
      console.error('Erro ao incluir livro:', error);
      throw new Error('Erro ao incluir livro');
    }
  }

  async excluir(codigo: string): Promise<boolean> {
    try {
      const response = await fetch(`${this.baseURL}/${codigo}`, {
        method: 'DELETE'
      });

      if (response.status === 200) {
        return true;
      } else {
        console.error('Erro ao excluir livro:', response.statusText);
        return false;
      }
    } catch (error) {
      console.error('Erro ao excluir livro:', error);
      throw new Error('Erro ao excluir livro');
    }
  }
}

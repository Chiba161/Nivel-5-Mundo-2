import { Injectable } from '@angular/core';
import { Editora } from './editora';

@Injectable({
  providedIn: 'root'
})
export class ControleEditoraService {
  editoras: Editora[] = [
    { codEditora: 1, nome: 'Editora A' },
    { codEditora: 2, nome: 'Editora B' },
    { codEditora: 3, nome: 'Editora C' }
  ];

  constructor() { }

  getEditoras(): Editora[] {
    return this.editoras;
  }

  getNomeEditora(codEditora: number): string {
    console.log('Código de editora recebido:', codEditora);
    const editoraEncontrada = this.editoras.find(editora => editora.codEditora === codEditora);
    console.log('Editora encontrada:', editoraEncontrada);
    return editoraEncontrada ? editoraEncontrada.nome : 'Editora não encontrada';
  }

  async getEditorasAsync(): Promise<Editora[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.editoras);
      }, 1000);
    });
  }
}

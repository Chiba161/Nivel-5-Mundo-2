import Editora from '../modelo/Editora';

const editoras: Editora[] = [
    new Editora(1, 'Editora A'),
    new Editora(2, 'Editora B'),
    new Editora(3, 'Editora C')
];

class ControleEditora {
    getEditoras(): Editora[] {
        return editoras;
    }

    getNomeEditora(codEditora: number): string | undefined {
        const editoraEncontrada = editoras.find(editora => editora.codEditora === codEditora);
        return editoraEncontrada ? editoraEncontrada.nome : undefined;
    }
}

export default ControleEditora;

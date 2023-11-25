import Livro from '../modelo/Livro';

interface LivroMongo {
    _id: string | null;
    codEditora: number;
    titulo: string;
    resumo: string;
    autores: string[];
}

const baseURL = 'http://localhost:3030/livros';

class ControleLivros {
    async obterLivros(): Promise<Livro[]> {
        try {
            const response = await fetch(baseURL);
            const livrosMongo: LivroMongo[] = await response.json();

            const livros: Livro[] = livrosMongo.map(livroMongo => {
                return new Livro(
                    livroMongo._id || '',
                    livroMongo.codEditora,
                    livroMongo.titulo,
                    livroMongo.resumo,
                    livroMongo.autores
                );
            });

            return livros;
        } catch (error) {
            console.error('Erro ao obter livros:', error);
            throw new Error('Erro ao obter livros');
        }
    }

    async excluir(codigoLivro: string): Promise<boolean> {
        try {
            const response = await fetch(`${baseURL}/${codigoLivro}`, {
                method: 'DELETE'
            });

            return response.ok;
        } catch (error) {
            console.error('Erro ao excluir livro:', error);
            throw new Error('Erro ao excluir livro');
        }
    }

    async incluir(livro: Livro): Promise<boolean> {
        try {
            const livroMongo: LivroMongo = {
                _id: null,
                codEditora: livro.codEditora,
                titulo: livro.titulo,
                resumo: livro.resumo,
                autores: livro.autores
            };

            const response = await fetch(baseURL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(livroMongo)
            });

            return response.ok;
        } catch (error) {
            console.error('Erro ao incluir livro:', error);
            throw new Error('Erro ao incluir livro');
        }
    }
}

export default ControleLivros;

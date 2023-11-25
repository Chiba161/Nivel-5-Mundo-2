// livro-mongo.ts
export interface LivroMongo {
    _id: string | null;
    codigo: number;
    codEditora: number;
    titulo: string;
    resumo: string;
    autores: string[];
  }
  
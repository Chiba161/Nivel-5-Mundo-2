interface LivroMongo {
    _id: string | null;
    codEditora: number;
    titulo: string;
    resumo: string;
    autores: string[];
}

export default LivroMongo;

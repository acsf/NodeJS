import Express from "express";
import db from "./config/dbConnect.js";
import livros from "./models/livro.js";

db.on("error", console.log.bind(console, "erro de conexão"))
db.once("open", () => {
    console.log("conectado com sucesso")
})

const app = Express();

app.use(Express.json())

// const livros = [
//     { id: 1, "titulo": "Senhor dos aneis" },
//     { id: 2, "titulo": "Matriz" }
// ]

//Busca geral
app.get('/', (req, res) => {
    res.status(200).send('Curso de Node');
})

//Busca geral de livros
app.get('/livros', (req, res) => {
    livros.find((err, livros)=> {
        res.status(200).json(livros)
    })
})

//Busca de livros por ID
app.get('/livros/:id', (req, res) => {
    let index = buscaLivros(req.params.id);
    res.json(livros[index]);
})

//Criando livro
app.post('/livros', (req, res) => {
    livros.push(req.body);
    res.status(201).send('Livro cadastrado')
})

//Atualizando livro
app.put('/livros/:id', (req, res) => {
    let index = buscaLivros(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.json(livros);
})

//Excluir um livro
app.delete('/livros/:id', (req, res) => {
    let { id } = req.params;
    let index = buscaLivros(id);
    livros.splice(index, 1);
    res.send('Livro ${id} removido com sucesso');
})

function buscaLivros(id) {
    return livros.findIndex(livro => livro.id == id)
}


export default app
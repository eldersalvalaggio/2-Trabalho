const express = require('express');
const app = express();
const PORT = 3030;

// 1. Página inicial – Rota /
app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="pt-BR">
        <head>
            <meta charset="UTF-8">
            <title>Catálogo de Heróis</title>
        </head>
        <body>
            <h1>Catálogo de Heróis</h1>
            <p>Seja bem-vindo ao catálogo de heróis das maiores editoras de quadrinhos!</p>
            
            <h3>Editoras:</h3>
            <ul>
                <li><a href="/marvel">Marvel Comics</a></li>
                <li><a href="/dc">DC Comics</a></li>
            </ul>
            
            <hr>
            
            <h3>Personagens em Destaque:</h3>
            <ul>
                <li><a href="/personagem/marvel/Thor">Thor (Marvel)</a></li>
                <li><a href="/personagem/marvel/IronMan">Homem de Ferro (Marvel)</a></li>
                <li><a href="/personagem/dc/Batman">Batman (DC)</a></li>
                <li><a href="/personagem/dc/Superman">Superman (DC)</a></li>
            </ul>
        </body>
        </html>
    `);
});

// 2. Rota da Empresa: Marvel
app.get('/marvel', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="pt-BR">
        <head>
            <meta charset="UTF-8">
            <title>Marvel Comics</title>
        </head>
        <body>
            <h1>Marvel Comics</h1>
            <p>A Marvel Comics é uma das principais editoras de quadrinhos do mundo, famosa por criar o conceito de universo compartilhado com heróis humanos e cheios de falhas.</p>
            
            <h3>Personagens Disponíveis:</h3>
            <ul>
                <li><a href="/personagem/marvel/Thor">Thor</a></li>
                <li><a href="/personagem/marvel/IronMan">Homem de Ferro</a></li>
            </ul>
            
            <br>
            <a href="/">← Voltar para a Página Inicial</a>
        </body>
        </html>
    `);
});

// 2. Rota da Empresa: DC
app.get('/dc', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="pt-BR">
        <head>
            <meta charset="UTF-8">
            <title>DC Comics</title>
        </head>
        <body>
            <h1>DC Comics</h1>
            <p>A DC Comics é uma das maiores empresas de histórias em quadrinhos, lar de ícones lendários que representam arquétipos quase mitológicos de justiça e poder.</p>
            
            <h3>Personagens Disponíveis:</h3>
            <ul>
                <li><a href="/personagem/dc/Batman">Batman</a></li>
                <li><a href="/personagem/dc/Superman">Superman</a></li>
            </ul>
            
            <br>
            <a href="/">← Voltar para a Página Inicial</a>
        </body>
        </html>
    `);
});

// 3. Rota com dois parâmetros obrigatórios
app.get('/personagem/:empresa/:nome', (req, res) => {
    // Obtendo os valores dinâmicos utilizando req.params
    const { empresa, nome } = req.params;

    res.send(`
        <!DOCTYPE html>
        <html lang="pt-BR">
        <head>
            <meta charset="UTF-8">
            <title>Personagem: ${nome}</title>
        </head>
        <body>
            <h1>Perfil do Personagem</h1>
            <p><strong>Nome do Personagem:</strong> ${nome}</p>
            <p><strong>Editora/Empresa:</strong> ${empresa.toUpperCase()}</p>
            
            <br>
            <p><a href="/${empresa.toLowerCase()}">← Voltar para a página da ${empresa}</a></p>
            <p><a href="/">← Voltar para a Página Inicial</a></p>
        </body>
        </html>
    `);
});

// Inicialização do servidor na porta 3030
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

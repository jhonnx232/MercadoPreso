# MercadoPreso

## doque se trata :

-- se trata de um projeto do curso da salvadortech front-end , de um ecommerce funcionando em React.

## Lista de afazeres do site;

[X] fazer as rotas:

## tela de login;

    [X] rota = "/";
    [X] inputs email e senha;
    [X] email válido e senha de 8 ou mais caracteres;
    []caso inálido botão de envio desativado;

## tela de produtos

    [X] rota = "products";
    [X] Carregue os produtos da API e renderize na tela com imagem, nome e valor
    [X] Os produtos devem ser carregadas ao inicializar a página.
    [] Implemente os botões de categoria para serem utilizados como filtro e o botão de adicionar ao carrinho para cada produto
    [] Cada card deve possibilitar a adição, remoção da quantidade de itens de cada produto.

    [] Deve conter um butão de checkout que leva para finalizar a compra.
    [] Deve conter um valor total mostrando na tela.
    [] Desenvolva a tela de produtos do cliente de forma que o preço total esteja correto após a adição de itens aleatórios.
    [] Esses itens devem compor um "carrinho de compras", que deve ser persistente no fluxo do cliente até o momento do checkout (quando o carrinho se torna uma venda concretizada).

    [X] Redirecione o usuário ao clicar no card para a tela de detalhes, que deve mudar a rota e conter o id da receita na URL.

## Tela de detalhes de um produto

    [X] Rota “/products/:id”
    [X] URL por id: https://fakestoreapi.com/products/1
    [X] Realize uma request para a API passando o id da receita que deve estar disponível nos parâmetros da URL.
    [X] Nessa tela de detalhes deve conter imagem, nome, valor, descrição e a avaliação do produto selecionado

## tela de checkout

    [X] Rota “/checkout”

    [] Desenvolva a tela de checkout do cliente de forma a possuir os dados corretos do carrinho e preço total.

    [] Deve conter todos os itens da compra com valor unitário, quantidade e valor total
    [] Desenvolva a tela de checkout do cliente de forma que seja possível remover itens do carrinho e assim alterando o valor total da venda

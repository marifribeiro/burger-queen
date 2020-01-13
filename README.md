# Burger Queen

## Índice

* [1. Resumo do projeto](#2-resumo-do-projeto)
* [2. Processo de design](#2-processo-de-design)
* [3. Sobre essa aplicação](#3-sobre-essa-aplicaçãos)
* [4. Desenvolvimento](#-4-Desenvolvimento)
* [5. Uso](#5-Uso)

***


## 1. Resumo do projeto

Um pequeno restaurante de hambúrgueres, que está crescendo, necessita uma
interface em que se possa realizar pedidos utilizando um _tablet_, e enviá-los
para a cozinha para que sejam preparados de forma ordenada e eficiente.

![burger-queen](https://user-images.githubusercontent.com/110297/42118136-996b4a52-7bc6-11e8-8a03-ada078754715.jpg)

Estas são as informações que temos do cliente:

> Somos **Burger Queen**, um fast food 24hrs.
>
>A nossa proposta de serviço 24 horas foi muito bem recebida e, para continuar a
>crescer, precisamos de um sistema que nos ajude a receber pedidos de nossos
>clientes.
>
>Nós temos 2 menus. Um muito simples para o café da manhã:
>
>| Ítem                      |Preço R$|
>|---------------------------|------|
>| Café americano            |    5 |
>| Café com leite            |    7 |
>| Misto Quente              |   10 |
>| Suco de fruta natural     |    7 |
>
>E outro menu para o resto do dia:
>
>| Ítem                      |Preço |
>|---------------------------|------|
>|**Hambúrgueres**           |   **R$**   |
>|Hambúrguer simples         |    10|
>|Hambúrguer duplo           |    15|
>|**Acompanhamentos**        |   **R$**   |
>|Batata frita               |     5|
>|Anéis de cebola            |     5|
>|**Bebidas**                |   **R$**   |
>|Água 500ml                 |     5|
>|Água 750ml                 |     7|
>|Refrigerante 500ml         |     7|
>|Refrigerante 750ml         |    10|
>
>**Importante:** Os clientes podem escolher entre hambúrgueres de carne bovina,
>frango ou vegetariano. Além disso, por um adicional de R$ 1,00 , eles podem
>adicionar queijo ou ovo.
>
>Nossos clientes são bastante indecisos, por isso é muito comum que eles mudem o
>seu pedido várias vezes antes de finalizar.

A interface deve mostrar os dois menus (café da manhã e restante do dia), cada
um com todos os seus _produtos_. O usuário deve poder escolher que _produtos_
adicionar e a interface deve mostrar o _resumo do pedido_ com o custo total.

![out](https://user-images.githubusercontent.com/110297/45984241-b8b51c00-c025-11e8-8fa4-a390016bee9d.gif)

## 2. Processo de design

O principal ponto considerado no design do projeto é que a interface deve ser pensada específicamente para rodar em **tablets**.

Com isso em mente, os itens do menu foram construídos em formato de cards, pois, com o ítem maior e com sua delimitação mais clara, o uso na tela touch é mais viável.

Na tela para realizar um pedido, a disponibilização do menu foi pensada de forma que ocupe a metade superior da tela, deixando a inferior livre para ser ocupada pelos itens adicionados ao pedido. O layout funciona com o tablet na posição vertical e horizontal, evitando ao máximo que o atendente perca a visão total da tela.

Nas demais telas, onde são exibidos os pedidos para a cozinha e para a entrega dos pedidos, os cards são similares, exibindo com prioridade há quanto tempo o pedido foi realizado, para que todos os profissionais possam acompanhar e evitar que o cliente espere mais que o necessário. As informações seguintes são o número da mesa e nome do cliente para que o atendente que faz a entrega possa visualizar a informação relevante com mais facilidade, e em seguida, os itens do pedido organiazados e separados de forma clara para a cozinha ter toda a informação que precisa para preparação.

Os botões dos cards de pedido são grandes para facilitar a interação com o usuário e os pedidos aparecem na ordem que foram pedidos para facilitar na priorização dos mesmos.

O menu superior indica com clareza qual página está sendo exibida para que não haja confusões.

 
## 3. Sobre essa aplicação

Essa aplicação foi desenvolvida de acordo com as histórias de usuário abaixo.

#### [História de usuário 1] Garçom/Garçonete deve poder anotar o seu pedido

Eu como garçom/garçonete quero poder anotar o meu pedido saber o valor de cada 
produto e poder enviar o pedido para a cozinha para ser preparado.

##### Critérios de aceitação

O que deve acontecer para satisfazer as necessidades do usuário?

* Anotar o nome e mesa.
* Adicionar produtos aos pedidos.
* Excluir produtos.
* Ver resumo e o total da compra.
* Enviar o pedido para a cozinha (guardar em algum banco de dados).
* Funcionar bem e se adequar a um _tablet_.

***

#### [História de usuário 2] Chefe de cozinha deve ver os pedidos

Eu como chefe de cozinha quero ver os pedidos dos clientes em ordem, poder marcar que estão prontos e poder notificar os garçons/garçonetes que o pedido está pronto para ser entregue ao cliente.

##### Critérios de aceitação

* Ver os pedidos à medida em que são feitos.
* Marcar os pedidos que foram preparados e estão prontos para serem servidos.
* Ver o tempo que levou para preparar o pedido desde que chegou, até ser marcado como concluído.

***

#### [História de usuário 3] Garçom/Garçonete deve ver os pedidos prontos para servir

Eu como garçom/garçonete quero ver os pedidos que estão prontos para entregá-los rapidamente aos clientes.

## 4. Desenvolvimento

Essa aplicação foi desenvolvida usando React JS, utilizando Firebase Hosting e Firestore para hospedagem e banco de dados.

## 5. Uso

A aplicação pode ser acessada [nesse link](https://burger-queen-e1951.firebaseapp.com/).

Para rodar essa aplicação, você precisará instalar [npm](https://www.npmjs.com/).
Uma vez com o npm instalado e o repositório clonado, acesse a página do repositório e digite o seguinte comando para instalar as dependências desse projeto:

`npm install`

Para rodar a aplicação:

`npm start`
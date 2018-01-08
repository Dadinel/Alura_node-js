create database casadocodigo_nodejs;

use casadocodigo_nodejs;

CREATE TABLE produtos (
  id int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  titulo varchar(255) DEFAULT NULL,
  descricao text,
  preco decimal(10,2) DEFAULT NULL);

insert into produtos(titulo, descricao, preco)
values ('Comecando com nodejs', 'livro introdutório sobre nodejs', 39.90);

insert into produtos(titulo, descricao, preco)
values ('Comecando com javascript', 'livro introdutório sobre javascript', 39.90);

insert into produtos(titulo, descricao, preco)
values ('Comecando com express', 'livro introdutório sobre express', 39.90);
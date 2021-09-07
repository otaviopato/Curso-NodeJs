INSERT into usuarios(nome, email, idade) Values(
"Gino Pato", 
"Gino@outlook.com",
 74
);


select * from usuarios where nome = "Otavio"; /* Buscar dados especificos */

select * from usuarios where idade >= 10; /* Buscar dados especificos usando maior ou menor */

Select * from usuarios;/* Buscar todos os dados da tabela usuario */


delete from usuarios where nome = "Otávio Pato"; /* deletar dados especificos*/

Update usuarios SET nome = "Nome de Teste" where nome = "Otávio Pato"; /* alterar dados do banco*/

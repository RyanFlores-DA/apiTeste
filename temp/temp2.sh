echo "Iniciando"

psql -U ryan -d testes -c " insert into dim_mes (mes) values ('Fevereiro');"
psql -U ryan -d testes -c " insert into dim_mes (mes) values ('Março');"
psql -U ryan -d testes -c " insert into dim_mes (mes) values ('Abril');"
psql -U ryan -d testes -c " insert into dim_mes (mes) values ('Maio');"
psql -U ryan -d testes -c " insert into dim_mes (mes) values ('Junho');"
psql -U ryan -d testes -c " insert into dim_mes (mes) values ('Julho');"
psql -U ryan -d testes -c " insert into dim_mes (mes) values ('Agosto');"
psql -U ryan -d testes -c " insert into dim_mes (mes) values ('Setembro');"
psql -U ryan -d testes -c " insert into dim_mes (mes) values ('Outubro');"
psql -U ryan -d testes -c " insert into dim_mes (mes) values ('Novembro');"
psql -U ryan -d testes -c " insert into dim_mes (mes) values ('Dezembro');"
echo "Finalizado"
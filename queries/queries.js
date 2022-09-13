const { response } = require('express')
const qrGetChartById = 'SELECT c.salario, d.mes, g.valor FROM chart c  inner join dim_mes d on (d.mes_id = c.dim_mes) inner join debitos g on (g.dim_mes = d.mes_id)';
const qrPrioris = 'SELECT id, priori, ano, valor, m.mes FROM prioridades p inner join dim_mes m on (m.mes_id = p.dim_mes) order by p.id';
const qraddPriori = 'INSERT INTO prioridades (dim_mes, ano, priori,valor) VALUES ($1, $2, $3, $4)';
const qrGetSaxDeb = 'select SUM(c.salario) as ssalario, SUM(d.valor) as svalor from chart c inner join debitos d on (d.deb_id = c.id)';
const qrGetPerfor = 'select (SUM(c.salario) - SUM(d.valor)) as performa, m.mes from chart c inner join debitos d on (d.deb_id = c.id) inner join dim_mes m on (m.mes_id = d.dim_mes) group by m.mes';
const qrGetGeral = 'select c.salario as salario, m.mes as mes, d.valor as debito, (c.salario - d.valor) as perfor from chart c inner join debitos d on (d.dim_mes = c.dim_mes) inner join dim_mes m on (m.mes_id = c.dim_mes) group by m.mes_id, c.salario, d.valor, perfor';

module.exports = {
    qrGetChartById,
    qrPrioris,
    qraddPriori,
    qrGetSaxDeb,    
    qrGetPerfor,
    qrGetGeral

}
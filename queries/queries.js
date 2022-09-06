const { response } = require('express')

const Pool = require('pg').Pool
var connectDb = "postgres://ydiyghfkmzredl:87d4bf164b7176209b36cd893712fd3a6b72f675887fe18394816132a214c407@ec2-44-205-41-76.compute-1.amazonaws.com:5432/d9chpetiioi5k7"
const pool = new Pool({
    /* user: 'ydiyghfkmzredl',
    host: 'ec2-44-205-41-76.compute-1.amazonaws.com',
    database: 'd9chpetiioi5k7',
    password: '87d4bf164b7176209b36cd893712fd3a6b72f675887fe18394816132a214c407',
    port: 5432, */
    connectionString: connectDb,
    ssl: {
        rejectUnauthorized: false,
      }


})

const getChartById = (request, response) => {
    //const id = parseInt(request.params.id)
    pool.query('SELECT c.salario, d.mes, g.valor FROM chart c  inner join dim_mes d on (d.mes_id = c.dim_mes) inner join debitos g on (g.dim_mes = d.mes_id)',(error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
    console.log('CHART');
}

const getPrioris = (request, response) => {
    pool.query('SELECT id, priori, ano, valor, m.mes FROM prioridades p inner join dim_mes m on (m.mes_id = p.dim_mes) order by id',(error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
    console.log('Prioridadess');
}

const addPriori = (req, res) =>{
    const {mes, ano, priori, valor} = req.body;
    //Validacao
    pool.query('SELECT * FROM prioridades', (error, results) =>{
        if(results.rows.length){
            //res.send("Prioridade já cadastrada!");
        }
    });
        
        pool.query('INSERT INTO prioridades (dim_mes, ano, priori,valor) VALUES ($1, $2, $3, $4)', [mes, ano, priori,valor], (error, results) =>{
            if(error) throw error;
            if(res.status = 200){
                res.json({
                    "Status": "Ok"
                })
            }else{
                res.json({
                    "Status code": res.status
                })
            }
        });
}

module.exports = {
    getChartById,
    getPrioris,
    addPriori
}
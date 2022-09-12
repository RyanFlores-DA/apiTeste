const { response } = require('express')
const qr = require('../queries/queries')
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
    pool.query(qr.qrGetChartById,(error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
    console.log('Salário');
}

const getPrioris = (request, response) => {
    pool.query(qr.qrPrioris,(error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
    console.log('Prioridades');
}

const addPriori = (req, res) =>{
    const {mes, ano, priori, valor} = req.body;
    //Validacao
    pool.query('SELECT * FROM prioridades', (error, results) =>{
        if(results.rows.length){
            //res.send("Prioridade já cadastrada!");
        }
    });
        
        pool.query(qr.qraddPriori, [mes, ano, priori,valor], (error, results) =>{
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

const getSaxDeb = (request, response) => {
    pool.query(qr.qrGetSaxDeb,(error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
    console.log('Salario x Debitos');
}

const getPerfo = (request, response) => {
    pool.query(qr.qrGetPerfor,(error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
    console.log('Performace');
}

module.exports = {
    getChartById,
    getPrioris,
    addPriori,
    getSaxDeb,
    getPerfo
}
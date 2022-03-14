require('dotenv').config()
const { Client } = require('pg')

const listar = async () => {
    const client = new Client({
        connectionString: process.env.DATABASE_URL,
        ssl: {
            rejectUnauthorized: false
        }
    })
    await client.connect()
    const res = await client.query('SELECT * from usuarios')
    await client.end()
    return res.rows
}

const buscar = async (id) => {
    const client = new Client({
        connectionString: process.env.DATABASE_URL,
        ssl: {
            rejectUnauthorized: false
        }
    })
    await client.connect()
    const res = await client.query('SELECT * from usuarios WHERE id = $1', [id])
    await client.end()
    return res.rows[0]
}

const ingresar = async (obj) => {
    const client = new Client({
        connectionString: process.env.DATABASE_URL,
        ssl: {
            rejectUnauthorized: false
        }
    })
    await client.connect()
    const date = new Date();
    const consulta = 'INSERT INTO usuarios(username, email, password, date) values($1, $2, $3, $4)'
    const res = await client.query(consulta, [obj.username, obj.email, obj.password, date.toISOString()])
    await client.end()

}

const eliminar = async (id) => {
    const client = new Client({
        connectionString: process.env.DATABASE_URL,
        ssl: {
            rejectUnauthorized: false
        }
    })
    await client.connect()
    const res = await client.query('DELETE FROM usuarios WHERE id=$1', [id])
    await client.end()
}

module.exports = { listar, buscar, ingresar, eliminar }

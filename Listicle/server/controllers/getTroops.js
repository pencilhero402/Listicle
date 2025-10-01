import { pool } from '../config/database.js'

const getTroops = async (req, res) => {
    try {
        const results = await pool.query("SELECT * FROM gifts WHERE cardtype = 'Troop'")
        res.status(200).json(results.rows)
    } catch (error) {
        res.status(409).json( { error: error.message } )
    }
}

export default { getTroops }
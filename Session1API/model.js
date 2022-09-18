const sql = require('mssql');

const config = require('./db_config');

exports.Query = async (sqlQuery) => {
    try {
        let pool = await sql.connect(config);
        let results = await pool.request().query(sqlQuery);
        return results.recordset;
    } catch (error) {
        console.error(error);
    }
}
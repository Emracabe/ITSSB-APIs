const sql = require('mssql');
const config = require('./db_config');

exports.Query = async (sqlQuery) => {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request().query(sqlQuery);
        return result.recordsets;
    } catch (error) {
        console.error(error);
    }
};
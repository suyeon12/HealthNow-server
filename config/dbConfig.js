/*  DB Info */
module.exports = 
{
    user : process.env.NODE_ORACLEDB_USER || "system",
    password : process.env.NODE_ORACLEDB_PASSWOR || "1234",
    connectString : process.env.NODE_ORACLEDB_CONNECTIONSTRING || "localhost/xe"
}

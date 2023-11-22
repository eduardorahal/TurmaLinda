import Sequelize from "sequelize";

const Connection = new Sequelize(
    'backend',
    'user',
    '123456',
    {
        host: 'localhost',
        dialect: 'mysql'
    }
)

export default Connection;
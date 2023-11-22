import Connection from './database.js';
import User from './models/User.js';
import Empresa from './models/Empresa.js';
import Compra from './models/Compra.js';

const migrate = async () => {
    try {
        const result = await Connection.sync();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

migrate();
import dbConnect from "../config/db-config.js"; 

const getAll = () => {
    return new promise((resolve, reject) => {
        dbConnect.query('SELECT * FROM machine', (err,results) => {
           if (err) reject(err);
           else resolve(results);
        })
        })
}

export default { getAll }; 
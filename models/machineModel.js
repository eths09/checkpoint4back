import dbConnect from "../config/db-config.js"; 

const getAll = () => {
    return new Promise((resolve, reject) => {
        dbConnect.query('SELECT * FROM machine', (err,results) => {
           if (err) reject(err);
           else resolve(results);
        })
        })
}

const getOneById = (id) => {
    return new Promise((resolve, reject) => {
        dbConnect.query('SELECT * FROM machine WHERE id = ?', id, (err,result) => {
           if (err) reject("no machine for this id");
           else resolve(result);
        })
        })
}

const deleteById = (id) => {
    return new Promise((resolve, reject) => {
        dbConnect.query('DELETE FROM machine WHERE id = ?', id, (err,result) => {
           if (err) reject(err);
           else resolve(result.affectedRows);
        })
        })
}

const post = (machine) => {
  const { name, brand } = machine;
  return new Promise((resolve, reject) => {
    dbConnect.query('INSERT INTO machine (name, brand) VALUES (?, ?)', [machine], (err,result) => {
      if (err) reject(err);
      else resolve(result.insertId);
  })
})}

export default { getAll, getOneById, deleteById, post };
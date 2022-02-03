import express from 'express';
import Machine from '../models/machineModel.js';
const router = express.Router();
//GET ALL
router.get('/', async (req,res) => {
    try{
        const machine = await Machine.getAll();
        res.json(machine);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
})

//GET ONE BY ID
router.get('/:id', async (req,res) => {
  const id = req.params.id;
  try{
      const machine = await Machine.getOneById(id);
      machine ? res.json(machine) : res.status(404).json({ message: 'machine not found'});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
})

router.delete('/:id', async (req,res) => {
  const id = req.params.id;
  try{
      const result = await Machine.deleteById(id);
      result ? res.json({message : 'machineId ${id} has been delete ' }): res.status(404).json({ message: 'machine not delete'});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
})

router.post('/'), async (req,res) => {
  const {name, brand} = req.body
  try{
    const result = await Machine.post(name, brand);
    result ? res.json({message : 'machine is add'}) : res.status(404).json({ message: 'machine is not add'});
  } catch (error) {
    res.json({message : error.message}) .status(500);
  }
}

export default router;
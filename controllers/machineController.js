import express from 'express';
import Machine from '../models/machineModel.js';
const router = express.Router();
//GET ALL
router.get('/machine', async (req,res) => {
    try{
        const machine = await Machine.getAll();
        res.json(machine);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
})

//GET ONE BY ID
router.get('/machine/:id', async (req,res) => {
  const id = req.params.id;
  try{
      const machine = await Machine.getOneById(id);
      res.json(machine);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
})
export default router;
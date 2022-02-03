import express from 'express';
import Machine from '../models/machineModel.js';
const router = express.Router();

router.get('/', async (req,res) => {
    try{
        const machine = await Machine.getAll();
        res.json(machine);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
})
export default router;
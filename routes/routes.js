import machineController from '../controllers/machineController.js';
export const setupRoutes = (app) => {
    app.use('/machine', machineController);
}


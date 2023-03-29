import express from 'express';

export const routers = express.Router();

routers.route('/role').get();
routers.route('/role/create').post();
routers.route('/role/:id/update').put();
routers.route('/role/:id/delete').delete();
import express from 'express';

export const routers = express.Router();

routers.route('/user/signup').post();
routers.route('/user/signin').post();
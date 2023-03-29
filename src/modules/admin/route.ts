import express from 'express';

export const routers = express.Router();

routers.route('/admin/users').get();
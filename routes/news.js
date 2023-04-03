import express from 'express';
import {
  createNews,
  deleteNews,
  getNews,
  
  updateNews,
} from '../controllers/news.js';
const newsRouter = express.Router();
newsRouter.get('/', getNews);
newsRouter.post('/', createNews);
newsRouter.put('/', updateNews);
newsRouter.delete('/', deleteNews);
export default newsRouter;

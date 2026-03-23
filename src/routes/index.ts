import { Router } from 'express';
import * as pageController from '../controllers/pageController.ts';
import * as searchController from '../controllers/pageController.ts';


const router = Router();

//definição de rotas aqui
router.get('/', pageController.home);
router.get('/dogs', pageController.dogs);
router.get('/cats', pageController.cats);
router.get('/fishes', pageController.fishes);

export default router;
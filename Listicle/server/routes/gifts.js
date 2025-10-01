import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import giftData from '../data/gift.js'
import GiftController from '../controllers/gifts.js'
import TroopController from '../controllers/getTroops.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json(giftData)
});

router.get('/troops', TroopController.getTroops);

router.get('/:giftId', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '/Users/axinli/Desktop/Listicle/client/public/gift.html'))
});
//router.get('/', GiftController.getGifts)
//router.get('/troops', TroopController.getTroops)


export default router;
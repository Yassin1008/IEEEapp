import { Router } from "express";
import { getEvents, addEvents, getSpecificEvent, deleteEvent, patchEvent } from "../controller/EventController.js";

const router = Router();

router.get('/', getEvents);

router.post('/', addEvents );

router.get('/:id', getSpecificEvent );

router.delete('/:id', deleteEvent );
  
router.patch('/:id', patchEvent );
  
export default router;
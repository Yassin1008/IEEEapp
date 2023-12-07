import { Router } from "express";
import { getTickets, patchTicket } from "../controller/TicketsController.js";

const router = Router();

router.get('/', getTickets );
  
router.patch('/tickets/:id', patchTicket);

export default router;
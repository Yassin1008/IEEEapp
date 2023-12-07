import { Router } from "express";
import { deleteAttendee, getAttendees, getspecificAttendee } from "../controller/AttendeesController.js";

const router = Router();

router.delete('/attendee/:id', deleteAttendee );
  
router.get('/attendee/:id' , getspecificAttendee );
  
router.get('/attendee', getAttendees );
  

export default router;
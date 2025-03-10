import { Request, Response } from 'express';
import { Pet } from '../models/pet';
import { createMenuObject } from '../helpers/createMenuObject';

export const search = (req: Request, res: Response) => {
    const search = (req.query.q as string) || ""; 
    let list = Pet.getFromName(search)
    res.render('pages/page', { menu: createMenuObject(''), list, search });  
};
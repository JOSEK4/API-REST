import { Request, Response } from 'express';
import { handleHttp } from '../utils/error.handle';
const getItem = (req: Request, res: Response) => {
    try { 

    } catch (e) {
        handleHttp(res, "ERROR_GET_ITEM")
    }

  
};

const getItems = (req: Request, res: Response) => {
    try { 

    } catch (e) {
       handleHttp(res, "ERROR_GET_ITEMS")
    }

  
};

const updateItem = (req: Request, res: Response) => {
    try { 

    } catch (e) {
        handleHttp(res, "UPDATE_ITEM")
    }



}

const posItem = (req: Request, res: Response) => {
    try { 

    } catch (e) {
        handleHttp(res, "ERROR_POST_ITEM")
    }

  
};

const deleteItem = (req: Request, res: Response) => {
    try { 

    } catch (e) {
        handleHttp(res, "ERROR_DELETE_ITEM")
    }

    
};

export default { getItem, getItems, updateItem, posItem, deleteItem };
import express from 'express';
import {Item} from '../models/itemsModel.js'

const router = express.Router();

router.post('/', async (request, response) => {
    try{
        if(!request.body.name || !request.body.category || !request.body.size){
            return response.status(400).send({
                message: 'Send all required fields: name, category, size',
            });
        }
        const newItem = {
            name: request.body.name,
            category: request.body.category,
            size: request.body.size,
        };
        const item = await Item.create(newItem);

        return response.status(201).send(item);
    }catch(error){
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

router.get('/', async (reqeust, response) => {
    try{
        const items = await Item.find({});
        return response.status(200).json({
            conunt: items.length,
            data: items
        });
    }catch(error){
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

router.get('/:id', async (request, response) => {
    try{
        const {id} = request.params;
        const items = await Item.findById(id);
        return response.status(200).json(items);
    }catch(error){
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

router.put('/:id', async(request, response) => {
    try{
        if(
            !request.body.name ||
            !request.body.category ||
            !request.body.size
        ){
            return response.status(400).send({
                message: 'Send all required fields: name, category, size',
            });
        }
        const {id} = request.params;
        const result = await Item.findByIdAndUpdate(id, request.body);
        if(!result){
            return response.status(404).json({message: 'Item not found'});
        }
        return response.status(200).json({message: 'Item updated successfully'});
    }catch(error){
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

router.delete('/:id', async(request,response) => {
    try{
        const {id} = request.params;

        const result = await Item.findByIdAndDelete(id);

        if(!result){
            return response.status(404).json({message: 'Item not found'});
        }
        return response.status(200).json({message: 'Item deleted successfully'});
    }catch(error){
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

export default router;
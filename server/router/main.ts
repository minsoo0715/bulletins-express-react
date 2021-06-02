import {Application, Request, Response} from 'express'
import {router as SubRouter} from './sub'
import Bulletin from '../models/bulletin'
import { Model } from 'sequelize/types'


Bulletin.sync()

export const main = (app:Application) => {

    


    app.use('/sub', SubRouter)

    app.get('/bulletins', async (req:Request, res:Response) => {

        const _data = await Bulletin.findAll();
        res.send( {
            data: _data 
        })
    })

    app.post('/bulletins', function(req:Request, res:Response) {
        console.log(req.body)
        let _title = req.body.title
        let _content = req.body.content

        Bulletin.create({
            title: _title,
            content: _content
        })

        

        

        res.status(200).end();
        return;
    })
}
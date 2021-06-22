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

    app.post('/bulletins', async function(req:Request, res:Response) {
        console.log(req.body)
        let _title = req.body.title
        let _content = req.body.content

        const result = await Bulletin.create({
            title: _title,
            content: _content
        })

        res.send(
            {
                id : result.dataValues.id
            }
        ).end()
    })

    app.delete('/bulletins', async (req:Request, res:Response) => {
        console.log(req.body)
        let _id = req.body.id;
        await Bulletin.destroy({where : {
            id: _id
        }
    })
        res.status(200).end();
    })
}
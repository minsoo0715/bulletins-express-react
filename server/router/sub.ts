import {Router, Request, Response} from 'express'
export const router:Router = Router()

router.get('/', function(req:Request, res:Response) {
    res.render('sub', {
        name: "Hong"
    })
})


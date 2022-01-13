import { Controller } from "../../presentation/contracts"
import { JwtAuthenticator } from "../auth/jwt"

import { Request, Response } from 'express'
import { HttpAuthenticator } from "../auth/contracts/authenticate"

export const adaptRoute = (controller: Controller, ) => {
    return async (req: Request, res: Response) => {
        if (!new JwtAuthenticator().authenticate(req, res)){
            res.status(401).json({detail: "Unauthorized"})
        } else {
            const httpResponse = await controller.handle(req.body)
            console.log(`adapt route ${ JSON.stringify(req.body) }`)
            res.status(httpResponse.statusCode).json(httpResponse.data)
        }
     
    }
}

export class RouteAdapter {
    constructor (private readonly autheticator: HttpAuthenticator){}

    adaptRoute(controller: Controller) {
        return async (req:Request, res: Response) => {
            if (!this.autheticator.authenticate(req, res)) return res.status(401).json({detail: "Unauthorized"})
            const httpResponse = await controller.handle(req.body)
            res.status(httpResponse.statusCode).json(httpResponse.data)
        }
       
    }
}
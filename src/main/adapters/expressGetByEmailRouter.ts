import { Controller } from "../../presentation/contracts"
import { JwtAuthenticator } from "../auth/jwt"

import { Request, Response } from 'express'

export const adaptGetByEmailRoute = (controller: Controller) => {
    return async (req: Request, res: Response) => {
        if (!new JwtAuthenticator().authenticate(req, res)){
            res.status(401).json({detail: "Unauthorized"})
        } else {
            const httpResponse = await controller.handle(req.query)
            console.log(`adapt route ${ JSON.stringify(req.query) }`)
            res.status(httpResponse.statusCode).json(httpResponse.data)
        }
     
    }
}
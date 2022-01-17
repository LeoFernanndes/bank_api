import { HttpAuthenticator } from './contracts/authenticate';

import { Request, Response } from 'express'
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";



export class OpenAuthenticator implements HttpAuthenticator {
    authenticate(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>): boolean {
        return true
    }
}
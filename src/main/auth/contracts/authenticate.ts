import { Request, Response } from 'express'

export interface HttpAuthenticator {
    authenticate: (req: Request, res: Response) => boolean;
} 
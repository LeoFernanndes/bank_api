import { Router } from "express"
import { RouteAdapter } from "../adapters"
import { buildAuthController } from "../factories/authController"
import { OpenAuthenticator } from "../auth/open"

export default (router: Router): void => {
    router.post('/auth', new RouteAdapter(new OpenAuthenticator()).adaptRoute(buildAuthController()))
}


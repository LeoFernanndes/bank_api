import { Router } from "express"
import { adaptRoute, adaptGetByEmailRoute } from "../adapters"
import { buildFilterUsersController, buildCreateUserController } from "../factories"
import { RouteAdapter } from "../adapters"
import { JwtAuthenticator } from "../auth/jwt"

export default (router: Router): void => {
    router.post('/users', adaptRoute(buildCreateUserController()))
    router.get('/users', new RouteAdapter(new JwtAuthenticator()).adaptRoute(buildFilterUsersController()))
}


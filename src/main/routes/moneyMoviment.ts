import { Router } from "express"
import { adaptRoute } from "../adapters"
import { buildListMoneyMovimentsController } from "../factories"

export default (router: Router): void => {
    router.get('/moneymoviment', adaptRoute(buildListMoneyMovimentsController()))
}
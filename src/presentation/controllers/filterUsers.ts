import { FilterUsersService } from "@/data/services";
import { UserRetrieveModel } from "../../data/models";
import { Controller, HttpResponse, ok, ServerError, ValidationError } from "../contracts";
import { UserRetrieveViewModel } from "../viewModels/user";

export class FilterUsersController implements Controller {
    constructor(private readonly service: FilterUsersService){}
    async handle(queryParams): Promise<HttpResponse<UserRetrieveModel[]>> {
        try {
            const response = await this.service.filter(queryParams.email)
            return ok(UserRetrieveViewModel.convertList(response))          
        } catch (error) {
            console.log('user controller error')
            return ServerError(error)
        }
    }
}

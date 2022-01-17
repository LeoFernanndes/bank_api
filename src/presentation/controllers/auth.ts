import { Controller, HttpResponse, ok, ServerError, unauthorized } from "../contracts";
import { AuthRequestModel, AuthResponseModel } from "@/data/models/auth";
import { FilterUsersService } from "@/data/services";

export class AuthUserController implements Controller {
    constructor(private readonly filterUserService: FilterUsersService){}
    async handle(authModel: AuthRequestModel): Promise<HttpResponse<AuthResponseModel>> {
        try {
            const user = await this.filterUserService.filter(authModel.email)
            if (user.length){
                let authResponse: AuthResponseModel = {
                    email: authModel.email,
                    token: 'token'
                }
                return ok(authResponse)
            } else {
                let authResponse: AuthResponseModel =  {
                    email: authModel.email,
                    token: null
                }
                return unauthorized(authResponse)
            }
            
        } catch (error) {
            console.log('user controller error')
            return ServerError(error)
        }
    }
}

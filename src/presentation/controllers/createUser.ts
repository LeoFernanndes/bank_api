import {  UserCreateModel } from "../../data/models";
import { CreateUser } from "../../domain/useCases";
import { Controller, HttpResponse, ok, ServerError } from "../contracts";
import { UserViewModel } from "../viewModels/user";
import { ValidationError } from "../contracts";

export class CreateUserController implements Controller {
    constructor(private readonly createUser: CreateUser){}
    async handle(userModel: UserCreateModel): Promise<HttpResponse<UserCreateModel>> {
        try {
            const validationErrors = await UserCreateModel.validate(userModel)
            if (validationErrors.length) return ValidationError(validationErrors)
            const createdUser = await this.createUser.create(userModel)
            return ok(UserViewModel.convert(createdUser))
        } catch (error) {
            console.log('user controller error')
            return ServerError(error)
        }
    }
}

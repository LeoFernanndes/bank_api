import { CreateUser } from "../../domain/useCases";
import { UserRepository } from "../contracts";
import { UserCreateModel } from "../models";

export class CreateUserService implements CreateUser {
    constructor(private readonly userRepository: UserRepository){}
    async create(userModel: UserCreateModel): Promise<UserCreateModel> {
        return this.userRepository.create(userModel)
    }
}

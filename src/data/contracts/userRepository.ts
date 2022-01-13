import { UserCreateModel, UserRetrieveModel } from "../models/user";

export interface UserRepository {
    create: (userModel: UserCreateModel) => Promise<UserCreateModel>
    filter: (email:string) => Promise<UserRetrieveModel[]>
}
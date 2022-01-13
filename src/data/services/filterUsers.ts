import { User } from "@/domain/entities";
import { FilterUsersUsecase } from "../../domain/useCases";
import { UserRepository } from "../contracts";

export class FilterUsersService implements FilterUsersUsecase {
    constructor(private readonly userRepository: UserRepository){}
    async filter(email: string): Promise<User[]> {
        return this.userRepository.filter(email)
    }
}

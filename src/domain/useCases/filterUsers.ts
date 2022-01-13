import { User } from "../entities";

export interface FilterUsersUsecase {
    filter: (email: string) => Promise<User[]>
}

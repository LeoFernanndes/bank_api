import { User } from "../entities";

export interface AuthUser {
    auth: (user: User) => Promise<User>
}

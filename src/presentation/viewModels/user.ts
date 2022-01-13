import { UserCreateModel, UserRetrieveModel } from "../../data/models"

export class UserViewModel {
    email: string
    password: string

    static convert(user: UserCreateModel): UserViewModel{
        return {...user}
    }
}

export class UserRetrieveViewModel {
    email: string    

    static convert(user: UserRetrieveModel): UserRetrieveViewModel{
        return {email: user.email}
    }

    static convertList(users: UserRetrieveModel[]): UserRetrieveViewModel[]{        
        const convertedUsers: UserRetrieveViewModel[] = []
        for (const user of users) convertedUsers.push(this.convert(user))
        return convertedUsers
    }
}

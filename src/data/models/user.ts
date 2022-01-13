import { User } from '../../domain/entities';
import { UserFromFileRepository } from '../../infra/repositories';

export class UserCreateModel extends User{
    static async validate(userCreate: User): Promise<any[]> {
        var validationErrors = []
        var emailValidationErrors = []
        if (!userCreate.email) emailValidationErrors.push("Email must not be null")
        if (await (await new UserFromFileRepository().filter(userCreate.email)).length !== 0) emailValidationErrors.push("Email already in use")
        if (emailValidationErrors.length) validationErrors.push({email: emailValidationErrors})
        var passwordValidationErrors = []
        if (!userCreate.password) passwordValidationErrors.push("Password must not be null")
        if (passwordValidationErrors.length) validationErrors.push({password: passwordValidationErrors})
        return validationErrors
    }
}

export class UserRetrieveModel extends User {}
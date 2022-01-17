export class AuthRequestModel {
    email: string
    password: string
}

export class AuthResponseModel {
    email: string
    token: string | null
}
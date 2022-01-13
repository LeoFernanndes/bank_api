export type HttpResponse<T = any> = {
    statusCode: number
    data: T
}

export const ServerError = (error: Error): HttpResponse => ({
    statusCode: 500,
    data: error.stack    
})

export const ValidationError = (data: any): HttpResponse => ({
    statusCode: 400,
    data: data
})

export const ok = (data: any): HttpResponse => ({
    statusCode: 200,
    data: data
})

export const unauthorized = (data: any): HttpResponse => ({
    statusCode: 401,
    data:data
})
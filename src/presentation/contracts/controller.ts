import { HttpResponse } from ".";

export interface Controller {
    handle: (body?) => Promise<HttpResponse>
}
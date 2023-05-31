export enum HttpStatusCode {
    Ok = 200,
    BadRequest = 400,
    Unauthorized = 401,
    Forbidden = 403,
    NotFound = 404,
    InternalServerError = 500,
    NotImplemented = 501,
    ServiceUnavailable = 503
  }
  
export enum HttpMessageCode {
  Ok = 'success',
  BadRequest = 'bad request',
  Unauthorized = 'unauthorized',
  Forbidden = 'forbidden',
  NotFound = 'not found',
  InternalServerError = 'internal error',
  NotImplemented = 'not implemented',
  ServiceUnavailable = 'unavailable'
}

export type responseHttp = {
  status:boolean
  code?:number
  message?:string
  result?:unknown
}


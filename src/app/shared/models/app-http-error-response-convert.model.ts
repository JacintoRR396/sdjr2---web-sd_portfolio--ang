import { HttpErrorResponse } from './interfaces/app-http-error-response.interface';

export class HttpErrorResponseConvert implements HttpErrorResponse {
  constructor(public status: number, public message: string) {}

  public toHttpErrorResponse(json: string): HttpErrorResponse {
    return JSON.parse(json);
  }

  public toJson(value: HttpErrorResponse): string {
    return JSON.stringify(value);
  }
}

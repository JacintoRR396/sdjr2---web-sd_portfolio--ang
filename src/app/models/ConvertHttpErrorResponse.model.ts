import { HttpErrorResponse } from '../interfaces/HttpErrorResponse.interface';

export class ConvertHttpErrorResponse implements HttpErrorResponse {

    constructor(
        public status: number,
        public message: string
    ) { }

    public toHttpErrorResponse( json: string ): HttpErrorResponse {
        return JSON.parse( json );
    }

    public toJson( value: HttpErrorResponse ): string {
        return JSON.stringify( value );
    }

}

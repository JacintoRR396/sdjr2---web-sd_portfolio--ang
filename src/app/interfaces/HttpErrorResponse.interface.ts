export interface HttpErrorResponse {
    status: number;
    message: string;
    toHttpErrorResponse: ( json: string ) => HttpErrorResponse;
    toJson: ( value: HttpErrorResponse ) => string;
}

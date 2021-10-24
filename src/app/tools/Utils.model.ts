export class Utils {

    public static setLocalStoreBase64( name: string, data: any ): void {
        const encodeBase64: string = btoa( data );
        const jsonString: string = JSON.stringify( encodeBase64 );
        localStorage.setItem( name, jsonString );
    }

    public static getLocalStoreBase64( name: string ): any {
        const data: string = localStorage.getItem( name );
        const object: string = JSON.parse( data );
        return atob( object );
    }

}

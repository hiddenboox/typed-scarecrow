import * as Hapi from 'hapi';

export interface ScarecrowOptions {
    oz?: OzOption,
    urls: {
        app: string,
        reissue: string,
        rsvp: string
    }
}

interface OzOption {
    encryptionPassword?: string,
    loadAppFunc?: Function,
    loadGrantFunc?: Function,
    hawk?: any,
    ticket?: any
}
    
export function register(server: Hapi.IServerOptions, options?: ScarecrowOptions, next?: () => void): void;

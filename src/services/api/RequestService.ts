import { defer, Observable, Observer } from "rxjs";
import Axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, CancelToken, Method } from "axios";
import moment from "moment";

// TODO have to change to the real host later
const HOST = '';

const defaultHeaders = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
};

interface IConfig {
    url: string,
    method?: Method,
    cancelToken?: any //CancelToken,
    headers?: any,
    validateStatus?: () => boolean | null,
    body?: object,
    timeout?: number,
}

export default class RequestService {

    fetch = (config: AxiosRequestConfig) => {
        const {
            url,
            method = 'POST',
            headers = {},
            data = {},
            timeout = 6000,
            cancelToken,
            validateStatus = (status: number) => status >= 200 && status < 300,
        } = config;
        const headersBuild = {
            ...defaultHeaders,
            ...headers,
        };

        return Axios.create({
            baseURL: HOST,
            timeout: 6000,
        })
            .request({
                url,
                method,
                headers: headersBuild,
                data,
                timeout,
                cancelToken,
                validateStatus,
            })
            .then((response: AxiosResponse) => Promise.resolve(response.data));
    }

    fetch$ = (config: AxiosRequestConfig) =>
        defer(() =>
            new Observable((observer: any) => {
                const source = Axios.CancelToken.source();
                observer.add(() => {
                    source.cancel('Cancel Requested');
                });

                this.fetch({
                    ...config,
                    cancelToken: source.token,
                })
                    .then((response: Response) => {
                        observer.next(response);
                        observer.complete();
                    })
                    .catch((error: AxiosError) => {
                        if (Axios.isCancel(error)) {
                            console.log('RequestService Is Cancel', error.message);
                            observer.complete();
                        } else {
                            observer.error(error);
                        }
                    });
            }));

}



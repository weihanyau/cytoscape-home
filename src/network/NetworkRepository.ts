import { AxiosInterceptorManager, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

export type NetworkRequestConfig<Data = any> = AxiosRequestConfig<Data>;
type InternalNetworkRequestConfig<Data = any> = InternalAxiosRequestConfig<Data>;
export type NetworkResponse<Data = any> = AxiosResponse<Data>;

/**
 * @returns eject function
 */
type NetworkInterceptorFunction<Config> = (
    ...params: Parameters<AxiosInterceptorManager<Config>['use']>
) => VoidFunction;

export interface NetworkRepository {
    // API methods
    get<ResponseData = any, Response = NetworkResponse<ResponseData>, RequestData = any>(
        url: string,
        config?: NetworkRequestConfig<RequestData>,
    ): Promise<Response>;
    post<ResponseData = any, Response = NetworkResponse<ResponseData>, RequestData = any>(
        url: string,
        data?: RequestData,
        config?: NetworkRequestConfig<RequestData>,
    ): Promise<Response>;
    /**
     * Similar to `post`, but content-type header is set to 'multipart/form-data'.
     * Use `postForm` for attachment uploads
     */
    postForm<ResponseData = any, Response = NetworkResponse<ResponseData>, RequestData = any>(
        url: string,
        data?: RequestData,
        config?: NetworkRequestConfig<RequestData>,
    ): Promise<Response>;
    put<ResponseData = any, Response = NetworkResponse<ResponseData>, RequestData = any>(
        url: string,
        data?: RequestData,
        config?: NetworkRequestConfig<RequestData>,
    ): Promise<Response>;
    patch<ResponseData = any, Response = NetworkResponse<ResponseData>, RequestData = any>(
        url: string,
        data?: RequestData,
        config?: NetworkRequestConfig<RequestData>,
    ): Promise<Response>;
    delete<ResponseData = any, Response = NetworkResponse<ResponseData>, RequestData = any>(
        url: string,
        config?: NetworkRequestConfig<RequestData>,
    ): Promise<Response>;
    getFile<RequestData = any>(
        url: string,
        config?: Omit<NetworkRequestConfig<RequestData>, 'responseType'>,
    ): Promise<NetworkResponse<ArrayBuffer>>;

    getBaseURL(): string;
}

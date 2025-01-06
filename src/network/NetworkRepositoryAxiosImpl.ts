import axios, { AxiosInstance } from 'axios';
import { NetworkRepository } from './NetworkRepository';

export class NetworkRepositoryAxiosImpl implements NetworkRepository {
    readonly #baseURL: string;

    readonly #instance: AxiosInstance;

    constructor(baseURL: string) {
        this.#baseURL = baseURL;
        this.#instance = axios.create({
            baseURL,
            timeout: 15000
        });
    }

    public get: NetworkRepository['get'] = (url, config) => this.#instance.get(url, config);

    public post: NetworkRepository['post'] = (url, data, config) => this.#instance.post(url, data, config);

    public postForm: NetworkRepository['postForm'] = (url, data, config) => this.#instance.postForm(url, data, config);

    public put: NetworkRepository['put'] = (url, data, config) => this.#instance.put(url, data, config);

    public patch: NetworkRepository['patch'] = (url, data, config) => this.#instance.patch(url, data, config);

    public delete: NetworkRepository['delete'] = (url, config) => this.#instance.delete(url, config);

    public getFile: NetworkRepository['getFile'] = async (url, config) => {
        const response = await this.get<ArrayBuffer>(url, {
            responseType: 'arraybuffer',
            ...config,
        });
        return response;
    };

    public getBaseURL(): string {
        return this.#baseURL;
    }
}

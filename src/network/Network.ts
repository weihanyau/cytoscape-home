import { NetworkRepository } from "./NetworkRepository";
import { NetworkRepositoryAxiosImpl } from "./NetworkRepositoryAxiosImpl";

const baseUrl = "https://genemania.org/json/";
export const Network: NetworkRepository = new NetworkRepositoryAxiosImpl(baseUrl);
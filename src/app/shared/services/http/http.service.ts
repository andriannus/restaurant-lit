import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  CancelTokenSource,
} from "axios";

import { API } from "@/app/shared/constants/api.constant";

export class HttpService {
  protected readonly instance: AxiosInstance;

  private cancelSource: CancelTokenSource | null;

  constructor(baseUrl?: string) {
    this.instance = axios.create({
      baseURL: baseUrl || API.baseUrl,
      timeout: API.timeout,
    });
    this.cancelSource = null;
    this.interceptRequest = this.interceptRequest.bind(this);

    this.initInterceptor();
  }

  private initInterceptor(): void {
    this.instance.interceptors.request.use(this.interceptRequest);
    this.instance.interceptors.response.use(
      this.interceptSuccessResponse,
      this.interceptErrorResponse,
    );
  }

  private createCancelToken(config: AxiosRequestConfig): void {
    const { CancelToken } = axios;
    const source = CancelToken.source();

    this.cancelSource = source;
    config.cancelToken = source.token;
  }

  private cancelRequest(): void {
    if (this.cancelSource) {
      return this.cancelSource.cancel();
    }
  }

  private interceptRequest(config: AxiosRequestConfig): AxiosRequestConfig {
    this.cancelRequest();
    this.createCancelToken(config);

    return config;
  }

  private interceptSuccessResponse(res: AxiosResponse): AxiosResponse {
    return res;
  }

  private interceptErrorResponse(err: any): Promise<never> {
    return Promise.reject(err);
  }
}

import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHandler, HttpRequest, HttpHeaders, HttpParams, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { WARAPI_ROOT } from './war-api-client.module';

@Injectable()
export class WarApiHttpClient extends HttpClient {

  constructor(handler: HttpHandler, @Inject(WARAPI_ROOT) private root: string) {
    super(handler);
  }

  public request<R>(first: HttpRequest<any> | string, url?: string, options?: any): any {
    if (first instanceof HttpRequest) {
      first = first.clone({ url: this.fromRoot(first.url)});
      return super.request<R>(first);
    } else {
      return super.request(first, this.fromRoot(url), options);
    }
  }

  private fromRoot(url: string): string {
    if (!this.root.endsWith('/') && !url.startsWith('/')) {
      url = '/' + url;
    }
    return `${this.root}${url}`;
  }

}

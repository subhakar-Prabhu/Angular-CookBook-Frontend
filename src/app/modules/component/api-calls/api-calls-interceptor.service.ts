import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEventType,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { ApiCallsService } from './api-calls.service';

@Injectable()
export class ApiCallsInterceptorService implements HttpInterceptor {
  constructor(private apiCallService: ApiCallsService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const modifiedRequest = req.clone({
      headers: req.headers.append('APICall', 'Interceptor'),
    });
    return next.handle(modifiedRequest).pipe(
      tap((event) => {
        if (event.type === HttpEventType.Response) {
          this.apiCallService.setInterceptorData(event.body);
        }
      })
    );
  }
}

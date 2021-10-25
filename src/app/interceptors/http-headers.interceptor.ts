/*import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor{
    constructor(){}
    intercept(
        req:HttpRequest<any>,
        next:HttpHandler):Observable<HttpEvent<any>>{
            req=req.clone({
                
                setHeaders:{
                    'Accept':'application/json',
                    'Content-Type':'application/json',
                },
                setParams:{
                    'Authorization':'Bearer BQDCsHGMFcL3z-AdznDK5OF1P6dRtQzYQGctsQwukzEVn3QHt2M1K6JOEFFa87ZXVCsmTn5BNRkI9h7eHXOayM46ggQLFOMbA2BLz3Vv9ByaZYwpwCKPENrkaO_gvPtdxPXWavvp_QJbEz96Q8kYcsoeJoWLPnA',
                }
            });
            return next.handle(req);
        }
    
}*/
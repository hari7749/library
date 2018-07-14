import { map, catchError } from 'rxjs/operators';
import {  Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';


@Injectable({
  providedIn: 'root'
})
export class CompanydetailsService {

  private BlackHoleUrl = 'http://14.192.17.225/blackholeappapi/';

  constructor( private http: Http,) { }

  Companydetailservice(companydetails)
  {
    debugger;
    var body = JSON.stringify(companydetails);
    let headers = new Headers({'Content-Type':'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.post(this.BlackHoleUrl+'RegisterCompany/UpdateCompanybyID',body,options).pipe(map(this.extractData),catchError(this.handleError))
  }

  private extractData(res: Response){
    let body = res.json();
    return body || {};
  }

  private handleError(error: Response | any) {

    let errMsg: string;
    if (error instanceof Response) {
        const body = error.json() || '';
        const err = body.error || JSON.stringify(body);
        errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
        errMsg = error.message ? error.message : error.toString();
    }
    return errMsg;
  }
}



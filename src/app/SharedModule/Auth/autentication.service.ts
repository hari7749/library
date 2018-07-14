import { Injectable } from '@angular/core';
import { Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Http, Response } from '@angular/http';
import { Observable, of} from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class AutenticationService {

  private authURL = 'http://14.192.17.225/GarbhaGudiTestAPI/oAuth/token'; 
  private BlackHoleUrl ='http://14.192.17.225/blackholeappapi/';

  
  constructor(private http: Http,) { }

  getLogin(AppUsers)
  {
    
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded',
    // 'Authorization':'Basic T2dfT2Q2V1R3OHRkYUhyTkN6WlNwaVk0YldRYTpVW'
  });
    let options = new RequestOptions({ headers: headers });

    let values= "grant_type=password&"+"Username="+AppUsers.UserName+"&Password="+AppUsers.Password;

    return this.http.post(this.authURL,values, options).toPromise()
    .then(this.extractData)
    .catch(this.handleError);    
  }


SignUpCompany(Company)
{
  debugger;
  var body = JSON.stringify(Company);
  let headers = new Headers({'Content-Type': 'application/json'});
  let options = new RequestOptions({headers: headers });
  return this.http.post(this.BlackHoleUrl+'Signup/InsertSignup',body,options).pipe(map(this.extractData),catchError(this.handleError))  
}


  private extractData(res: Response) {    
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

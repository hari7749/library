import { Headers, RequestOptions, Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  blackholeUrl="http://14.192.17.225/blackholeappapi/";
  constructor(private http:Http,) { }

  GetSuggestionType(id)
  {
    
    let headers= new Headers ({'Content-Type':'application/json'});
    let options = new RequestOptions({headers:headers});
    return this.http.get(this.blackholeUrl+"Company/GetSuggestionType?id="+id,options).toPromise().then(this.extractdata).catch(this.handelError);
  }

  GetCompanyDetails(ID)
  {
    
    let headers= new Headers ({'Content-Type':'application/json'});
    let options = new RequestOptions({headers:headers});
    return this.http.get(this.blackholeUrl+"Company/GetCompanyDetails?ID="+ID,options).toPromise().then(this.extractdata).catch(this.handelError);
  }

  GetGeneralPost()
  {
    
    let headers= new Headers ({'Content-Type':'application/json'});
    let options = new RequestOptions({headers:headers});
    return this.http.get(this.blackholeUrl+"Company/GetGeneralPost",options).toPromise().then(this.extractdata).catch(this.handelError);
  }


  InsertConnect(connect)
  {
    debugger;
    var body = JSON.stringify(connect);
    let headers = new Headers({'Content-Type':'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.post(this.blackholeUrl+'Company/InsertReasonForConnect',body,options).pipe(map(this.extractdata),catchError(this.handelError))
  }
  InsertProfileSetting(profilesetting)
  {
    debugger;
    var body = JSON.stringify(profilesetting);
    let headers = new Headers({'Content-Type':'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.post(this.blackholeUrl+'Company/InsertPocRequest',body,options).pipe(map(this.extractdata),catchError(this.handelError))

  }


  private extractdata(res:Response)
  {
    let body =res.json();
    return body || {};
  }
  private handelError(error:Response|any){
    let errormsg:string;
    if(error  instanceof Response)
    {
      const body = error.json();
      const err = body.error || JSON.stringify(body);
      errormsg = `${error.status} - ${error.statusText || ''} ${err}`;
    }
    else {
      errormsg = error.message ? error.message : error.toString();
      }
      return errormsg;
  }
  


}

import { Injectable } from '@angular/core';
import { Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Http, Response } from '@angular/http';
import { Observable, of} from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private BlackHoleUrl ='http://14.192.17.225/blackholeappapi/';

  constructor(private http: Http,) { }

  getFilterSector()
  {
    
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers });    
    return this.http.get(this.BlackHoleUrl+"Company/GetSectorType",options).toPromise().then(this.extractData).catch(this.handleError);
  }
  getFilterAreaOfOperation()
  {
    
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers });    
    return this.http.get(this.BlackHoleUrl+"Company/GetAreaOfOperation",options).toPromise().then(this.extractData).catch(this.handleError);
  }
  getFilterAgeGroup()
  {
    
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers });    
    return this.http.get(this.BlackHoleUrl+"Company/GetAgeGroupType",options).toPromise().then(this.extractData).catch(this.handleError);
  }
  getFilterGender()
  {
    
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers });    
    return this.http.get(this.BlackHoleUrl+"Company/GetGender",options).toPromise().then(this.extractData).catch(this.handleError);
  }
  getFilterSegment()
  {
    
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers });    
    return this.http.get(this.BlackHoleUrl+"Company/GetSegmentType",options).toPromise().then(this.extractData).catch(this.handleError);
  }

getComapanybysector(id)
{
  
  let headers = new Headers({'Content-Type': 'application/json'});
  // let myParams = new URLSearchParams();
  // myParams.append('id',id);
  let options = new RequestOptions({headers: headers });    
  return this.http.get(this.BlackHoleUrl+"Company/GetCompanyBySectorID/?id="+id,options).toPromise().then(this.extractData).catch(this.handleError);
}
getComapanybyAreaOfOperation(id)
{
  
  let headers = new Headers({'Content-Type': 'application/json'});  
  let options = new RequestOptions({headers: headers});   
  return this.http.get(this.BlackHoleUrl+"Company/GetCompanyByAreaOfOperationID/?id="+id,options).toPromise().then(this.extractData).catch(this.handleError);
}

getComapanybyAgeGroup(id)
{
  
  let headers = new Headers({'Content-Type': 'application/json'});
  // let myParams = new URLSearchParams();
  // myParams.append('id',id);
  let options = new RequestOptions({headers: headers }); 
  return this.http.get(this.BlackHoleUrl+"Company/GetCompanyByAgeGroupID/?id="+id,options).toPromise().then(this.extractData).catch(this.handleError);
}

getComapanybyGender(id)
{
  
  let headers = new Headers({'Content-Type': 'application/json'});
  // let myParams = new URLSearchParams();
  // myParams.append('id',id);
  let options = new RequestOptions({headers: headers }); 
  return this.http.get(this.BlackHoleUrl+"Company/GetCompanyByGenderID/?id="+id,options).toPromise().then(this.extractData).catch(this.handleError);
}

getComapanybySegment(id)
{
  
  let headers = new Headers({'Content-Type': 'application/json'});
  // let myParams = new URLSearchParams();
  // myParams.append('id',id);
  let options = new RequestOptions({headers: headers  }); 
  return this.http.get(this.BlackHoleUrl+"Company/GetCompanyBySegmentID/?id="+id,options).toPromise().then(this.extractData).catch(this.handleError);
}
getGeneralPosts()
{
  debugger;
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers });    
    return this.http.get(this.BlackHoleUrl+"Company/GetGeneralPost",options).toPromise().then(this.extractData).catch(this.handleError);
}
getSuggentions(id)
{
  let headers = new Headers({'Content-Type': 'application/json'});
  // let myParams = new URLSearchParams();
  // myParams.append('id',id);
  let options = new RequestOptions({headers: headers  }); 
  return this.http.get(this.BlackHoleUrl+"Company/GetSuggestionType/?ID="+id,options).toPromise().then(this.extractData).catch(this.handleError);
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

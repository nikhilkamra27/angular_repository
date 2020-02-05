import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
@Injectable({
  providedIn:'root'
})
export class LoginService {

  constructor(private httpclient:HttpClient) { }


checkUserExistence(userObj:any):Observable<any>
{
  return this.httpclient.get("https://daimalerblog2019-cf.cfapps.io/findboauserbyname/"+userObj.username)
}
}
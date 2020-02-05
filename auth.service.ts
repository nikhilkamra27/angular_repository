import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _token: string;
  private _isLoggedIn: boolean;
  
  public set isLoggedIn(value: boolean) {
    this._isLoggedIn = value;
  }
  public get token(): string {
    return this._token;
  }
  public set token(value: string) {
    this._token = value;
    window.sessionStorage.setItem("token", this._token);
  }
  constructor() { }

  sendToken(data)
  {
    this.token=data;
  }

  get isloggedIn():boolean
  {
    if(this._token!=null)
    {
      this._isLoggedIn=true;
      return this._isLoggedIn;
    }
  }

  logout()
  {
    window.sessionStorage.removeItem("token");
  }
}

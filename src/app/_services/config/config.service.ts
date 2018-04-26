import { Injectable, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
// import * as $ from 'jquery';
@Injectable()
export class ConfigService  {

  public ip: 'http://www.cricdreamteam.com';
  public port = '';
  public api = 'api/CoraborateWebAPI';
  public API_KEY = "X-SF4_?4$";

  constructor(private http: Http) { }


  getUser() {
     debugger;
     console.log("service body");
    // let headers = new HttpHeaders();
    // headers=headers.set('api_key','X-SF4_?4$');
    // // headers.set ()
    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('API_KEY',this.API_KEY.toString());
   
    
    let url = "http://www.cricdreamteam.com/api/CoraborateWebAPI/GetAllClassess?userId=54"
    return this.http.get(url,{headers:headers}).map((res:Response) => res.json());
  }

  urlBuilder(controlerAction) {
    if (this.port != '') {

      return this.ip + ":" + this.port + "/" + this.api + "/" + controlerAction;

    }
    else
      return this.ip + "/" + this.api + "/" + controlerAction;


  }

  headerCTJson() {
    let header = new Headers({ 'content-type': 'application/json' });
    header.append('API_KRY', this.API_KEY);
    return header;

  }

  headerCTUrlencoded() {
    let header = new Headers({ 'content-type': 'application/x-www-form-urlencoded' });
    header.append('API_KRY', this.API_KEY);
    return header;

  }

}

import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { IClassesViews } from '../../../_models/ClassesViews';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { ConfigService } from '../../../_services/config/config.service';

@Injectable()

export class NavbarService {
  // head:Headers;
  constructor(private _http: Http, private cs: ConfigService) { }

  GetOwnedClasses() {
    console.log("imalive in service")
    let apiUrl: string = this.cs.urlBuilder("GetAllClassess?UserId=55");//"http://localhost:9214/api/CoraborarteAPI/GetAllClasses";//this.cs.urlBuilder("GetAllClasses"); //'http://localhost:9214/api/CoraborarteAPI/GetAllClasses';
    console.log(apiUrl);

    let headers = this.cs.headerCTJson();
     return this._http.get("http://localhost:9214/api/CoraborarteAPI/GetAllClasses")    
   // return this._http.get("http://www.cricdreamteam.com/api/CoraborateWebAPI/GetAllClassess?UserId=55",{headers:headers})    
      .map(response => response.json());
  }

  //   getAllClasses(): Observable<IClassesViews> {
  //     //let apiUrl: string = 'http://localhost:9214/api/CoraborarteAPI/GetAllClasses'; http://www.cricdreamteam.com/api/CoraborateWebAPI/GetAllClassess?userId=1
  //     let apiUrl: string = 'http://localhost:9214/api/CoraborarteAPI/GetAllClasses';

  //     const httpOptions = {
  //         headers: new Headers({
  //             'API_KEY': 'X-SF4_?4$1',
  //             'Content-Type': 'application/json; charset=utf-8',
  //             'Access-Control-Allow-Origin': '*',
  //         })
  //     };

  //     return this._http
  //         .get(apiUrl, httpOptions)
  //         .map((response: Response) => <any>response.json())
  //         .catch(this.handleError);
  // }
}

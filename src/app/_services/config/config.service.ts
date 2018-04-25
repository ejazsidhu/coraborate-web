import { Injectable, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
@Injectable()
export class ConfigService implements OnInit {

  public ip: 'http://www.cricdreamteam.com';
  public port = '';
  public api = 'api/CoraborateWebAPI';
  public API_KEY = 'X-SF4_?4$';

  constructor() { }


  ngOnInit() {

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

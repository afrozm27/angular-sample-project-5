import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class InfoService {

  constructor(private _http: Http) { }
  getData(){
    return this._http.get('https://api.myjson.com/bins/1h12w3')
      .map((response:Response) => response.json());
      
  } 
}


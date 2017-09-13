import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { Lookup } from './lookup';

@Injectable()
export class LookupService {

  private _lookupUrl = 'http://localhost:8080/Lookup';
  //private lookup: Lookup = new Lookup();

  constructor(private http: Http) { }

  getLookups(): Observable<Lookup[]> {
    return this.http.get(this._lookupUrl)
      .map((res: Response) => {
        let lookup = res.json();
        return lookup;
      })
      .catch(this.handleError);

  }

  getLookup(title: string): Observable<Lookup> {
    return  this.http.get(this._lookupUrl   + '/' + title)
      .map((res: Response) => res.json())
      .catch(this.handleError);



  }

  private handleError(error: Response) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

}

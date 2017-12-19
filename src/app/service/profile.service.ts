import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import {Profile} from "../model/profile";
import {AuthService} from "./authService";
import * as AppConfig from '../config/app-config';

@Injectable()
export class ProfileService {

  config = AppConfig.CONFIG;
  private _profileUrl = this.config['_profileUrl'];//'http://localhost:8080/Profile';
  private _profileCheckUrl = this.config['_profileCheckUrl'];//'http://localhost:8080/CheckProfileExists';
  private headers = new Headers({ 'Content-Type': 'application/json' });
  userId: string;


  constructor(private http: Http, private authService: AuthService,) {
    this.authService.afAuth.authState.subscribe(user => {
      if(user) this.userId = user.uid
    })
  }

  getProfile(uid: string): Observable<Profile> {

    return this.http.get(this._profileUrl  + '/' + uid)
      .map((res: Response) => {
        let profile = res.json();
        console.log('GetProfile status: ' + profile.uid);
        return profile;
      })
      .catch(this.handleError);

  }

  checkProfileExists(uid: string): Observable<Profile> {

    return this.http.get(this._profileCheckUrl  + '/' + uid)
      .map((res: Response) => res.text())
      .catch(this.handleError);

  }


  public deleteProfileById(uid: string)  : Observable<string> {
    return this.http.delete(this._profileUrl  + '/' + uid)
      .map((res: Response) => res)
      .catch(this.handleError);
  }


  insertProfile(profile: Profile) : Observable<Profile> {
    //console.log("This is the profile being submitted: " + profile.yearborn);
    return this.http.post(this._profileUrl, profile)
      .map((res: Response) => {
       let profile = res.json();
        //console.log('Insert Profile status: ' + profile);
        return profile;
      })
      .catch(this.handleError);
  }

  updateProfile(profile: Profile) : Observable<Profile> {
    return this.http.put(this._profileUrl, profile)
      .map((res: Response) => {
        console.log('Update Profile return: ' + res.json());
        let profile = res.json();
        return profile;
      })
      .catch(this.handleError);
  }



  private handleError(error: Response) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    console.error(error);
    return Observable.throw("Error in ProfileService service");
  }

}

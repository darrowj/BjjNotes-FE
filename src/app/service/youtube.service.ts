import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {Video} from "./Video";

const BASE_URL = 'https://www.googleapis.com/youtube/v3/search?q=';
const API_TOKEN = 'AIzaSyBnGnjcwoDwQlpiYt0FZYgo0rtjADsMrbo';

@Injectable()
export class YouTubeService {

  constructor(private http:Http){}

  youtubeUrl: string;

  search(query): Observable<any> {

    this.youtubeUrl = BASE_URL + query + "&part=snippet&key=" + API_TOKEN;

    console.log("Youtube Search Query String: " + this.youtubeUrl);

    return this.http.get(this.youtubeUrl)
      .map((res:Response) => res.json())
      .map(json => json.items);
  }
}

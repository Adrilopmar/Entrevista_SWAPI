import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http:HttpClient) { }
  api_url:string = '/api/starships/'
  endPoint:string='?page='
  p:number=1

getStarships(p:number):Observable<any>{
  const headers:any = new Headers();
  headers.append('Access-Control-Allow-Headers', '*');
        headers.append('Access-Control-Allow-Methods', 'GET');
        headers.append('Access-Control-Allow-Origin', 'Origin, X-Requested-With, Content-Type, Accept');
  return this.http.get(this.api_url+this.endPoint+ p, {headers:headers})
}

}

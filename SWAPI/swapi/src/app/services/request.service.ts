import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http:HttpClient) { }
  api_url:string = 'https://swapi.dev/api/starships/'
  endPoint:string='?page='
  p:number=1

getStarships(p:number){
  return this.http.get(this.api_url+this.endPoint+ p)
}

}

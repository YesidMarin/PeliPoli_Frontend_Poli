import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { environment } from '../../environments/environment'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  url: string = environment.api

  constructor(private http: HttpClient) { }

  getPopularMovie(): Observable<any>{
    return this.http.get(`${this.url}/movie/popular`)
  }

  getUpComing(): Observable<any>{
    return this.http.get(`${this.url}/movie/upcoming`)
  }

  getTopRated(): Observable<any>{
    return this.http.get(`${this.url}/movie/top_rated`)
  }

}

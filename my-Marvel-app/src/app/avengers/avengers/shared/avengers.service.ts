import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AvengersService {

    PUBLIC_KEY = '361eba613405dd1d03cef36a83c1f2a6';
    HASH='36ab56aa414a6c27e6c0442502223b99';
    URL_API = `https://gateway.marvel.com:443/v1/public/characters?name=Avengers&nameStartsWith=avengers&orderBy=name&limit=100&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`;;
  
    constructor(private http: HttpClient ) { }
  
    getAllAvengers() : Observable<any> {
       return this.http.get<any>(this.URL_API)
       .pipe(map((data: any) => data.data.results))
 
   }
}

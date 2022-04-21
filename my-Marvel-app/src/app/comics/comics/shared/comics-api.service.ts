import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';

// Your public key
// 361eba613405dd1d03cef36a83c1f2a6
// Your private key
// 2fac5b41fa2cc15f697f40611ebfe93deef39be6
// HASH = 12fac5b41fa2cc15f697f40611ebfe93deef39be6361eba613405dd1d03cef36a83c1f2a6
@Injectable({
  providedIn: 'root'
})
export class ComicsApiService {

  PUBLIC_KEY = '361eba613405dd1d03cef36a83c1f2a6';
  HASH='36ab56aa414a6c27e6c0442502223b99';
  URL_API = `https://gateway.marvel.com:443/v1/public/comics?apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`;;

  constructor(private http: HttpClient ) { }

  getAllComics() : Observable<any> {
     return this.http.get<any>(this.URL_API)
     .pipe(map((data: any) => data.data.results))
}
}

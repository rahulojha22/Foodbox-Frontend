import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baseUrl from './baseUrl';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PublicService {

  publicUrl: string = baseUrl+'/public';

  constructor(private http: HttpClient) { }

  public userSignUp(user: any): Observable<any>{
    return this.http.post(`${this.publicUrl}/user/signup`, user);
  }

  public userLogin(): Observable<any>{
    return this.http.get(`${this.publicUrl}/user/login`);
  }

  public getCarousel(): Observable<any>{
    return this.http.get(`${this.publicUrl}/getActiveCarousel`);
  }

  public getProductList(): Observable<any>{
    return this.http.get(`${this.publicUrl}/getActiveProduct`);
  }

}

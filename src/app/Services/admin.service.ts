import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import baseUrl from './baseUrl';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  adminUrl: string = baseUrl+'/admin';

  constructor(private http: HttpClient) { }

  public addCarousel(carousel: FormData): Observable<any>{
    return this.http.post(`${this.adminUrl}/uploadCarouselImage`, carousel);
  }

  public getCarousel(): Observable<any>{
    return this.http.get(`${this.adminUrl}/downloadCarousel/Rahul.jpg`);
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './baseUrl';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  adminUrl: string = baseUrl+'/user';

  constructor(private http: HttpClient) { }
}

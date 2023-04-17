import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './baseUrl';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userUrl: string = baseUrl+'/user';

  constructor(private http: HttpClient) { }

  public addToCart(userId: any, productId: any, productQuantity: any){
    return this.http.post(`${this.userUrl}/addToCart/${userId}/${productId}/${productQuantity}`, {});
  }

  public cartList(userId: any){
    return this.http.get(`${this.userUrl}/getOrderCart/${userId}`);
  }

  public saveOrder(orders: any){
    return this.http.post(`${this.userUrl}/saveOrder`, orders);
  }

}

import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getProductInCart();
  }

  getProductInCart(){
    let user: any = localStorage.getItem('user'); 
    let userId: any = JSON.parse(user).userId;
    this.userService.cartList(userId).subscribe((response: any) => {
      console.log(response);
    })
  }

}

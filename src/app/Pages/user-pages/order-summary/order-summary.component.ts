import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})
export class OrderSummaryComponent implements OnInit {

  productQuantity: any;
  deliveryAddress: any;  

  product: any;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    let productDetail: any = localStorage.getItem('product');
    this.product = JSON.parse(productDetail);
    this.productQuantity = this.product.minOrder;
    console.log(this.product);
  }

  order(){
    let userDetail: any = localStorage.getItem('user');
    let user: any = JSON.parse(userDetail);
    let orders: any = {
      user: user,
      product: this.product,
      productQuantity: this.productQuantity,
      deliveryAddress: this.deliveryAddress
    }
    this.userService.saveOrder(orders).subscribe((response: any) => {
      localStorage.setItem('savedOrder', response);
      this.router.navigate(['/user/payment']);
    })
  }

}

import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  modalCard: string = 'login';
  user: any;

  constructor(private location: Location) { }

  ngOnInit(): void {    
  }

  userLogin(){
    this.user = localStorage.getItem('user');
    if(this.user){
      return true;
    }else{
      return false;
    }
  }

  modalType(cardType: any){
    this.modalCard = cardType;
  }
  
  viewCategory(){
    let path = this.location.path().lastIndexOf('/');
    if(this.location.path().substring(path+1) == 'cart'){
      return false;
    }else{
      return true;
    }
  }

}

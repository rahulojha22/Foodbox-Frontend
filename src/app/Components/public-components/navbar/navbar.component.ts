import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  modalCard: string = 'login';

  constructor() { }

  ngOnInit(): void {
  }

  modalType(cardType: any){
    this.modalCard = cardType;
  }  

}

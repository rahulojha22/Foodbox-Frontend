import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.css']
})
export class AdminNavbarComponent implements OnInit {

  navElements: {routerPath: string, elementName: string}[] = [
                                                                      {routerPath: '/admin/carousel', elementName:'Manage Carousel'},
                                                                      {routerPath: '/admin/order', elementName:'Manage order'},
                                                                      {routerPath: '/admin/product', elementName:'Manage product'},
                                                                      {routerPath: '/admin/sales', elementName:'Sales Report'},
                                                                    ]

  constructor() { }

  ngOnInit(): void {
  }

}

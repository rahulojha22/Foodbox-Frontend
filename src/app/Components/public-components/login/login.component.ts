import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PublicService } from 'src/app/Services/public.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() modalCardType = new EventEmitter();
  userLoginDetail = new FormGroup({
                                    userMobNumber : new FormControl(),
                                    userEmail     : new FormControl(),
                                    userPassword  : new FormControl(),
                                  })

  constructor(private publicApi: PublicService) { }

  ngOnInit(): void {
  }

  signUp(){
    this.modalCardType.emit('signUp');
  }

  loginUser(){
    this.publicApi.userLogin().subscribe((result:any) => {
      console.log(result);
    })
  }

}

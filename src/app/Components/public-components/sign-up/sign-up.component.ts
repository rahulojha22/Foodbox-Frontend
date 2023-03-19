import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PublicService } from 'src/app/Services/public.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  @Output() modalCardType = new EventEmitter();
  createAccountBtn: boolean = true;
  signUpForm = new FormGroup({
                                userFirstName : new FormControl(),
                                userLastName  : new FormControl(),
                                userMobNumber : new FormControl(),
                                userEmail     : new FormControl(),
                                userPassword  : new FormControl(),
                            });

  constructor(private publicApi: PublicService) { }

  ngOnInit(): void {
  }

  login(){
    this.modalCardType.emit('login');
  }

  signUpUser(){
    this.publicApi.userSignUp(this.signUpForm.value).subscribe((result:any) => {
      console.log(result);
    })
  }

}

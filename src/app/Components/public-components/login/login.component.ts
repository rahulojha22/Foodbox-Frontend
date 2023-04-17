import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
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

  constructor(private publicApi: PublicService, private router: Router) { }

  ngOnInit(): void {
  }

  signUp(){
    this.modalCardType.emit('signUp');
  }

  loginUser(){
    this.publicApi.userLogin(this.userLoginDetail.value.userEmail, this.userLoginDetail.value.userMobNumber, this.userLoginDetail.value.userPassword).subscribe((response:any) => {
      localStorage.setItem("user", JSON.stringify(response));
      this.router.navigate(['/user/landing']);
    })
  }

}

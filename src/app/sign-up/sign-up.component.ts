import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl , FormsModule, FormBuilder , Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {SignupService} from '../services/signup.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signupform:FormGroup
  adminEmail:string = "vikrantchaudhary258@gmail.com";
  adminPassword:string = "123456789";

  userData:any[] = [];
  matchData:any;

  constructor(private _fb:FormBuilder,private router:Router,private _signup:SignupService) { }
  verify:boolean = false;

  ngOnInit(): void {
    this.signupform = this._fb.group({
      email:['',Validators.compose([Validators.required,Validators.email])],
      password:['',Validators.compose([Validators.required,Validators.minLength(6)])]
    })
    this.getdata();
  }

  switchfun(){
    console.log('i am inside switch function');
    this.router.navigate(['/signup2']);
  }

  getdata(){
    this._signup.getLoginDetails().subscribe(data => {
      console.log(data);
      this.userData = data;
     })
  }


  onSubmit(){
    if(this.signupform.valid){
      this.matchData = this.userData.find(user=>  user.email === this.signupform.value.email && user.password === this.signupform.value.password) 
      if(this.signupform.value.email === this.adminEmail && this.signupform.value.password === this.adminPassword){
        alert('login as admin');
        this.router.navigate(['/admin']);
        return;
      }else if(this.matchData){
        alert('login as user'); 
        this.router.navigate(['/user']);
      }else{
        this.verify = !this.verify;
        console.log('no user find please signup');
      }
      this.signupform.reset();
    }
    else{
      console.log('this form is not valid');
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl , FormsModule, FormBuilder , Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupService } from '../services/signup.service'

@Component({
  selector: 'app-signup2',
  templateUrl: './signup2.component.html',
  styleUrls: ['./signup2.component.scss']
})
export class Signup2Component implements OnInit {
  signupform2:FormGroup;

  constructor(private _fb:FormBuilder,private router:Router,private _signup:SignupService) { }

  ngOnInit(): void {
    this.signupform2 = this._fb.group({
      email:['',Validators.compose([Validators.required,Validators.email])],
      password:['',Validators.compose([Validators.required,Validators.minLength(6)])]
    })
  }

  onSubmit(){
    if(this.signupform2.valid){
      console.log(this.signupform2.value);
      this._signup.addUser(this.signupform2.value).subscribe(res => {
        console.log(res);
        alert('signup successfull');
      })
    }
  }
  

}

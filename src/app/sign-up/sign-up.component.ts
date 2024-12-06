import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl , FormsModule, FormBuilder , Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signupform:FormGroup

  constructor(private _fb:FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.signupform = this._fb.group({
      email:['',Validators.compose([Validators.required,Validators.email])],
      password:['',Validators.compose([Validators.required,Validators.minLength(6)])]
    })
  }


  onSubmit(){
    if(this.signupform.valid){
      console.log(this.signupform.value);
      this.router.navigate(['/user']);
    }else{
      console.log('this form is not valid');
    }
  }

}

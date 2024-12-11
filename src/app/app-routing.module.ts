import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserComponent } from './user/user.component';
import { Signup2Component } from './signup2/signup2.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  // {path:'',component:SignUpComponent},
  {path:'signup',component:SignUpComponent},
  {path:'user',component:UserComponent},
  {path:'signup2',component:Signup2Component},
  {path:'admin',component:AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

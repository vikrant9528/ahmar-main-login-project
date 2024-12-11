import { Component, OnInit } from '@angular/core';
import { SignupService } from '../services/signup.service'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  alluser:any[] = [];

  constructor(private _handleapi : SignupService , private route:Router ) { }

  ngOnInit(): void {
    this.getdata();
  }

  getdata(){
    this._handleapi.getLoginDetails().subscribe(res=>{
      this.alluser = res;
    })
  }

  editUser(id:string){
    console.log("edit button is clicked and the id is:",id);
    this.route.navigate(['/edit'], {
      queryParams: {
        id: id
      },
    })
  }
  deleteUser(id:any){
   this._handleapi.deleteuser(id).subscribe(res=>{
    console.log(res,'data deleted succuessfully');
    this.getdata();
   })
  }
}

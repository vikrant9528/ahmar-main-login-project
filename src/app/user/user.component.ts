import { Component, OnInit } from '@angular/core';
import { SignupService } from '../services/signup.service'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  posts:any[] = [];

  constructor(private _getposts:SignupService) { }

  ngOnInit(): void {
    this.getallposts();
  }

  getallposts(){
    this._getposts.getposts().subscribe(res=>{
      this.posts = res.posts;
      console.log(this.posts,'the posts data from api');
    })
  }
}
 
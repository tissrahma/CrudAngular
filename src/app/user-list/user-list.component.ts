import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: any[] = [];
  constructor(private http: HttpClient , private router: Router) { }
 

  userDetail(user: any) {
    
    this.router.navigate(['details-user/'+user._id]);
     }
  

  ngOnInit(): void {
    this.getUsers();
  }
 
  getUsers(): void {
    this.http.get<any[]>('http://localhost:3000/users')
      .subscribe(
        (users: any[]) => {
          this.users = users;
        },
        (error) => {
          console.error('Failed to fetch users:', error);
        }
      );
  }
  
}

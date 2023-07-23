import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  userId!: string;
  user: any = {};
  message: string = '';
  private baseUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      console.log("jjjjjjjjjjjjjjjjjj", params.get("_id"));
      this.userId = params.get('_id') || ''; // 'id' corresponds to the route parameter in the URL
      this.getUserData();
    });
  }

  getUserData() {
    const url = `${this.baseUrl}/${this.userId}`;
    this.http.get(url).subscribe(
      (user) => {
        this.user = user;
      },
      (error) => {
        console.error('Failed to fetch user data.', error);
      }
    );
  }

  onSubmit(user: any) {

    console.log("jjjjjjjjjjjjjjjjjj", user); // Check the value of the user object here
    const url = `${this.baseUrl}/${this.userId}`;
    this.http.put(url, user)
      .subscribe(
        () => {
          this.message = 'User updated successfully!';
        },
        (error) => {
          this.message = 'Failed to update user.';
        }
      );
  }
}

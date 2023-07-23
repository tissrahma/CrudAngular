import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-details-user',
  templateUrl: './details-user.component.html',
  styleUrls: ['./details-user.component.css']
})
export class DetailsUserComponent implements OnInit {
  user: any;
  userId!: string;
  private baseUrl = 'http://localhost:3000/users'; // Replace this with your backend API URL

  constructor(private http: HttpClient, private route: ActivatedRoute , private router: Router) {}
  onUpdate(user: any) {
    this.router.navigate(['update-user/'+user._id]);
     }
     
     onDelete(user: any) {
      const url = `${this.baseUrl}/${user._id}`;
      this.http.delete(url)
        .subscribe(
          () => {
            console.log('User deleted successfully.');
            // Redirect to the user_list component after successful deletion
            this.router.navigate(['/user_list']);
          },
          (error) => {
            console.error('Failed to delete user:', error);
          }
        );
        this.router.navigate(['user-list']);
    }
    
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = params['_id'];
      this.fetchUserDetails();
    });
  }

  fetchUserDetails() {
    const url = `${this.baseUrl}/${this.userId}`;
    this.http.get(url)
      .subscribe(
        (user: any) => {
          this.user = user;
        },
        (error) => {
          console.error('Failed to fetch user:', error);
        }
      );
  }
}

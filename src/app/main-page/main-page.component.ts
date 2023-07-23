import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

interface User {
  id: number;
  FirstName: string;
  LastName: string;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  users: User[] = [
    { id: 1, FirstName: 'John', LastName: 'Doe' },
    { id: 2, FirstName: 'Jane', LastName: 'Smith' },
    { id: 3, FirstName: 'Alice', LastName: 'Johnson' },
    // Add more user data as needed
  ];

  filteredUsers: User[] = [];

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
    // Initialize the filteredUsers with all users initially
    this.filteredUsers = this.users;
  }

  showUsers() {
    this.router.navigate(['user-list']);
  }

  addUser() {
    this.router.navigate(['add-user']);
  }

  updateUsers() {
    // Implement logic to update users (if needed)
  }
Search (name:string){
  
}
  onSearch(searchTerm: string) {
    if (searchTerm.trim() === '') {
      // If the search input is empty, reset the filteredUsers to show all users
      this.filteredUsers = this.users;
    } else {
     
      const url = `http://localhost:3000/users/getUserByName/${searchTerm}`;
      this.http.get<User[]>(url).subscribe(
        (response) => {
          console.log(".......",response)
          this.router.navigate(['details-user/'+response]);
        },
        (error) => {
          console.error('Error while searching:', error);
          this.filteredUsers = [];
        }
      );
    }
  }
}

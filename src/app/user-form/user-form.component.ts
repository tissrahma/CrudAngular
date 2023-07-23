import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-form', 
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  userForm!: FormGroup;
  imageFile: File | null = null;
fileInput: any;

  constructor(private formBuilder: FormBuilder, private http: HttpClient , private router: Router) { }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      FirstName: ['', Validators.required],
      LastName: ['', Validators.required],
      Age: ['', Validators.required],
      Sex: ['', Validators.required],
      Image: ['']
    });
  }

 onFileDropped(event: Event | null) {
  const inputElement = event?.target as HTMLInputElement;
  const fileList: FileList | null = inputElement?.files;
  
  if (fileList && fileList.length > 0) {
    this.imageFile = fileList.item(0);
  } else {
    this.imageFile = null;
  }
}


onSubmit() {
    const formData = new FormData();
    formData.append('FirstName', this.userForm.get('FirstName')!.value);
    formData.append('LastName', this.userForm.get('LastName')!.value);
    formData.append('Age', this.userForm.get('Age')!.value);
    formData.append('Sex', this.userForm.get('Sex')!.value);

    if (this.imageFile) {
      formData.append('Image', this.imageFile);
    }

    this.http.post<any>('http://localhost:3000/users', formData).subscribe(
      (response) => {
        console.log('User added:', response);
        // Handle success, e.g., show a success message
      },
      (error) => {

        console.error('Error adding user:', error);
        // Handle error, e.g., show an error message
      }
    );
    this.router.navigate(['user-list']);
  }
}

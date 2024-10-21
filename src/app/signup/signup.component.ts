import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterModule,Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, CommonModule], // Add CommonModule here
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupForm: FormGroup;
  message: string | undefined;
  isEditProfile: boolean = false;
  isViewProfile: boolean = false;
  userDetails: any;
  constructor(private router: Router, private fb: FormBuilder, private authService: AuthService) {
    debugger
    this.isEditProfile = localStorage.getItem('isEditProfile') == "true" ? true : false;
    this.isViewProfile = localStorage.getItem('isViewProfile') == "true" ? true : false;

    if (this.isEditProfile || this.isViewProfile) {
      const storedUserDetails = localStorage.getItem('userDetails');
      this.userDetails = storedUserDetails ? JSON.parse(storedUserDetails) : undefined;

    }
   
    // Initialize the form with validation rules
    this.signupForm = this.fb.group({
      id: (this.isEditProfile || this.isViewProfile)? [this.userDetails.id] : [''],      
      firstName: (this.isEditProfile || this.isViewProfile) ? [this.userDetails.firstName, Validators.required] : ['', Validators.required],
      lastName: (this.isEditProfile || this.isViewProfile) ? [this.userDetails.lastName, Validators.required] : [''], // Optional field
      email: (this.isEditProfile || this.isViewProfile) ? [this.userDetails.email] : ['', [Validators.required, Validators.email]],
      password: (this.isEditProfile || this.isViewProfile) ? [this.userDetails.password] : ['', [Validators.required, Validators.minLength(6)]], // Password validation
      isRecieveOutbidEmails: (this.isEditProfile || this.isViewProfile) ? [this.userDetails.isRecieveOutbidEmails] : [false]
    });
  }

  // Submit method
  onSubmit() {
    if (this.signupForm.valid) {
      if (this.isEditProfile) {
      
        this.authService.update(this.signupForm.value).pipe(
          catchError((error) => {
            this.message = "Updation failed. Please try again.";           
            return of(null); 
          })
        ).subscribe({
          next: (response) => {
            if (response) {   
              this.userDetails.firstName=this.signupForm.get('firstName')?.value;
              this.userDetails.lastName=this.signupForm.get('lastName')?.value;
              this.userDetails.isRecieveOutbidEmails=this.signupForm.get('isRecieveOutbidEmails')?.value;       
              localStorage.setItem('userDetails',JSON.stringify(this.userDetails));                        
              this.router.navigate(['/app-signed-up-successfully']); 
            }
          },
          error: (error) => {
            console.error("Registration error", error);
            this.message = "An unexpected error occurred."; 
          }
       });
      }
      else {
        this.authService.register(this.signupForm.value).pipe(
          catchError((error) => {
            this.message = "Registration failed. Please try again."; 
            console.error("Registration failed", error);
            return of(null); 
          })
        ).subscribe({
          next: (response) => {
            if (response) {
              console.log("Registration successful", response);
              this.router.navigate(['/app-signed-up-successfully']); // Navigate on success
            }
          },
          error: (error) => {
            console.error("Registration error", error);
            this.message = "An unexpected error occurred."; // Display error message
          }
        });
      }
    } else {
      console.log("Form is invalid. Please check the fields.");
      this.message = "Please fill in all fields correctly.";
    }

  }
}

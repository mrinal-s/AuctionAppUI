import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../services/auth.service'; 
import { FormsModule } from '@angular/forms'; 
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  credentials = { email: '', password: '' };
  isError = false; 

  constructor(private authService: AuthService, private router: Router) {
    localStorage.removeItem('isEditProfile');
    localStorage.removeItem('isViewProfile');
    localStorage.removeItem('authToken');
    localStorage.removeItem('userDetails');
  }

  login(): void {
    this.authService.login(this.credentials).subscribe({
      next: (response) => {
        console.log('Login successful');
        this.router.navigate(['/app-auction-list']);
        this.isError = false;
      },
      error: (error) => {
        console.error('Login failed', error);
        this.isError = true; 
      },
      complete: () => {
        console.log('Login request completed');        
      }
    });
  }
}

import { Component,HostListener } from '@angular/core';
import { RouterModule } from '@angular/router'; 
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; // Import CommonModule
import {AuthService} from '../services/auth.service';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule,CommonModule], // Add RouterModule here
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'] // Corrected the property name to styleUrls
})
export class HeaderComponent {
    isDropdownOpen = false;
    isUserLoggedIn = localStorage.getItem('authToken') ? true : false;
    constructor(private router: Router,private authService : AuthService) {}
   
    toggleDropdown() {
        this.isDropdownOpen = !this.isDropdownOpen;
    }
    navigateToLogin() {
        this.authService.logout();
        this.router.navigate(['/app-dashboard']);
        
    }
    editProfile() {
        debugger
        localStorage.setItem('isEditProfile',"true");
        this.router.navigate(['/app-signup']);        
    }
    viewProfile() {
        debugger
        localStorage.setItem('isViewProfile',"true");
        this.router.navigate(['/app-signup']);        
    }
    // Close the dropdown if the user clicks outside of it
    @HostListener('document:click', ['$event'])
    onDocumentClick(event: MouseEvent) {
        const target = event.target as HTMLElement;
        if (!target.closest('.profile')) {
            this.isDropdownOpen = false;
        }
    }
}

// auction-list.component.ts
import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';


@Component({
    selector: 'app-auction-list',
    templateUrl: './auction-list.component.html',
    styleUrls: ['./auction-list.component.css']
    
})
export class AuctionListComponent implements OnInit{
    isAuthenticated = false;
    userDetails: any;
  userName:string='';
      
    
    constructor(private router: Router,private authService: AuthService) {}
    ngOnInit(): void {
        debugger
        this.isAuthenticated = this.authService.isAuthenticated(); 
        if(!this.isAuthenticated)
            {
                this.router.navigate(['/app-login']);
            }
            const storedUserDetails = localStorage.getItem('userDetails');
      this.userDetails = storedUserDetails ? JSON.parse(storedUserDetails) : undefined;
      this.userName =  this.userDetails.firstName+" "+ this.userDetails.lastName;
      }
    openAuctionDetail(name: string, minBid: number, currentBid: number, expiry: string,image:string) {
        
        this.router.navigate(['/app-auction-details'], {
            queryParams: {
                name: encodeURIComponent(name),
                minBid: minBid,
                currentBid: currentBid,
                expiry: encodeURIComponent(expiry),
                image:encodeURIComponent(image)
            }
        });
    }
}

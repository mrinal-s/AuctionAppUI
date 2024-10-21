import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { HeaderComponent } from '../../header/header.component';

@Component({    
    selector: 'app-auction-details',
    standalone:true,
    templateUrl: './auction-details.component.html',
    styleUrls: ['./auction-details.component.css'],
    imports:[HeaderComponent]
    
})
export class AuctionDetailsComponent implements OnInit {
    auctionName: string = '';
    minBid: number = 0;
    currentBid: number = 0;
    expiry: string = '';
    image:string='';
    isAuthenticated = false;
    constructor(private route: ActivatedRoute,private router: Router,private authService: AuthService) {}

    ngOnInit(): void {
        this.isAuthenticated = this.authService.isAuthenticated(); 
        if(!this.isAuthenticated)
            {
                this.router.navigate(['/app-login']);
            }
        this.route.queryParams.subscribe({
            next: (params) => {                
                this.auctionName = params['name'] ? decodeURIComponent(params['name']) : '';
                this.minBid = params['minBid'] ? +params['minBid'] : 0;
                this.currentBid = params['currentBid'] ? +params['currentBid'] : 0;
                this.expiry = params['expiry'] ? decodeURIComponent(params['expiry']) : '';
                this.image = params['image'] ? decodeURIComponent(params['image']) : '';
            },
            error: (err) => {
                console.error('Failed to parse query parameters:', err);
            },
            complete: () => {
                console.log('Query parameters parsing completed');
            }
        });
    }
}

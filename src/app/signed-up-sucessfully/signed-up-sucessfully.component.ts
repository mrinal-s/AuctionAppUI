import { Component } from '@angular/core';
import { RouterModule,Router } from '@angular/router';
import {AuctionListComponent} from '../auctions/auction-list/auction-list.component'
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-signed-up-sucessfully',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './signed-up-sucessfully.component.html',
  styleUrl: './signed-up-sucessfully.component.css'
})
export class SignedUpSucessfullyComponent {
 
  isEditProfile: boolean = false;  
  constructor(private router : Router) {
    this.isEditProfile = localStorage.getItem('isEditProfile') == "true" ? true : false;
  }
  navigateToAuctionsPage()
  {
    this.router.navigate(['/app-auction-list']);
  }
}

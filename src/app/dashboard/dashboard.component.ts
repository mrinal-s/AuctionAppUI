import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component'; // Adjust path as needed
import { HeroComponent } from '../hero/hero.component';       // Adjust path as needed
import { AuctionsComponent } from '../auctions/auctions.component'; // Adjust path as needed

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  standalone: true,
  imports: [HeaderComponent, HeroComponent, AuctionsComponent] // Include your components here
})
export class DashboardComponent {}

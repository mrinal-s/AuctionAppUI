import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignupComponent } from './signup/signup.component';
import { SignedUpSucessfullyComponent } from './signed-up-sucessfully/signed-up-sucessfully.component'; 
import { AuctionsComponent } from './auctions/auctions.component'; 
import { AuctionListComponent } from './auctions/auction-list/auction-list.component'; 
import { AuctionDetailsComponent } from './auctions/auction-details/auction-details.component';
import { HeaderComponent } from './header/header.component';
export const routes: Routes = [
  { path: 'app-dashboard', component: DashboardComponent },
  { path: 'app-login', component: LoginComponent },
  { path: 'app-signup', component: SignupComponent },
  { path: 'app-signed-up-successfully', component: SignedUpSucessfullyComponent }, 
  { path: 'app-auctions', component: AuctionsComponent }, 
  { path: 'app-auction-details', component: AuctionDetailsComponent }, 
  { path: 'app-auction-list', component: AuctionListComponent }, 
  { path: 'app-header', component: HeaderComponent }, 
  { path: '', redirectTo: 'app-dashboard', pathMatch: 'full' }
];



@NgModule({
  declarations: [
     // Declare HeaderComponent
    AuctionListComponent
  ],
  imports: [
    RouterModule,
    HeaderComponent
  ],
  providers: [],

})
export class AppRoutingModule {}

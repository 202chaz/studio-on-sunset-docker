import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { AccountComponent } from './account/account.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { MyTicketsComponent } from './my-tickets/my-tickets.component';
import { PastShowsComponent } from './past-shows/past-shows.component';
import { HomeComponent } from './home/home.component';
import { LiveNowComponent } from './live-now/live-now.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ReplayStoreComponent } from './replay-store/replay-store.component';
import { PurchaseReplayComponent } from './purchase-replay/purchase-replay.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'account',
    component: AccountComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'checkout', component: CheckoutComponent },
      { path: 'my-tickets', component: MyTicketsComponent },
      { path: 'past-shows', component: PastShowsComponent },
      { path: 'live-now', component: LiveNowComponent },
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'replay-store', component: ReplayStoreComponent },
  { path: 'purchase-replay', component: PurchaseReplayComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

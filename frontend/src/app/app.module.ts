import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './config/api.service';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AccountComponent } from './account/account.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ProfileComponent } from './profile/profile.component';
import { MyTicketsComponent } from './my-tickets/my-tickets.component';
import { PastShowsComponent } from './past-shows/past-shows.component';
import { LiveNowComponent } from './live-now/live-now.component';
import { ReplayStoreComponent } from './replay-store/replay-store.component';
import { PurchaseReplayComponent } from './purchase-replay/purchase-replay.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    AccountComponent,
    CheckoutComponent,
    OrderDetailsComponent,
    GalleryComponent,
    ProfileComponent,
    MyTicketsComponent,
    PastShowsComponent,
    LiveNowComponent,
    ReplayStoreComponent,
    PurchaseReplayComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxUsefulSwiperModule,
    ReactiveFormsModule,
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

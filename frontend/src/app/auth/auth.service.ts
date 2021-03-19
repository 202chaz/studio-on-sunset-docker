import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ApiService } from '../config/api.service';
import { AssetService } from '../config/asset.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;
  user: any;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  constructor(private api: ApiService, private router: Router, private assetService: AssetService) {
    // Checks for presense of toekn to navigate to protected route
    const jwt = localStorage.getItem('sos-token');
    const token = JSON.parse(jwt);

    if (token && token.jwt && token.user) {
      this.isLoggedIn = true;
      this.user = token.user;
    }
  }

  login(options) {
    this.api.getUser(options)
      .subscribe(
        data => {
          if (data['jwt']) {
            localStorage.setItem('sos-token', JSON.stringify(data));
            this.isLoggedIn = true;
            this.assetService.setUserStatus(data);

            this.router.navigate(['/']);
            // Displays nav once login is complete
            const nav = document.getElementById('nav');
            nav.style.display = '';
          }
        }
      );
  }

  registerUser(options) {
    this.api.registerUser(options)
      .subscribe(
        data => {
          if (data['jwt']) {
            localStorage.setItem('sos-token', JSON.stringify(data));
            this.isLoggedIn = true;
            this.assetService.setUserStatus(data);
            this.router.navigate(['/']);
            // Displays nav once login is complete
            const nav = document.getElementById('nav');
            nav.style.display = '';
          }
        }
      );
  }

  logout(): void {
    this.isLoggedIn = false;
    localStorage.removeItem('sos-token');
    this.assetService.setUserStatus('');
  }
}

import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { AssetService } from '../../config/asset.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  currentUser: any;
  isAuthenticated: boolean;
  @ViewChild('dropNav') userNav: ElementRef;

  constructor(private authService: AuthService, private assetService: AssetService) {
    this.assetService.getUserStatus().subscribe(
      data => {
        if (data.user) {
          this.isAuthenticated = true;
          this.currentUser = data.user.user;
        } else {
          this.isAuthenticated = false;
        }
      }
    );
  }

  ngOnInit(): void {
    this.isAuthenticated = this.authService.isLoggedIn;
    this.currentUser = this.authService.user;
  }

  showMenu() {
    const dropnav = this.userNav.nativeElement;
    dropnav.style.opacity = '1';
    dropnav.style.transition = 'opacity 1s ease';
    dropnav.style.visibility = 'visible';
  }

  closeMenu() {
    const dropnav = this.userNav.nativeElement;
    dropnav.style.opacity = '0';
    dropnav.style.transition = 'opacity 1s ease';
    dropnav.style.visibility = 'hidden';
  }

  logout() {
    this.authService.logout();
  }
}

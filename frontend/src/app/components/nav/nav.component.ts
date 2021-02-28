import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  currentUser: any;
    isAuthenticated: boolean;
    @ViewChild('dropNav') userNav: ElementRef;

    constructor() {

    }

    ngOnInit(): void {

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

    }
}

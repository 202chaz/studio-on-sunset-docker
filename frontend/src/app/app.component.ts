import { Component, ElementRef, ViewChild, HostListener } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';
import { AssetService } from './config/asset.service';
import { environment } from './../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public currentUrl: any;
  public backgroundUrl: any;
  @ViewChild('container') container: ElementRef;

  constructor(private router: Router, private assetService: AssetService) {
    this.assetService.getAsset().subscribe(
      data => this.backgroundUrl = `${environment.api}${data.asset.artists[0].backgroundImage.url}`
    );
  }

  onWindowScroll(event) {
    const nav = document.getElementById('nav');
    if (window.pageYOffset > 0) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }

  setBG() {
    if (this.backgroundUrl) {
      return `linear-gradient(180deg,#1a203011 -8%,#00000000 13%,#1a2030 55%), url(${this.backgroundUrl})`;
    }
  }
}

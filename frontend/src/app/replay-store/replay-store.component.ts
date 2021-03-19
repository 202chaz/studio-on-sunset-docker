import { Component, OnInit } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';

@Component({
  selector: 'app-replay-store',
  templateUrl: './replay-store.component.html',
  styleUrls: ['./replay-store.component.scss']
})
export class ReplayStoreComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  purchaseReplay() {
    this.router.navigate(['/purchase-replay']);
  }

}

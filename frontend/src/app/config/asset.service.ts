import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssetService {
  private subject = new Subject<any>();
  private userStatus = new Subject<any>();
  private cartItems = new Subject<any>();

  constructor() { }

  setAsset(asset: any) {
    this.subject.next({ asset });
  }

  setUserStatus(user: any) {
    this.userStatus.next({ user });
  }

  setCartItems(items: any) {
    this.cartItems.next({ items })
  }

  getAsset(): Observable<any> {
    return this.subject.asObservable();
  }

  getUserStatus(): Observable<any> {
    return this.userStatus.asObservable();
  }

  getCartItems(): Observable<any> {
    return this.cartItems.asObservable();
  }
}

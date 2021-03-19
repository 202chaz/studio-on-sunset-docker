import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable()
export class ApiService {
  private url: string;

  constructor(private http: HttpClient) {
    this.url = environment.api;
  }

  getArtists() {
    return this.http.get(`${this.url}/artists`);
  }

  getEvents() {
    return this.http.get(`${this.url}/events`);
  }

  getUser(options) {
    return this.http.post(`${this.url}/auth/local`, options);
  }

  getTickets() {
    return this.http.get(`${this.url}/tickets`);
  }

  getItems() {
    return this.http.get(`${this.url}/items`);
  }

  registerUser(options) {
    return this.http.post(`${this.url}/auth/local/register`, options);
  }

  getFloatRates() {
    // http://www.floatrates.com/daily/usd.json
    return this.http.get('http://www.floatrates.com/daily/usd.json');
  }

  getCommonCurrency() {
    // https://gist.githubusercontent.com/Fluidbyte/2973986/raw/8bb35718d0c90fdacb388961c98b8d56abc392c9/Common-Currency.json
    return this.http.get('https://gist.githubusercontent.com/Fluidbyte/2973986/raw/8bb35718d0c90fdacb388961c98b8d56abc392c9/Common-Currency.json');
  }
}

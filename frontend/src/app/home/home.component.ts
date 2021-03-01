import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SwiperOptions } from 'swiper';
import { ApiService } from '../config/api.service';
import { AssetService } from '../config/asset.service';
import * as moment from 'moment';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('homebox') homebox: ElementRef;
  @ViewChild('ticketModalContainer') modal: ElementRef;
  @ViewChild('header') header: ElementRef;
  @ViewChild('upcoming') upcoming: ElementRef;

  public selectedArtist: any;
  public artists: any;
  public events: any;
  public main: any;
  public showInfo: boolean;
  public ticketTypes: any;
  public ticketData: any;
  public merchData: any;
  public availableTickets: any;
  public availableMerchandise: any;
  public selectedTicket: any;
  public selectedItems = [];
  public showDate: any;
  public qty = [0, 1, 2, 3, 4];
  mobileView: boolean;

  config: SwiperOptions = {
    autoHeight: true,
    loop: true,
    mousewheel: {
      releaseOnEdges: true
    },
    freeMode: true,
    breakpoints: {
      3440: {
        slidesPerView: 13.4,
        spaceBetween: -50
      },
      2560: {
        slidesPerView: 9,
        spaceBetween: -50
      },
      1950: {
        slidesPerView: 6.6,
        spaceBetween: -40
      },
      1920: {
        slidesPerView: 6.8,
        spaceBetween: -50
      },
      1500: {
        slidesPerView: 6.8,
        spaceBetween: -50
      },
      1450: {
        slidesPerView: 7.05,
        spaceBetween: -10
      },
      1440: {
        slidesPerView: 7.05,
        spaceBetween: -10
      },
      1367: {
        slidesPerView: 7.05,
        spaceBetween: -10
      },
      1024: {
        slidesPerView: 7.05,
        spaceBetween: -10
      },
      768: {
        slidesPerView: 7.05,
        spaceBetween: -10
      },

      501: {
        slidesPerView: 7.05,
        spaceBetween: -10
      },
      500: {
        slidesPerView: 2.4,
        spaceBetween: -10
      },
      400: {
        slidesPerView: 2,
        spaceBetween: 10
      }
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    spaceBetween: 40
  };

  constructor(private api: ApiService, private assetService: AssetService) {
    this.mobileView = true;
    this.getEvents();
  }

  getEvents() {
    this.api.getEvents().subscribe(
      data => {
        this.events = data;
        this.main = this.events[0];
        this.assetService.setAsset(this.main);
      }
    );
  }

  getTickets(): any {
    const state = false;
    this.showInfo = !state;
  }

  getCover(url) {
    return `${environment.api}${url}`;
  }

  getEventDate(event) {
    if (event) {
      return `${moment(event.date).format('D MMM YYYY, ddd')} ${this.getTime(event.time)} EST`;
    }
  }

  getTime(time) {
    if (time) {
      return moment(time, 'HH:mm:ss').format('h A');
    }
  }

  getShortEventDate(event) {
    if (event) {
      return `${moment(event.date).format('DD MMM YYYY')} ${this.getTime(event.time)} EST`;
    }
  }

  getDay(event) {
    if (event) {
      return moment(event.date).format('DD');
    }
  }

  getEventTitle(events) {
    if (events) {
      const title = events[0].title;
      return title;
    }
  }

  headlineDate(event) {
    if (event) {
      return `${moment(event.date).format('MMM YYYY ddd')} ${this.getTime(event.time)} EST`;
    }
  }

  setMainAct(artist) {
    this.main = artist;
    this.assetService.setAsset(this.main);
  }

  checkoutAct(act) {
    localStorage.setItem('act', JSON.stringify(act));
  }

  ngOnInit(): void {
    this.getAllTickets()
    this.getItems();
  }

  ngAfterViewInit() {}

  onResize(event) {
    // event.target.innerWidth;
    if (window.innerWidth <= 425) {
      this.mobileView = false;
    } else {
      this.mobileView = true;
    }
  }

  getItems() {
    this.api.getItems().subscribe(
      data => {
        this.merchData = data;
        const merchs = [];
        if (this.main && this.main.merch_store) {
          this.main.merch_store.items.map(item => {
            this.merchData.map(m => {
              if (m.id === item) {
                merchs.push(m)
              }
            })
          });
          this.availableMerchandise = merchs.sort((a, b) => a.type.localeCompare(b.type));
        }
      }
    )
  }

  getAllTickets() {
    this.api.getTickets().subscribe(
      data => {
        this.ticketData = data;
        const tickets = [];
        if (this.main && this.main.ticket_store) {
          this.main.ticket_store.tickets.map(ticket => {
            this.ticketData.map(t => {
              if (t.id === ticket) {
                tickets.push(t)
              }
            })
          });
          this.availableTickets = tickets.sort((a, b) => a.name.localeCompare(b.name));
          this.selectedTicket = this.availableTickets.find((t) => t.name === 'Basic Stream');
        }
      }
    );
  }

  getTicketVal() {
    if (this.selectedTicket) {
      return this.selectedTicket.id;
    }
  }

  getImage(item) {
    if (item.photo) {
      return `${environment.api}${item.photo.url}`;
    }
  }

  setTicket(ticketId) {
    const ticket = this.availableTickets.find((t) => t.id === ticketId);
    this.selectedTicket = ticket;
    this.calculateTotals();
  }

  setItem(select, item) {
    const value = select.value;
    const itemData = item;
    if (value > 0) {
      const items = this.selectedItems.map((i, index) => {
        if (i.item.id === item.id) {
          this.selectedItems.splice(0, 1);
        }
      });
      this.selectedItems.push({item, quantity: value, amount: item.price * value})
    } else {
      const query = this.selectedItems.map((i, index) => {
        if (i.item.id === item.id) {
          this.selectedItems.splice(index, 1);
        }
      })
    }
    this.assetService.setCartItems(this.selectedItems);
    this.calculateTotals();
  }

  showModal() {
    const modal = this.modal.nativeElement;
    const header = this.header.nativeElement;
    const upcoming = this.upcoming.nativeElement;
    modal.style.visibility = 'visible';
    header.style.visibility = 'hidden';
    upcoming.style.visibility = 'hidden';
  }

  calculateTotals() {
    if (this.selectedTicket) {
      const merchTotals = this.selectedItems.reduce((a, b) => {
        return a + b.amount;
      }, 0);
      const salesTotal = this.selectedTicket.price + merchTotals;
      return salesTotal;
    }

  }
}

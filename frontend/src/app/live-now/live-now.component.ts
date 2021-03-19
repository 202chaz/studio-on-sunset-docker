import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-live-now',
  templateUrl: './live-now.component.html',
  styleUrls: ['./live-now.component.scss']
})
export class LiveNowComponent implements OnInit {
  @ViewChild('Merch') merchDiv: ElementRef;
  @ViewChild('ShowInfo') infoDiv: ElementRef;
  @ViewChild('Bio') bioDiv: ElementRef;
  @ViewChild('merchTab') merchTab: ElementRef;
  @ViewChild('chatTab') chatTab: ElementRef;
  @ViewChild('roomsTab') roomsTab: ElementRef;
  @ViewChild('cartTab') cartTab: ElementRef;
  constructor() { }

  ngOnInit(): void {}

  tabSelector(event, category, index) {
    const merch = this.merchDiv.nativeElement;
    const info = this.infoDiv.nativeElement;
    const bio = this.bioDiv.nativeElement;

    switch (category) {
      case 'Merch':
        merch.style.display = 'flex';
        info.style.display = 'none';
        bio.style.display = 'none';
        break;
      case 'ShowInfo':
        merch.style.display = 'none';
        bio.style.display = 'none';
        info.style.display = 'flex';
        break;
      case 'Bio':
        bio.style.display = 'flex';
        info.style.display = 'none';
        merch.style.display = 'none';
        break;
    }
  }

  setTab(type) {
    console.log(type);
    const merchBtn = document.querySelector('.merch-btn');
    const merchIcon = document.querySelector('.merch-btn img');

    const chatBtn = document.querySelector('.chat');
    const chatIcon = document.querySelector('.chat img');

    const groupBtn = document.querySelector('.group');
    const groupIcon = document.querySelector('.group img');

    const cartBtn = document.querySelector('.cart');
    const cartIcon = document.querySelector('.cart img');

    const merchTab = this.merchTab.nativeElement;
    const chatTab = this.chatTab.nativeElement;
    const groupTab = this.roomsTab.nativeElement;
    const cartTab = this.cartTab.nativeElement;

    switch (type) {
      case 'rooms':
        merchBtn.classList.remove('active');
        merchIcon.setAttribute('src', '../assets/grey-shop.svg');
        merchTab.style.display = 'none';

        groupBtn.classList.add('active');
        groupIcon.setAttribute('src', '../assets/red-group.svg');
        groupTab.style.display = 'revert';

        chatBtn.classList.remove('active');
        chatIcon.setAttribute('src', '../assets/grey-chat.svg');
        chatTab.style.display = 'none';

        cartBtn.classList.remove('active');
        cartIcon.setAttribute('src', '../assets/grey-cart.svg');
        cartTab.style.display = 'none';
        break;
      case 'cart':
        merchBtn.classList.remove('active');
        merchIcon.setAttribute('src', '../assets/grey-shop.svg');
        merchTab.style.display = 'none';

        cartBtn.classList.add('active');
        cartIcon.setAttribute('src', '../assets/red-cart.svg');
        cartTab.style.display = 'revert';

        chatBtn.classList.remove('active');
        chatIcon.setAttribute('src', '../assets/grey-chat.svg');
        chatTab.style.display = 'none';

        groupBtn.classList.remove('active');
        groupIcon.setAttribute('src', '../assets/grey-group.svg');
        groupTab.style.display = 'none';
        break;
      case 'merch':
        merchBtn.classList.add('active');
        merchIcon.setAttribute('src', '../assets/red-shop.svg');
        merchTab.style.display = 'revert';

        chatBtn.classList.remove('active');
        chatIcon.setAttribute('src', '../assets/grey-chat.svg');
        chatTab.style.display = 'none';

        groupBtn.classList.remove('active');
        groupIcon.setAttribute('src', '../assets/grey-group.svg');
        groupTab.style.display = 'none';

        cartBtn.classList.remove('active');
        cartIcon.setAttribute('src', '../assets/grey-cart.svg');
        cartTab.style.display = 'none';
        break;
      case 'chat':
        merchBtn.classList.remove('active');
        merchIcon.setAttribute('src', '../assets/grey-shop.svg');
        merchTab.style.display = 'none';

        chatBtn.classList.add('active');
        chatIcon.setAttribute('src', '../assets/red-chat.svg');
        chatTab.style.display = 'revert';

        groupBtn.classList.remove('active');
        groupIcon.setAttribute('src', '../assets/grey-group.svg');
        groupTab.style.display = 'none';

        cartBtn.classList.remove('active');
        cartIcon.setAttribute('src', '../assets/grey-cart.svg');
        cartTab.style.display = 'none';
        break;
    }
  }

}

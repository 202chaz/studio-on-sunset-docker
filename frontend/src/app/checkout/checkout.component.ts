import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  @ViewChild('phoneInput') phoneInput: ElementRef;
  @ViewChild('billingDetails') billing: ElementRef;
  @ViewChild('agree') agreeCheckbox: ElementRef;
  status: boolean = false;
  standard: boolean;
  express: boolean;
  step = 0;

  phoneOptions = {
    phone: true,
    phoneRegionCode: 'US'
  };

  shippingForm = this.fb.group({
    fullName: ['', Validators.required],
    phoneNumber: ['', Validators.required],
    address1: ['', Validators.required],
    address2: [''],
    country: ['', Validators.required],
    state: ['', Validators.required],
    city: ['', Validators.required],
    zip: ['', Validators.required],
    saveDetails: [''],
    shippingMethod: ['', Validators.required]
  });

  billingDetailsForm = this.fb.group({
    nameOnCard: ['', Validators.required],
    cardNumber: ['', Validators.required],
    validUntil: ['', Validators.required],
    cvv: ['', Validators.required],
    zipCode: ['', Validators.required],
    saveCard: [''],
    fullName: ['', Validators.required],
    phoneNumber: ['', Validators.required],
    address1: ['', Validators.required],
    address2: [''],
    country: ['', Validators.required],
    state: ['', Validators.required],
    city: ['', Validators.required],
    zip: ['', Validators.required],
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.shippingForm.controls['shippingMethod'].setValue('standard');
    this.standard = true;
  }

  clickEvent(type){
    if (type === 'standard') {
      this.standard = true;
      this.express = false;
      this.shippingForm.controls['shippingMethod'].setValue('standard');
    } else {
      this.standard = false;
      this.express = true;
      this.shippingForm.controls['shippingMethod'].setValue('express')
    }
  }

  nextStep() {
    this.step = this.step += 1;
  }

  hideBilling() {
    if (this.agreeCheckbox.nativeElement.checked) {
      this.billing.nativeElement.style.display = 'none';
    } else {
      this.billing.nativeElement.style.display = 'inherit';
    }
  }

}

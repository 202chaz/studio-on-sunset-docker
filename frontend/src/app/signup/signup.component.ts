import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  step: number;
  validEmail: boolean;
  validUsername: boolean;
  @ViewChild('agreeBtn') agreeBtn: ElementRef;
  @ViewChild('step2Btn') step2Btn: ElementRef;
  @ViewChild('submitBtn') submitBtn: ElementRef;

  signUpForm = this.fb.group({
    email: ['', [Validators.required, Validators.minLength(10)]],
    username: ['', [Validators.required, Validators.minLength(4)]],
    password: ['', [Validators.required, Validators.minLength(8)]]
  });

  constructor(private fb: FormBuilder, private authService: AuthService) { }

  ngOnInit(): void {
    const nav = document.getElementById('nav');
    nav.style.display = 'none';
    this.step = 0;
  }

  onChange() {
    // Enables first step
    if (this.agreeBtn && this.signUpForm.value.email && this.signUpForm.value.email.length >= 10) {
      this.validEmail = true;
      const button = this.agreeBtn.nativeElement;
      button.style.background = 'linear-gradient(98deg, #ffd83b 0%, #ffa43b 100%)';
    } else if (this.agreeBtn) {
      this.validEmail = false;
      const button = this.agreeBtn.nativeElement;
      button.style.background = '#7a848b';
    }
    // Enables second step
    if (this.step2Btn && this.signUpForm.value.username && this.signUpForm.value.username.length >= 4) {
      this.validUsername = true;
      const button = this.step2Btn.nativeElement;
      button.style.background = 'linear-gradient(98deg, #ffd83b 0%, #ffa43b 100%)';
    } else if (this.step2Btn) {
      this.validUsername = false;
      const button = this.step2Btn.nativeElement;
      button.style.background = '#7a848b';
    }
    // Enables last step
    if (this.submitBtn && this.signUpForm.status === 'VALID') {
      const button = this.submitBtn.nativeElement;
      button.style.background = 'linear-gradient(98deg, #ffd83b 0%, #ffa43b 100%)';
    } else if (this.submitBtn) {
      const button = this.submitBtn.nativeElement;
      button.style.background = '#7a848b';
    }
  }

  incrementStep() {
    this.step = this.step += 1;
  }

  prevPage() {
    window.history.back();
  }

  onSubmit() {
    this.authService.registerUser(this.signUpForm.value);
  }
}

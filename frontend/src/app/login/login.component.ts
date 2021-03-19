import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  showPasswordField: boolean;
  @ViewChild('password') password: ElementRef;
  @ViewChild('email') email: ElementRef;
  @ViewChild('ctnBtn') continueButton: ElementRef;

  loginForm = this.fb.group({
    identifier: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private authService: AuthService) { }

  ngOnInit() {
    const nav = document.getElementById('nav');
    nav.style.display = 'none';
  }

  val() {
    this.showPasswordField = true;
    const password = this.password ? this.password.nativeElement : '';
    const email = this.email.nativeElement;
    password ? password.style.display = 'inherit' : null;
    const continueButton = this.continueButton.nativeElement;

    if (email.value.length > 0 && this.loginForm.status === 'VALID') {
      continueButton.style.background = 'linear-gradient(98deg, #ffd83b 0%, #ffa43b 100%)';
    }
  }

  onSubmit() {
    this.authService.login(this.loginForm.value);
  }

  prevPage() {
    window.history.back();
  }

}

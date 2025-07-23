import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.html',
  styleUrl: './login.css',
  imports: [FormsModule]
})
export class Login {
  username = '';
  password = '';
  errorMessage = '';
  shakeButton = false;

  constructor(private auth: AuthService, private router: Router) {}

  login() {
    const success = this.auth.login(this.username, this.password);
    if (success) {
      this.router.navigate(['/dashboard']);
    } else {
      this.errorMessage = 'Incorrect password!';
      this.shakeButton = false;
      setTimeout(() => {
        this.shakeButton = true;
        setTimeout(() => this.shakeButton = false, 500);
      }, 10);
    }
  }

  closeModal() {
    this.errorMessage = '';
  }
}

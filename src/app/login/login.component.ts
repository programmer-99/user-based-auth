import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  constructor(private authService: AuthService ,  private router: Router) { }

  ngOnInit(): void {
  }
  login(): void {
    if (this.authService.login(this.username, this.password)) {
      // Redirect to dashboard based on user role
      if (this.authService.getCurrentUserRole() === 'admin') {
        this.router.navigateByUrl('/dashboard');
      } else {
        // Redirect user to appropriate page for regular user
        // For now, let's redirect to dashboard as well
        this.router.navigateByUrl('/dashboard');
      }
    } else {
      // Login failed, display error message or handle accordingly
      console.log('Login failed');
    }
  }

}

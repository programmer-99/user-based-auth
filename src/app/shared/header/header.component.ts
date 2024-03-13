// shared/header/header.component.ts
import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(public authService: AuthService, private router: Router) { }

  logout(): void {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }
  redirectToUniversity(): void {
    this.router.navigateByUrl('/university');
  }
}

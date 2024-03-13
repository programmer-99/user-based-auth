import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  welcomeMessage: string='';

  constructor(private authService: AuthService , private router: Router) { }

  ngOnInit(): void {
    const lastLoggedInTime = localStorage.getItem('lastLoggedInTime');
    if (lastLoggedInTime) {
      const currentTime = new Date();
      const minutesDifference = Math.round((currentTime.getTime() - new Date(lastLoggedInTime).getTime()) / 60000);
      const userRole = this.authService.getCurrentUserRole();
      this.welcomeMessage = `Welcome ${userRole === 'admin' ? 'super ' : ''}${userRole} after ${minutesDifference} minutes.`;
    } else {
      
      // const currentTime = new Date();
      // const minutesDifference = Math.round((currentTime.getTime() - new Date(lastLoggedInTime).getTime()) / 60000);

      const userRole = this.authService.getCurrentUserRole();
      this.welcomeMessage = `Welcome ${userRole === 'admin' ? 'super ' : ''}${userRole} `;
    }
  }
  logout(): void {
    this.authService.logout();
    // Redirect to login page after logout
    this.router.navigateByUrl('/login');
  }
  redirectToUniversity(): void {
    this.router.navigateByUrl('/university');
  }
}

// university.component.ts
import { Component, OnInit } from '@angular/core';
import { UniversityService } from '../university.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-university',
  templateUrl: './university.component.html',
  styleUrls: ['./university.component.css']
})
export class UniversityComponent implements OnInit {
  universities: any[]=[];
  searchTerm: string='';
  selectedUniversity: any = null;
  newUniversity: any = {name: ''};
  showAddForm: boolean = false;

  constructor(private universityService: UniversityService, private authService: AuthService) { }

  ngOnInit(): void {
    this.fetchUniversities();
  }

  fetchUniversities(): void {
    this.universityService.getUniversities().subscribe((data: any[]) => {
      this.universities = data;
    });
  }

  deleteUniversity(university: any): void {
    // Check if user is admin before performing delete action
    if (this.isAdmin()) {
      const index = this.universities.indexOf(university);
      if (index !== -1) {
        this.universities.splice(index, 1);
      }
    }
  }

  editUniversity(university: any): void {
    // Check if user is admin before performing edit action
    if (this.isAdmin()) {
      // Assign the selected university to enable editing
      this.selectedUniversity = university;
    }
  }

  updateUniversity(): void {
    // Check if user is admin before performing update action
    if (this.isAdmin() && this.selectedUniversity) {
      // Call a service method to update the university details
      // For demonstration purposes, we'll just log the updated university object
      console.log('Updated University:', this.selectedUniversity);
      // Clear the selectedUniversity object after editing
      this.selectedUniversity = null;
    }
  }
  addUniversity(): void {
    // Add the new university to the list
    this.universities.push(this.newUniversity);
    // Reset the newUniversity object and hide the add form
    this.selectedUniversity = this.newUniversity
  }

  openAddUniversityForm(): void {
    // Reset the newUniversity object and show the add form
    this.newUniversity = {};
    this.showAddForm = true;
  }
  navigateToWebsite(websiteUrl: string): void {
    window.open(websiteUrl, '_blank');
  }

  isAdmin(): boolean {
    return this.authService.getCurrentUserRole() === 'admin';
  }
}

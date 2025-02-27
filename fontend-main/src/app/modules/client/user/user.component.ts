import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit{

  constructor(private router: Router){}

  ngOnInit(): void {
    // this.router.navigate(['/ggcos/profile/me']);
  }
  activeLink: string = '';


  setActiveLink(linkName: string): void {
    this.activeLink = linkName;
  }
}

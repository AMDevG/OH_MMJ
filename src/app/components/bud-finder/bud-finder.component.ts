import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bud-finder',
  templateUrl: './bud-finder.component.html',
  styleUrls: ['./bud-finder.component.css']
})
export class BudFinderComponent implements OnInit {

  title = 'Flower Finder'
  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

}

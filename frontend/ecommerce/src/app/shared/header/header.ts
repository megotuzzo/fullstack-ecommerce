import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {

  constructor(private router: Router) {

  }

  ngOnInit() {

  }

  doSearch(value: string) {
    console.log(`value=${value}`);

    this.router.navigateByUrl(`/search/${value}`);
  }

}

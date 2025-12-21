import {AfterViewInit, Component, ViewChild, ElementRef} from '@angular/core';
import {Router, RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import { NgFor } from '@angular/common'
import {AuthService} from '../../services/auth.service';
import {MaterialService} from '../../classes/material.service';


@Component({
  selector: 'app-site-layout',
  imports: [RouterOutlet, RouterLink, NgFor, RouterLinkActive],
  templateUrl: './site-layout.component.html',
  styleUrls: ['./site-layout.component.css'],
})
export class SiteLayoutComponent implements AfterViewInit {

  @ViewChild('floating') floatingRef!: ElementRef

  links = [
    {url: '/overview', name: 'Огляд'},
    {url: '/analytics', name: 'Аналітика'},
    {url: '/history', name: 'Історія'},
    {url: '/order', name: 'Додати замовлення'},
    {url: '/categories', name: 'Асортимент'},
  ]

  constructor(
    private auth: AuthService,
    private router: Router) {

  }


  ngAfterViewInit() {
      MaterialService.initializeFloatingButton(this.floatingRef)
  }

  logout(event: Event) {
    event.preventDefault()
    this.auth.logout()
    this.router.navigate(['/login'])

  }

}

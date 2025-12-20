import {Component, OnInit} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import { NgFor } from '@angular/common'

@Component({
  selector: 'app-site-layout',
  imports: [RouterOutlet, RouterLink, NgFor],
  templateUrl: './site-layout.component.html',
  styleUrl: './site-layout.component.css',
})
export class SiteLayoutComponent implements OnInit {

  links = [
    {url: '/overview', name: 'Огляд'},
    {url: '/analytics', name: 'Аналітика'},
    {url: '/history', name: 'Історія'},
    {url: '/order', name: 'Додати замовлення'},
    {url: '/categories', name: 'Асортимент'},
  ]

  constructor() {

  }

  ngOnInit() {

  }

}

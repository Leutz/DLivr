import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  pages = [
    {
    title: 'Home',
    url: '/menu/home',
    icon: 'home'
    },
    {
      title: 'Settings',
      url: '/menu/settings',
      icon: 'settings'
    },
    {
      title: 'My Packages',
      url: '/menu/mypackages',
      icon: 'cube'
    },
    {
      title: 'Payment',
      url: '/menu/payment',
      icon: 'card'
    },
    {
      title: 'Help',
      url: '/menu/help',
      icon: 'help-circle'
    },
    {
      title: 'Log Out',
      url: '/menu/logout',
      icon: 'log-out'
    }
  ];

  selectedPath = '';
  constructor(private router: Router) {
    this.router.events.subscribe((event: RouterEvent) => {
        this.selectedPath = event.url;
    });
   }

  ngOnInit() {
  }

}

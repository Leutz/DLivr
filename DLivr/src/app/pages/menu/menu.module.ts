import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: 'menu',
    component: MenuPage,
    children: [
        {
          path: 'home',
          loadChildren: '../home/home.module#HomePageModule'
        },
        {
          path: 'settings',
          loadChildren: '../settings/settings.module#SettingsPageModule'
        },
        {
          path: 'mypackages',
          loadChildren: '../mypackages/mypackages.module#MypackagesPageModule'
        },
        {
          path: 'payment',
          loadChildren: '../payment/payment.module#PaymentPageModule'
        }
    ]
  }
 ,
  {
    path: '',
    redirectTo : '/menu/home'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuPage]
})
export class MenuPageModule {}

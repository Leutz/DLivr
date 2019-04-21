import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MypackagesdriverPage } from './mypackagesdriver.page';

const routes: Routes = [
  {
    path: '',
    component: MypackagesdriverPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MypackagesdriverPage]
})
export class MypackagesdriverPageModule {}

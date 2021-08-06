import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';

@NgModule({
  declarations: [AdminComponent, AdminHomeComponent],
  imports: [CommonModule, AdminRoutingModule],
  exports: [AdminComponent, AdminHomeComponent],
})
export class AdminModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserComponent } from './user/user.component';
import { LayoutModule } from '../../layout/layout.module';

@NgModule({
  declarations: [UserComponent, UserHomeComponent],
  imports: [CommonModule, UserRoutingModule, LayoutModule],
  exports: [UserComponent, UserHomeComponent],
})
export class UserModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { NotPermsComponent } from './not-perms/not-perms.component';

@NgModule({
  declarations: [NotFoundComponent, NotPermsComponent],
  imports: [CommonModule],
  exports: [NotFoundComponent, NotPermsComponent],
})
export class ErrorModule {}

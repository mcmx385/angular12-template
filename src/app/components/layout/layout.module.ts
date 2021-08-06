import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [NavComponent, FooterComponent],
  imports: [CommonModule],
  exports: [NavComponent, FooterComponent],
})
export class LayoutModule {}

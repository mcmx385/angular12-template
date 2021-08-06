import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './components/layout/layout.module';
import { UserModule } from './components/pages/user/user.module';
import { AdminModule } from './components/pages/admin/admin.module';
import { ErrorModule } from './components/pages/error/error.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    UserModule,
    AdminModule,
    ErrorModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

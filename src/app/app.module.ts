import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MasterComponent } from './core/master/master.component';
import { CoreModule } from './core/core.module';
import { AuthGuard } from './core/services/guard/auth.guard';
import { HttpClientModule } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    MasterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule,
    AppRoutingModule,
  ],
  providers: [
    { provide: AuthGuard, useClass: AuthGuard },
    ToastrService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }

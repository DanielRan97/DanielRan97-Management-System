import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './log-in/log-in.component';
import { WorkSystemComponent } from './work-system/work-system.component';
import { AddComponent } from './add/add.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { EditworkerComponent } from './editworker/editworker.component';



@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    WorkSystemComponent,
    AddComponent,
    EditworkerComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng2SearchPipeModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

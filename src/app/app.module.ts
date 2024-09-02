import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FamilyComponent } from './family/family.component';
import { HbanaComponent } from './hbana/hbana.component';
import { MchComponent } from './mch/mch.component';
import { NohbanaComponent } from './nohbana/nohbana.component';
import { OptionsComponent } from './options/options.component';
import { IronstudyComponent } from './ironstudy/ironstudy.component';
import { IdaComponent } from './ida/ida.component';
import { MidaComponent } from './mida/mida.component';
import { MhbanaComponent } from './mhbana/mhbana.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FamilyComponent,
    HbanaComponent,
    MchComponent,
    NohbanaComponent,
    OptionsComponent,
    IronstudyComponent,
    IdaComponent,
    MidaComponent,
    MhbanaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

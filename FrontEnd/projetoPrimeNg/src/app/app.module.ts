import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { SliderModule } from 'primeng/slider';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WriteComponent } from './write/write.component';
import { HttpClientModule } from '@angular/common/http';
import {InputMaskModule} from 'primeng/inputmask';
import { FormsModule } from '@angular/forms';
import {InputNumberModule} from 'primeng/inputnumber';
import {AccordionModule} from 'primeng/accordion';
import {PanelModule} from 'primeng/panel';








@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WriteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CalendarModule,
    SliderModule,
    ButtonModule,
    InputTextModule,
    MessagesModule,
    MessageModule,
    CardModule,
    TabViewModule,
    InputTextareaModule,
    TableModule,
    HttpClientModule,
    InputMaskModule,
    FormsModule,
    InputNumberModule,
    AccordionModule,
    PanelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

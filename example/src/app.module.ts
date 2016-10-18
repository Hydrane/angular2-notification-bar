import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { NotificationBarModule } from '../../src'
import { AppComponent } from './app.component';

@NgModule({
    imports: [BrowserModule, FormsModule, NotificationBarModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent ]
})
export class AppModule {

}
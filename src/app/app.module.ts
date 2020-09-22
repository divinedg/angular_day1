import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { Buoi1Component } from './buoi1/buoi1.component';
import { HeaderComponent } from './buoi1/header/header.component';
import { FooterComponent } from './buoi1/footer/footer.component';
import { ContentComponent } from './buoi1/content/content.component';
import { SliderbarComponent } from './buoi1/sliderbar/sliderbar.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    Buoi1Component,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    SliderbarComponent // các component sử dụng ( lẫn nhau ) trong module này
  ],
  imports: [
    BrowserModule // nơi để import các module khác vào module này.
  ],
  providers: [],
  bootstrap: [AppComponent]  // Nơi chứa component sử dụng trong index.html
})
export class AppModule { }

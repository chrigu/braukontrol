import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { nvD3Module } from './ng2-nvd3/ng2-nvd3.module';

import { BraumeisterService } from './braumeister.service';

import { AppComponent } from './app.component';
import { MainComponentComponent } from './main-component/main-component.component';
import { TemperatureChartComponent } from './temperature-chart/temperature-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponentComponent,
    TemperatureChartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    nvD3Module
  ],
  providers: [BraumeisterService],
  bootstrap: [AppComponent]
})
export class AppModule { }

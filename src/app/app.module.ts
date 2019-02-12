import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppService } from './app.service';
import { ProtobufService } from './protobuf/protobuf.service';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [
    AppService,
    ProtobufService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }

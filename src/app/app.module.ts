import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {
  MqttMessage,
  MqttModule,
  MqttService
} from 'ngx-mqtt';

export const MQTT_SERVICE_OPTIONS = {
  hostname: 'm14.cloudmqtt.com',
  port: 31527,
  //protocol: 'ws',
  path: '/mqtt'
};

export function mqttServiceFactory() {
  return new MqttService(MQTT_SERVICE_OPTIONS);
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MqttModule.forRoot({
          provide: MqttService,
          useFactory: mqttServiceFactory
        })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

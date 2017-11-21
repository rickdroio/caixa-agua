import { Component, OnInit } from '@angular/core';
import {
  MqttMessage,
  MqttModule,
  MqttService
} from 'ngx-mqtt';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor (private _mqttService: MqttService) {
    _mqttService.connect({username: 'user', password: 'passwd'});
  }

  ngOnInit(){
    this._mqttService.observe('distance').subscribe((message: MqttMessage) => {
      console.log(message);
    });
  }

}

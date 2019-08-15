import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/services/api.service';
import { ActivatedRoute } from '@angular/router';
import { Device, UIConfig, IOConfiguration } from 'src/app/objects/database';

@Component({
  selector: 'app-room-control',
  templateUrl: './room-control.component.html',
  styleUrls: ['./room-control.component.scss']
})
export class RoomControlComponent implements OnInit {
  roomID: string;
  devices: Device[];
  uiConfig: UIConfig;

  selectedInput: IOConfiguration;

  constructor(
    public api: APIService,
    public route: ActivatedRoute) {
      this.route.params.subscribe(params => {
        this.roomID = params['id'];
      });

      this.getRoomInfo();
    }

  ngOnInit() {
  }

  getRoomInfo() {
    this.api.getUIConfig(this.roomID).then((answer) => {
      this.uiConfig = answer as UIConfig;
      console.log(this.uiConfig);
    });

    this.api.getDevicesInRoom(this.roomID).then((answer) => {
      this.devices = answer as Device[];
      console.log(this.devices);
    });
  }

  selectInput = (input: IOConfiguration): Promise<boolean> => {
    return new Promise<boolean>(() => {
      console.log('selecting this input: ', input);
      this.selectedInput = input;
      const bldg = this.roomID.substr(0, this.roomID.indexOf('-'));
      const room = this.roomID.substr(this.roomID.indexOf('-') + 1);
      this.api.switchInput(bldg, room, input, [{name: 'D4', displayName: 'D4', icon: 'tv', subInputs: []}]);
      return true;
    });
  }
}

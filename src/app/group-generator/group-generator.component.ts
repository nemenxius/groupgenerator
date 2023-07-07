import { Component } from '@angular/core';
import { faFutbol } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-group-generator',
  templateUrl: './group-generator.component.html',
  styleUrls: ['./group-generator.component.css']
})
export class GroupGeneratorComponent {

  playersnames: string = "";
  playersArray: string[] = [];
  playersList: string[] = [];
  group1: string[] = [];
  group2: string[] = [];
  defaultAlerts: any[] = [];
  alerts = this.defaultAlerts;
  control: Boolean = false;
  faFutbol = faFutbol;

  generate(playersnames: string) {
    this.playersList = [];
    this.group1 = [];
    this.group2 = [];
    this.playersArray = playersnames.split(",");
    this.control = false;
    if (this.playersArray.length != 10) {

      this.control = true;
      //alert("You need to enter 10 players name");
    } else {
      
      for (let index = 0; index < this.playersArray.length; index++) {
        this.playersList.push(this.playersArray[index]);
      }

      const shuffle = (array: string[]) => {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
      };

      shuffle(this.playersList);

      for (let i = 0; i < this.playersList.length; i++) {

        if (this.group1.length >= 5) {
          this.group2.push(this.playersList[i]);
        } else {
          this.group1.push(this.playersList[i]);
        }

      }
    }

  }

  


}

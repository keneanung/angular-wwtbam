import { Component, OnInit, ElementRef } from '@angular/core';
import { GameComponent } from '../game/game.component';


@Component({
  selector: 'app-risklifeline',
  templateUrl: './risklifeline.component.html',
  styleUrls: ['./risklifeline.component.css']
})
export class RisklifelineComponent implements OnInit {

  public element: ElementRef;

  constructor(private el: ElementRef, private app: GameComponent) {
    this.element = el;
  }

  executeLifeline() {
    this.app.pauseBGM();
    this.element.nativeElement.style.display = "none";

    //var audio = new Audio();
    //audio.src = "../../assets/sound/audiencejhol.mp3";
    //audio.load();
    //audio.play();

    //audio.onended = () => {
//      audio.loop = true;
//      this.app.playBGM(this.app.getCurrentQuestion());
//    }
  }

  ngOnInit() {
  }

}

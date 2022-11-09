import { PathLocationStrategy } from '@angular/common';
import { Component } from '@angular/core';

interface Character1 {
  mes: string;
  dias: number;
}

interface Character2 {
  letra: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  diasNum: Character1[];
  diasLetras: string[] = ['L', 'M', 'X', 'J', 'V', 'S', 'D'];

  constructor() {
    const mes = `[
      {"mes": "Septiembre", "dias": 30},
      {"mes": "Octubre", "dias": 31}
    ]`;

    const diasmes = `[
      {"dia1": "L", "dia2": "M", "dia3": "X", 
      "dia4": "J", "dia5": "V","dia6": "S", 
      "dia7": "D"},
    ]`;

    this.diasNum = JSON.parse(mes);
  }

  getDays(mes: Character1): number[] {
    let Dias = [];

    for (let i = 1; i <= mes.dias; i++) {
      Dias.push(i);
    }
    return Dias;
  }
}

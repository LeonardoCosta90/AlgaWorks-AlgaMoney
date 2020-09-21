import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nome = 'Leonardo Costa';
  idade = 29;

  getIdade(){
    return this.idade;
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BotMockSample';
  public a:boolean=false;
  public showBot()
{
  this.a=!this.a;
}
}



import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-bot2',
  templateUrl: './bot2.component.html',
  styleUrls: ['./bot2.component.css']
})
export class Bot2Component implements OnInit {

  constructor(private sanitizer: DomSanitizer) {}

  cinema = [
    {
      "Cinema_strName": "dfdsfsd, Ahmedabad",
      "Cinema_strID": "HIWB",
      "Cinema_strBannerImg": "F&BCombo.jpg",
      "cinema_addr": "fsdfsdfr,Drive-in Road, 380052, ",
      "cinema_loc": "<iframe src=\"http://127.0.0.1:8080/index%20(2).html\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>",
      "cinema_mob": 0
    }
  ];
  ngOnInit() {

    
  }
  safeHTML(content) {
    return this.sanitizer.bypassSecurityTrustHtml(content);
  }

}

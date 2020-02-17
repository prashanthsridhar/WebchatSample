import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, AfterContentInit } from '@angular/core';

//import { createCognitiveServicesSpeechServicesPonyfillFactory,createDirectLine,renderWebChat} from 'botframework-webchat';
/**
 * Declares the WebChat property on the window object.
 */
import * as webChat from '../../assets/webchat.js';
declare global {
  interface Window {
    WebChat: any;
  }
}


window.WebChat = window.WebChat || {};
@Component({
  selector: 'app-bot1',
  templateUrl: './bot1.component.html',
  styleUrls: ['./bot1.component.css']
})
export class Bot1Component implements OnInit {
  @ViewChild("botWindow") botWindowElement: ElementRef;
  public BotChat: any;
  // public WebChat: any;
  public CognitiveServices: any;
  public a:boolean=false;
  ngOnInit() {

    var currentDate = new Date();
    console.log(currentDate.toUTCString());
    this.init()
      .then(data => {

        setTimeout(()=>{
          var x = document.querySelectorAll(".css-115fwte");
          console.log(x[1]);
          x[1].addEventListener('click', () => {
            this.micSound();
          });
    
          let mic2: HTMLElement = document.getElementsByClassName('css-115fwte')[1] as HTMLElement;
          mic2.click();
          console.log(mic2);
        } ,1000)
      })
  }

  async init(){

    const directLine = window.WebChat.createDirectLine({

      secret: "sample",
      
      webSocket: true,
      conversationId:"sample"
    });



    const speechToTextPonyfillFactory = await window.WebChat.createCognitiveServicesSpeechServicesPonyfillFactory({
      // We are passing the Promise function to the authorizationToken field.
      // This function will be called every time the token is being used.
      subscriptionKey: 'sample',
      region: 'westus2',
      speechRecognitionEndpointId: 'sample',
    })



    const textToSpeechPonyfillFactory = await window.WebChat.createCognitiveServicesSpeechServicesPonyfillFactory({
      // We are passing the Promise function to the authorizationToken field.
      // This function will be called every time the token is being used.
      subscriptionKey: 'sample',
      region: 'westus2',
      speechSynthesisDeploymentId: 'sample'
    });




    const styleOptions = {
      bubbleNubOffset: 'center',
      bubbleNubSize: 10,
      bubbleFromUserNubOffset: 'top',
      bubbleFromUserNubSize: 10,
      bubbleFromUserBackground: 'rgba(241,98,54,1)',
      bubbleFromUserTextColor: 'white',
      //bubbleMaxWidth: 200,
      bubbleMinWidth:80,
      bubblefontSize: "30px",

    };
    const styleSet = window.WebChat.createStyleSet({
      bubbleFromUserBackground: 'rgba(241,98,54,1)',
      bubbleFromUserTextColor: 'white',

    });

    const groupTimestamp = true;
    window.WebChat.renderWebChat(
      {

        userID: sessionStorage.getItem('email'),
        username: sessionStorage.getItem('username'),
        locale: 'en-GB',


        directLine: directLine,

        //styleSet,
        styleOptions,
        groupTimestamp,
        //selectVoice: () => ({ voiceURI: 'MC -Custom Voice' }),
        webSpeechPonyfillFactory: options => {
          var { SpeechGrammarList, SpeechRecognition } = speechToTextPonyfillFactory(options);
          var { speechSynthesis, SpeechSynthesisUtterance } = textToSpeechPonyfillFactory(options);
          return {
            SpeechGrammarList,
            SpeechRecognition,
            speechSynthesis,
            SpeechSynthesisUtterance
          };
        }

      },
      this.botWindowElement.nativeElement
    );
  }
  public micSound() {
    let audio = new Audio();
    // audio.src = "/assets/alarm.wav";
    audio.src = "/assets/micsound.wav";
    audio.load();
    //audio.play();
  }
  public showBot()
  {
this.a=true;
  }

}





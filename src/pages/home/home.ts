import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SecondPage } from '../second/second';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  firstname:string;
  surname:string;

  constructor(public navCtrl: NavController) {

  }
  goToSecondPage(firstname, surname) {
    firstname = firstname || 'Enter name';
    surname = surname || 'Enter surname';

    this.navCtrl.push(SecondPage,{
      text:firstname,
      text1:surname
    });
      
  }
}

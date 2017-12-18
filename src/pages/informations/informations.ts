import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InformationsDeLaClassePage } from '../informations-de-la-classe/informations-de-la-classe';

@Component({
  selector: 'page-informations',
  templateUrl: 'informations.html'
})
export class InformationsPage {

  constructor(public navCtrl: NavController) {
  }
  goToInformationsDeLaClasse(params){
    if (!params) params = {};
    this.navCtrl.push(InformationsDeLaClassePage);
  }
}

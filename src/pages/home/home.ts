import { Component } from '@angular/core';
import { NavController, NavParams  } from 'ionic-angular';
import { InformationsPage } from '../informations/informations';
import { InformationsDeLaClassePage } from '../informations-de-la-classe/informations-de-la-classe';
import moment from 'moment';
import { AngularFireDatabase} from 'angularfire2/database';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  arrData = []
  public data = null;
  constructor(public navCtrl: NavController,public navParams: NavParams,private fdb: AngularFireDatabase) {

    this.fdb.list("/course").valueChanges().subscribe(_data =>{
      this.arrData = _data;
      console.log(this.arrData);
    })

    let data = moment().format('dddd Do MMMM ');                                                                                  
    this.data= moment().format('dddd Do MMMM ');
    console.log('today is: ', data );
  }
  goToInformations(params){
    if (!params) params = {};
    this.navCtrl.push(InformationsPage);
  }
  goToInformationsDeLaClasse(params){
    if (!params) params = {};
    this.navCtrl.push(InformationsDeLaClassePage);
  }
}

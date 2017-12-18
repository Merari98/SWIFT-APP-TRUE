import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { Cours2Page } from '../cours2/cours2';
import { AngularFireDatabase} from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'page-cours',
  templateUrl: 'cours.html'
})
export class CoursPage {
  arrData = []

  constructor(public navCtrl: NavController,public navParams: NavParams,private fdb: AngularFireDatabase) {
    this.fdb.list("/course").valueChanges().subscribe(_data =>{
      this.arrData = _data;
      console.log(this.arrData);
    })
  } 
  goToCours2(params){
    if (!params) params = {};
    this.navCtrl.push(Cours2Page);
  }

  }
  
  


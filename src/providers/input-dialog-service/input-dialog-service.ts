import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { EventBookingServiceProvider } from '../event-booking-service/event-booking-service';

/*
  Generated class for the InputDialogServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class InputDialogServiceProvider {

  constructor(public dataService: EventBookingServiceProvider, public alertCtrl: AlertController) {
    console.log('Hello InputDialogServiceProvider Provider');
  }
  
  showPrompt(member?, index?) {
    const prompt = this.alertCtrl.create({
      title: member? 'Edit Booking': 'Add Booking',
      message: member? "Please edit the performer, the event planner, or the event space...":"Please enter the performer, the event planner, or the event space...",
      inputs: [
        {
          name: 'name',
          placeholder: 'Name',
          value: member? member.name: null
        },
        {
          name: 'business',
          placeholder: 'Business',
          value: member? member.business: null
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: member => {
            console.log('Saved clicked', member);
            if (index != undefined){
            this.dataService.editMember(member, index);
            }
            else {
              this.dataService.addMember(member);
            }
          }
        }
      ]
    });
    prompt.present();
  }

}

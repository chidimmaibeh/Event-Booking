import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { EventBookingServiceProvider } from '../../providers/event-booking-service/event-booking-service';
import { InputDialogServiceProvider } from '../../providers/input-dialog-service/input-dialog-service';
import { SocialSharing } from '@ionic-native/social-sharing'; 


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  title ="Event Booking";


  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public alertCtrl: AlertController, public dataService: EventBookingServiceProvider, public inputDialogService: InputDialogServiceProvider, public socialSharing: SocialSharing) {

  }

  loadMembers() {
    return this.dataService.getMembers(); 
  }

  removeMember(member, index){
    console.log("Removing Member", member, index)
    const toast = this.toastCtrl.create({
      message: "Removing Member - " + index + "...",
      duration: 3000
    });
    toast.present(); 

    this.dataService.removeMember(index);
  }

  shareMember(member, index){
    console.log("Sharing Member", index);
    const toast = this.toastCtrl.create({
      message: 'Sharing Member - ' + index + "...",
      duration: 3000
    });
    toast.present(); 

    let message = "Member - Name: " + member.name + "-Business: " + member.business;
    let subject = "Shared via Event Booking app";
    
    this.socialSharing.share(message, subject).then(() => {
      // Sharing via email is possible
      console.log("Shared successfully!");
    }).catch((error) => {
      // Sharing via email is not possible
      console.error("Error while sharing", error);
    });
  }
  
  editMember(member, index){
    console.log("Edit Member", member, index)
    const toast = this.toastCtrl.create({
      message: "Edit Member -" + index + "...",
      duration: 3000
    });
    toast.present(); 

    this.inputDialogService.showPrompt(member, index);
  }
  

  addMember() {
    console.log("Adding Member");
    this.inputDialogService.showPrompt();
  }


}

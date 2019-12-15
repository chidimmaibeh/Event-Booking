
import { Injectable } from '@angular/core';

/*
  Generated class for the EventBookingServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EventBookingServiceProvider {

  
  members = [
    {
      name: "Rosa Catering",
      business: "Culinary"
    },
    {
      name: "Massey Live Band",
      business: "Musician"
    },
    {                                        
      name: "Jay Carson",
      business: "Comedian"
    }, 
    {   
      name: "Southern Kitchen",
      business: "Culinary"
    },
    {
      name: "Ama Luxury Space",
      business: "Event Space"
    },
    {
      name: "Jamine Wilson", 
      business: "Event Planner"
    },];

  constructor() {
    console.log('Hello EventBookingServiceProvider Provider');
  }

  getMembers() {
    return this.members;
  }

  removeMember(index) {
    this.members.splice(index, 1);
  }

  addMember(member) {
    this.members.push(member);
  }
  
  editMember(member, index) {
    this.members[index] = member; 
  }
}

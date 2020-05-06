import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  events;
  
  constructor(private eventsService: EventsService) { }

  ngOnInit(): void {
    this.events = this.eventsService.getEvents();
  }

  getEvents() {
    //this.eventsService.getEvents().subscribe((data) => {this.events = data;});
    this.events = this.eventsService.getEvents();
  }

  confirmDeleteEvent(id){
    alert("delete ?")
  }

  deleteEvent(id){
    console.log("id:",id);
    this.eventsService.deleteEvent(id);
  }

}
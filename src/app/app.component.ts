import { Component } from '@angular/core';
import { EventsService } from './events.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  events = [];

  constructor(private eventsService: EventsService) { }

  getEvents() {
    this.events = this.eventsService.getEvents();
  }
}

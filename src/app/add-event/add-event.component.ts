import { Component } from '@angular/core';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent{

  constructor(private eventsService: EventsService) { }

  addEvent(title, desc, date){
    console.log(title+desc+date)
    let event = {
      title:title,
      description:desc,
      date:date
    }
    this.eventsService.addEvent(event)
  }

}

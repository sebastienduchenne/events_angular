import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent implements OnInit{
  title_page = "";
  confirm = "";
  titre_value = "";
  date_value = "";
  description_value = "";

  constructor(private eventsService: EventsService,
              private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this._activatedRoute.snapshot.paramMap.get("id")
    console.log("id:",id)

    if(id === null){
      this.title_page = "Ajouter un évènement";
      this.confirm = "Ajouter";
    } else {
      this.title_page = "Editer un évènement";
      this.confirm = "Editer";
      let e = this.eventsService.getEvent(id);
      this.titre_value = e.title;
      this.date_value = e.date;
      this.description_value = e.description;
    }

  }

  editEvent(title, desc, date){
    console.log(title+desc+date)
    let event = {
      title:title,
      description:desc,
      date:date
    }
    this.eventsService.addEvent(event);
  }

}

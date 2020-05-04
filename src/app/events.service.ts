import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root' 
}) 
export class EventsService {
  events = [
    {
      id: 1,
      name: 'Event 1'
    },
    {
      id: 2,
      name: 'Event 2'
    },
    {
      id: 3,
      name: 'Event 3'
    }
  ];

  private env = "http://localhost:4200/"
  
  constructor(private http: HttpClient) { }

  getEvents() {
    //this.http.get(`${env}/events`);
    return this.events;
  }

}
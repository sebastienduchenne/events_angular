import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root' 
}) 
export class EventsService {
  events = [
    { id: 1, title: 'Event 11' },
    { id: 2, title: 'Event 2' },
    { id: 3, title: 'Event 3' }
  ];

  private env = "http://localhost:3001"
  private urlGet = `${this.env}/events`
  private urlAdd = `${this.env}/events`
  private urlModify = `${this.env}/events`
  private urlDelete = `${this.env}/events`
  
  constructor(private http: HttpClient) { }

  getEvents() {
    return this.events;
    //return this.http.get(`${this.urlGet}`);
  }

  getEvent(id) {
    return this.http.get(`${this.urlGet}/${id}`);
  }

  addEvent(event) {
    this.events.push(event);
    //return this.http.post(`${this.urlAdd}`, event);
  }

  modifyEvent(event) {
    return this.http.put(`${this.urlModify}`, event);
  }

  removeEvent(id) {
    return this.http.delete(`${this.urlDelete}/${id}`);
  }

}
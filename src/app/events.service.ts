import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root' 
}) 
export class EventsService {
  events = [
    { id: 1, title: 'Event 1', date: "10-10-20", description: 'desc'},
    { id: 2, title: 'Event 2', date: "10-10-20", description: 'desc'},
    { id: 3, title: 'Event 3', date: "10-10-20", description: 'desc'}
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
    return this.events[0];
    //return this.http.get(`${this.urlGet}/${id}`);
  }

  addEvent(event) {
    this.events.push(event);
    //return this.http.post(`${this.urlAdd}`, event);
  }

  modifyEvent(event) {
    return this.http.put(`${this.urlModify}`, event);
  }

  deleteEvent(id) {
    //return this.http.delete(`${this.urlDelete}/${id}`);
    
  }

}
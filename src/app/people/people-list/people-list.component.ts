import { Component, OnInit } from '@angular/core';
import { Person } from './person';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit {

  public people: Person [];

  constructor(private apiService: ApiService) {
    apiService.people.subscribe(people => this.people = people);
   }

  ngOnInit() {
  }

}

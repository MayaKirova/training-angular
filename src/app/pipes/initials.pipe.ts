import { Pipe, PipeTransform } from '@angular/core';
import { Person } from '../people/people-list/person';

@Pipe({
  name: 'initials'
})
export class InitialsPipe implements PipeTransform {

  transform(person: Person): any {
    if (person) {
      return person.FirstName.substr(0, 1) + person.LastName.substr(0, 1);
    }
    return null;
  }

}

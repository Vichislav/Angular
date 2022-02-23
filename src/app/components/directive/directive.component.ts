import { Component } from '@angular/core';

interface User {
  id: number;
  name: string;
  template: string;
}

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.scss']
})
export class DirectiveComponent  {

  expression = true;
  deepObject: any = null;

  users: User[] = [
    {
      id: 1,
      name: 'John Doe',
      template: 'bold'
    },
    {
      id: 2,
      name: 'Boris Britva',
      template: 'italic'
    },
    {
      id: 3,
      name: 'Spanch Bob',
      template: 'unknow'
    }
  ];

  generateUser() {
    this.deepObject = {
      user: {
        name: 'John',
        surname: 'Doe'
      }
    }
  }
  trackBy(index: number, user: User) {
    return user.id;
  }
}

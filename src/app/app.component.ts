import {Component} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BACHELOR OF DIGITAL BUSINESS';
  website = 'https://www.bi.edu/programmes-and-individual-courses/bachelor-programmes/digital-business/';

  semester1 = [
    {
      name: 'EXC 3410',
      category: 'The Firm',
      points: '7,5'
    },
    {
      name: 'EXC 3452',
      category: 'Financial Reporting and Analysis',
      points: '7,5'
    },
    {
      name: 'EXC 3415',
      category: 'Marketing Management',
      points: '7,5'
    },
    {
      name: 'EDI XX01',
      category: 'Programming and Data Management',
      points: '7,5'
    }
  ];
  semester2 = [
    {
      name: 'EXC 3442',
      category: 'Managerial Accounting',
      points: '7,5'
    },
    {
      name: 'EXC 2910',
      category: 'Mathematics',
      points: '7,5'
    },
    {
      name: 'EDI XX02',
      category: 'Digital Value Creation',
      points: '7,5'
    },
    {
      name: 'EXC 2904',
      category: 'Statistics',
      points: '7,5'
    }
  ];
  semester3 = [
    {
      name: 'EXC 3520',
      category: 'Microeconomics',
      points: '7,5'
    },
    {
      name: 'EDI XX03',
      category: 'Digital Problem Solving and Task Automation',
      points: '7,5'
    },
    {
      name: 'EDI XX04',
      category: 'Influential Communication for Digital Business',
      points: '7,5'
    },
    {
      name: 'EDI XX05',
      category: 'Organizing Digitally',
      points: '7,5'
    }
  ];

  semester4 = [
    {
      name: 'EXC 3525',
      category: 'Macroeconomics',
      points: '7,5'
    },
    {
      name: 'EXC 3505',
      category: 'Strategy',
      points: '7,5'
    },
    {
      name: 'EXC 2953',
      category: 'Organizational Behaviour and Management',
      points: '7,5'
    },
    {
      name: 'EDI XX06',
      category: 'Business and Systems Architecture',
      points: '7,5'
    }
  ];

  semester5 = [
    {
      name: 'EDI XX07',
      category: 'Digital Business Analysis ',
      points: '7,5'
    },
    {
      name: 'EDI XXXX',
      category: 'Digital Innovation',
      points: '7,5'
    },
    {
      name: 'Int 1234',
      category: 'Internship',
      points: '15'
    },
    {
      name: 'EXC',
      category: 'Exchange',
      points: '15'
    }
  ];

  semester6 = [
    {
      name: 'EDI XX09',
      category: 'Digital Business Law',
      points: '7,5'
    },
    {
      name: 'EDI XX10',
      category: 'Digital Business Project',
      points: '15'
    },
    {
      name: 'ELE 1234',
      category: 'Elective',
      points: '7,5'
    },

  ];

  onDrop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data,
        event.previousIndex,
        event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex, event.currentIndex);
    }
  }
}

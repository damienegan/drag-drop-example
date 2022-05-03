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
      category: 'The Firm'
    },
    {
      name: 'EXC 3452',
      category: 'Financial Reporting and Analysis'
    },
    {
      name: 'EXC 3415',
      category: 'Marketing Management'
    },
    {
      name: 'EDI XX01',
      category: 'Programming and Data Management'
    }
  ];
  semester2 = [
    {
      name: 'EXC 3442',
      category: 'Managerial Accounting'
    },
    {
      name: 'EXC 2910',
      category: 'Mathematics'
    },
    {
      name: 'EDI XX02',
      category: 'Digital Value Creation'
    },
    {
      name: 'EXC 2904',
      category: 'Statistics'
    }
  ];
  semester3 = [
    {
      name: 'EXC 3520',
      category: 'Microeconomics'
    },
    {
      name: 'EDI XX03',
      category: 'Digital Problem Solving and Task Automation'
    },
    {
      name: 'EDI XX04',
      category: 'Influential Communication for Digital Business'
    },
    {
      name: 'EDI XX05',
      category: 'Organizing Digitally'
    }
  ];

  semester4 = [
    {
      name: 'EXC 3525',
      category: 'Macroeconomics'
    },
    {
      name: 'EXC 3505',
      category: 'Strategy'
    },
    {
      name: 'EXC 2953',
      category: 'Organizational Behaviour and Management'
    },
    {
      name: 'EDI XX06',
      category: 'Business and Systems Architecture'
    }
  ];

  semester5 = [
    {
      name: 'EDI XX07',
      category: 'Digital Business Analysis '
    },
    {
      name: 'EDI XXXX',
      category: 'Digital Innovation'
    },
    {
      name: 'Int 1234',
      category: 'Internship'
    },
    {
      name: 'EXC',
      category: 'Exchange'
    }
  ];

  semester6 = [
    {
      name: 'EDI XX09',
      category: 'Digital Business Law'
    },
    {
      name: 'EDI XX10',
      category: 'Digital Business Project'
    },
    {
      name: 'ELE 1234',
      category: 'Elective'
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

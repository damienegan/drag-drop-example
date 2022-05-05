import {Component} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { HttpClient } from '@angular/common/http';
import { isNgTemplate } from '@angular/compiler';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  selectedSpecialisation = 'None';
  selectedCampus = 'Oslo';
  constructor(private http: HttpClient) { }
  title = 'BACHELOR OF DIGITAL BUSINESS';
  website = 'https://www.bi.edu/programmes-and-individual-courses/bachelor-programmes/digital-business/';
  totalPointsSemester1 = 0;
  totalPointsSemester2 = 0;
  totalPointsSemester3 = 0;
  totalPointsSemester4 = 0;
  totalPointsSemester5 = 0;
  totalPointsSemester6 = 0;





  availableCoursesOslo = [
    {
      code: 'Int',
      title: 'Internship',
      points: 15,
      complete: false
    },
    {
      code: 'EDI XX06',
      title: 'Business and Systems Architecture',
      points: 7.5,
      complete: false
    },
    {
      code: 'EDI XX07',
      title: 'Digital Business Analysis',
      points: 7.5,
      complete: false
    },
    {
      code: 'EDI XXXX',
      title: 'Digital Innovation',
      points: 7.5,
      complete: false
    },
    {
      code: 'EDI XX07',
      title: 'Digital Business Analysis',
      points: 7.5,
      complete: false
    },
    {
      code: 'EDI XXXX',
      title: 'Digital Innovation',
      points: 7.5,
      complete: false
    }
  ];

  availableCoursesBergen = [
    {
      code: 'Int',
      title: 'Internship',
      points: 15,
      complete: false
    },
    {
      code: 'EDI XX06',
      title: 'Business and Systems Architecture',
      points: 7.5,
      complete: false
    }
  ];

  specialIntBus = [
    {
      code: 'EXC 3603',
      title: 'International Economics',
      points: 7.5,
      complete: 'false',
      grade: '-'
    },
    {
      code: 'EXC 3410',
      title: 'The Firm',
      points: 7.5,
      complete: 'false',
      grade: '-'
    }
  ];

  specialFinance = [
    {
      code: 'EXC 3100',
      title: 'International Finane',
      points: 7.5,
      complete: 'false',
      grade: '-'
    },
    {
      code: 'EXC 3410',
      title: 'The Firm',
      points: 7.5,
      complete: 'false',
      grade: '-'
    }
  ];

  semester1 = [
    {
      code: 'EXC 3410',
      title: 'The Firm',
      points: 7.5,
      complete: 'false',
      grade: '-'
    },
    {
      code: 'EXC 3452',
      title: 'Financial Reporting and Analysis',
      points: 7.5,
      complete: 'true',
      grade: 'A'
    },
    {
      code: 'EXC 3415',
      title: 'Marketing Management',
      points: 7.5,
      complete: 'true',
      grade: 'B'
    },
    {
      code: 'EDI XX01',
      title: 'Programming and Data Management',
      points: 7.5,
      complete: 'true',
      grade: 'C'
    }

  ];
  semester2 = [
    {
      code: 'EXC 3442',
      title: 'Managerial Accounting',
      points: 7.5,
      complete: true,
      grade: 'A'
    },
    {
      code: 'EXC 2910',
      title: 'Mathematics',
      points: 7.5,
      complete: true,
      grade: 'A'
    },
    {
      code: 'EDI XX02',
      title: 'Digital Value Creation',
      points: 7.5,
      complete: true,
      grade: 'A'
    },
    {
      code: 'EXC 2904',
      title: 'Statistics',
      points: 7.5,
      complete: true,
      grade: 'A'
    },
    {
    code: 'EDI XX01',
    title: 'Programming with Yngve',
    points: 7.5,
    complete: 'true',
    grade: 'C'
  }
  ];
  semester3 = [
    {
      code: 'EXC 3520',
      title: 'Microeconomics',
      points: 7.5,
      complete: true,
      grade: 'A'
    },
    {
      code: 'EDI XX03',
      title: 'Digital Problem Solving and Task Automation',
      points: 7.5,
      complete: true,
      grade: 'A'
    },
    {
      code: 'EDI XX04',
      title: 'Influential Communication for Digital Business',
      points: 7.5,
      complete: true,
      grade: 'A'
    },
    {
      code: 'EDI XX05',
      title: 'Organizing Digitally',
      points: 7.5,
      complete: true,
      grade: 'A'
    }
  ];

  semester4 = [
    {
      code: 'EXC 3525',
      title: 'Macroeconomics',
      points: 7.5,
      complete: false,
      grade: '-'
    },
    {
      code: 'EXC 3505',
      title: 'Strategy',
      points: 7.5,
      complete: false,
      grade: '-'
    },
    {
      code: 'EXC 2953',
      title: 'Organizational Behaviour and Management',
      points: 7.5,
      complete: false,
      grade: '-'
    }

  ];

  semester5 = [
    {
      code: 'EXC',
      title: 'Exchange',
      points: 15,
      complete: false,
      grade: '-'
    }
  ];

  semester6 = [
    {
      code: 'EDI XX09',
      title: 'Digital Business Law',
      points: 7.5,
      complete: false,
      grade: '-'
    },
    {
      code: 'EDI XX10',
      title: 'Digital Business Project',
      points: 15,
      complete: false,
      grade: '-'
    },
    {
      code: 'ELE 1234',
      title: 'Elective',
      points: 7.5,
      complete: false,
      grade: '-'
    },

  ];

  totalAngularPackages;

  onDrop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data,
        event.previousIndex,
        event.currentIndex);
        alert(JSON.stringify(event.container.data));
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex, event.currentIndex);
        this.http.get<any>('https://api.npms.io/v2/search?q=scope:angular').subscribe(data => {
          this.totalAngularPackages = data.total;
alert(this.totalAngularPackages);
          alert(JSON.stringify(event.container.data));
      })
    }
  }
}

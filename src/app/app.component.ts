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
  title = 'BACHELOR OF BUSINESS ADMINISTRATION';
  website = 'https://www.bi.edu/programmes-and-individual-courses/bachelor-programmes/business-administration/';

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
      complete: false,
      type: 'Elective',
      url: 'https://www.bi.edu/study-at-bi/resources-and-opportunities/internship/'
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
    },
    {
      code: 'EXC 3525',
      title: 'Macroeconomics',
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
      grade: '',
      type: 'Programkurs',
      url: 'https://programmeinfo.bi.no/nb/kurs/EXC-3603/2021-host'
    },
    {
      code: 'EXC 3611',
      title: 'International Finance',
      points: 7.5,
      complete: 'false',
      grade: '',
      type: 'Programkurs',
      url: 'https://programmeinfo.bi.no/nb/program/HSBB/2021-host#:~:text=EXC%203611%20International%20Finance',
    },
    {
      code: 'EXC 3630',
      title: 'Managing International Operations',
      points: 7.5,
      complete: 'false',
      grade: '',
      type: 'Programkurs',
      url: 'https://programmeinfo.bi.no/nb/program/HSBB/2021-host#:~:text=EXC%203630%20Managing%20International%20Operations'
    },
    {
      code: 'EXC 3631',
      title: 'International Business Environment',
      points: 7.5,
      complete: 'false',
      grade: '',
      type: 'Programkurs',
      url: 'https://programmeinfo.bi.no/nb/program/HSBB/2021-host#:~:text=EXC%203631%20International%20Business%20Environment'
    },
    {
      code: 'EXC 3602',
      title: 'International Marketing',
      points: 7.5,
      complete: 'false',
      grade: '',
      type: 'Programkurs',
      url: 'https://programmeinfo.bi.no/nb/program/HSBB/2021-host#:~:text=EXC%203602%20International%20Marketing'
    },
    {
      code: 'EXC 3632',
      title: 'Corporate Goverance',
      points: 7.5,
      complete: 'false',
      grade: '',
      type: 'Programkurs',
      url: 'https://programmeinfo.bi.no/nb/program/HSBB/2021-host#:~:text=EXC%203632%20Corporate%20Governance'
    }
  ];

  specialFinance = [
    {
      code: 'EXC 3100',
      title: 'International Finane',
      points: 7.5,
      complete: 'false',
      grade: ''
    },
    {
      code: 'EXC 3410',
      title: 'The Firm',
      points: 7.5,
      complete: 'false',
      grade: ''
    }
  ];

  semester1 = [
    {
      code: 'EXC 3410',
      title: 'The Firm',
      points: 7.5,
      complete: 'true',
      grade: '-',
      type: 'Basiskurs',
      url: 'https://programmeinfo.bi.no/en/course/EXC-3410/2021-autumn/'
    },
    {
      code: 'EXC-3415',
      title: 'Marketing Management',
      points: '7.5',
      complete: 'false',
      grade: '-',
      type: 'Basiskurs',
      url: 'https://programmeinfo.bi.no/nb/kurs/EXC-3415/2021-host'
    },
    {
      code: 'EXC 3452',
      title: 'Financial Reporting and Analysis',
      points: 7.5,
      complete: 'true',
      grade: 'A',
      type: 'Basiskurs',
      url: 'https://www.bi.edu/programmes-and-individual-courses/course-descriptions/financial-reporting-and-analysis/'
    },
    {
      code: 'SPÅ 2901',
      title: 'Business Communications, Culture and Ethics',
      points: 7.5,
      complete: 'true',
      grade: 'C',
      type: 'Basiskurs',
      url: 'https://www.bi.edu/programmes-and-individual-courses/course-descriptions/business-communication-culture-and-ethics/'
    }

  ];
  semester2 = [
    {
      code: 'EXC 3442',
      title: 'Managerial Accounting',
      points: 7.5,
      complete: true,
      grade: 'A',
      type: 'Basiskurs',
      url: ''
    },
    {
      code: 'EXC 2910',
      title: 'Mathematics',
      points: 7.5,
      complete: false,
      grade: '-',
      type: 'Basiskurs',
      url: ''
    },
    {
      code: 'EDI XX02',
      title: 'Digital Value Creation',
      points: 7.5,
      complete: true,
      grade: 'A',
      type: 'Basiskurs',
      url: ''
    },
    {
      code: 'EXC 2904',
      title: 'Statistics',
      points: 7.5,
      complete: true,
      grade: 'A',
      type: 'Basiskurs',
      url: ''
    },
    {
    code: 'EDI XX01',
    title: 'Programming with Yngve',
    points: 7.5,
    complete: 'true',
    grade: 'C',
    type: 'Basiskurs',
    url: ''
  }
  ];
  semester3 = [
    {
      code: 'EXC 3520',
      title: 'Microeconomics',
      points: 7.5,
      complete: true,
      grade: 'A',
      type: 'Basiskurs',
      url: ''
    },
    {
      code: 'EDI XX03',
      title: 'Digital Problem Solving and Task Automation',
      points: 7.5,
      complete: true,
      grade: 'A',
      type: 'Basiskurs',
      url: ''
    },
    {
      code: 'EDI XX04',
      title: 'Influential Communication for Digital Business',
      points: 7.5,
      complete: true,
      grade: 'A',
      type: 'Basiskurs',
      url: ''
    },
    {
      code: 'EDI XX05',
      title: 'Organizing Digitally',
      points: 7.5,
      complete: false,
      grade: '-',
      type: 'Basiskurs',
      url: ''
    }
  ];

  semester4 = [
    {
      code: 'EXC 3505',
      title: 'Strategy',
      points: 7.5,
      complete: false,
      grade: '',
      url: 'https://programmeinfo.bi.no/nb/kurs/EXC-3505/2023-var',
      type: 'Basiskurs'
    },
    {
      code: 'EXC 2953',
      title: 'Organizational Behaviour and Management',
      points: 7.5,
      complete: false,
      grade: '',
      url: 'https://programmeinfo.bi.no/nb/kurs/EXC-2953/2022-var',
      type: 'Basiskurs'
    }

  ];

  semester5 = [
    {
      code: 'EXC',
      title: 'Exchange',
      points: 30,
      complete: false,
      grade: '',
      type: 'Elective',
      url: 'https://www.bi.edu/study-at-bi/resources-and-opportunities/exchange/'
    }
  ];

  semester6 = [
    {
      code: 'EDI XX09',
      title: 'Digital Business Law',
      points: 7.5,
      complete: false,
      grade: ''
    },
    {
      code: 'EDI XX10',
      title: 'Digital Business Project',
      points: 15,
      complete: false,
      grade: ''
    },
    {
      code: 'ELE 1234',
      title: 'Elective',
      points: 7.5,
      complete: false,
      grade: ''
    }
  ];

  totalAngularPackages;

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

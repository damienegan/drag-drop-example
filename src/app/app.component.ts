import { AvailableCoursesService } from './available-courses.service';
import { AvailableBBASpecialisationsService } from './available-bbaspecialisations.service';
import {Component, Input} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { HttpClient } from '@angular/common/http';
import { isNgTemplate } from '@angular/compiler';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { PreloadingStrategy } from '@angular/router';
import { AcademicHistoryService } from './academic-history.service';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
semester1for1111;
semester2for1111;
semester3for1111;
semester1for2222;
semester2for2222;
semester3for2222;
AvailableSemester4CoursesForBBA;
AvailableSemester4CoursesForBDS;
AvailableSemester5CoursesForBBA;
AvailableSemester5CoursesForBDS;
AvailableFinancialSpecialisationsForBBA;
AvailableIntBusSpecialisationsForBBA;
AvailableShipMgtSpecialisationsForBBA;


  constructor(private http: HttpClient, AcademicHistoryService: AcademicHistoryService, AvailableCoursesService:AvailableCoursesService, AvailableBBASpecialisationsService:AvailableBBASpecialisationsService) {
    this.semester1for1111=AcademicHistoryService.getSemester1AcademicHistoryFor('1111');
    this.semester1for2222=AcademicHistoryService.getSemester1AcademicHistoryFor('2222');
    this.semester2for1111=AcademicHistoryService.getSemester2AcademicHistoryFor('1111');
    this.semester2for2222=AcademicHistoryService.getSemester2AcademicHistoryFor('2222');
    this.semester3for1111=AcademicHistoryService.getSemester3AcademicHistoryFor('1111');
    this.semester3for2222=AcademicHistoryService.getSemester3AcademicHistoryFor('2222');
    this.AvailableSemester4CoursesForBBA=AvailableCoursesService.getAvailableSemester4CoursesFor('BBA');
    this.AvailableSemester4CoursesForBDS=AvailableCoursesService.getAvailableSemester4CoursesFor('BDS');
    this.AvailableSemester5CoursesForBBA=AvailableCoursesService.getAvailableSemester5CoursesFor('BBA');
    this.AvailableSemester5CoursesForBDS=AvailableCoursesService.getAvailableSemester5CoursesFor('BDS');
    this.AvailableFinancialSpecialisationsForBBA=AvailableBBASpecialisationsService.getAvailableSpecialisationsFor('Finance');
    this.AvailableIntBusSpecialisationsForBBA=AvailableBBASpecialisationsService.getAvailableSpecialisationsFor('IntBus');
    this.AvailableShipMgtSpecialisationsForBBA=AvailableBBASpecialisationsService.getAvailableSpecialisationsFor('ShipMgt');

  }
selectedStudent = "2222";
selectedSpecialisationKari = "International Business";
selectedSpecialisationOla = "Finance";
selectedCampusKari = "Oslo";
selectedCampusOla = "Bergen";


  website = 'https://www.bi.edu/programmes-and-individual-courses/bachelor-programmes/business-administration/';

  totalPointsSemester1 = 0;
  totalPointsSemester2 = 0;
  totalPointsSemester3 = 0;
  totalPointsSemester4 = 0;
  totalPointsSemester5 = 0;
  totalPointsSemester6 = 0;

  studentRecordKari = [
    {
      ID: "1111",
      Name: "Kari Nordmann",
      Campus: "Oslo",
      Programme: "Bachelor of Business Administration",
      ProgrammeSpec: "International Business",
      degreeProgress: "50",
      gpa: "4.0",
      website: 'https://www.bi.edu/programmes-and-individual-courses/bachelor-programmes/business-administration/'
    }
  ];
    studentRecordOla = [
    {
      ID: "2222",
      Name: "Ola Nordmann",
      Campus: "Oslo",
      Programme: "Bachelor of Data Science for Business",
      ProgrammeSpec: "Finance",
      degreeProgress: "40",
      gpa: "3.5",
      website: 'https://www.bi.edu/programmes-and-individual-courses/bachelor-programmes/Data-Science-for-Business/'
    }
  ];

  semester41111 = [
    {
      code: 'EXC 2953',
      title: 'Organizational Behaviour and Management',
      points: 7.5,
      complete: false,
      grade: '',
      url: 'https://programmeinfo.bi.no/nb/kurs/EXC-2953/2022-var',
      type: 'Basiskurs'
    },
    {
      code: 'Int',
      title: 'Internship',
      points: 15,
      complete: false,
      grade: '',
      url: 'https://programmeinfo.bi.no/nb/kurs/EXC-2953/2022-var',
      type: 'Basiskurs'
    }

  ];

  semester42222 = [
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

  semester51111 = [
    {
      code: 'EXC',
      title: 'EXCHANGE',
      points: 30,
      complete: false,
      grade: '',
      type: 'Elective',
      url: 'https://www.bi.edu/study-at-bi/resources-and-opportunities/exchange/'
    }
  ];

  semester52222 = [
    {
        code: 'ELE 1234',
        title: 'Elective',
        points: 7.5,
        complete: false,
        grade: '',
        space: ''
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

  semester4and5= [
    {}
  ];

  totalAngularPackages;

  onDropOutput(event: CdkDragDrop<string[]>){
    transferArrayItem(event.previousContainer.data,event.container.data,event.previousIndex,
      event.currentIndex);
    alert(JSON.stringify(event.container.data));
  }

  onDrop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data,
        event.previousIndex,
        event.currentIndex);

    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex, event.currentIndex);

          //alert(JSON.stringify(event.container.id)+JSON.stringify(event.container.data));
    }
  }
}

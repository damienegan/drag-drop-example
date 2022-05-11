import { NgSwitch } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AcademicHistoryService {

  constructor() { }

  getSemester1AcademicHistoryFor(student){
    switch(student){
        case '1111':
          return [
            {
              code: 'EXC 3410',
              title: 'The Firm',
              points: 7.5,
              complete: 'true',
              grade: 'A',
              type: 'Obligatorisk',
              url: 'https://programmeinfo.bi.no/en/course/EXC-3410/2021-autumn/'
            },
            {
              code: 'EXC 3415',
              title: 'Marketing Management',
              points: '7.5',
              complete: 'true',
              grade: '-',
              type: 'Obligatorisk',
              transfer: 'Godskrevet mot NHH 2505',
              transferlink: 'https://www.bi.no',
              url: 'https://programmeinfo.bi.no/nb/kurs/EXC-3415/2021-host'
            },
            {
              code: 'EXC 3452',
              title: 'Financial Reporting and Analysis',
              points: 7.5,
              complete: 'true',
              grade: 'B',
              type: 'Obligatorisk',
              url: 'https://www.bi.edu/programmes-and-individual-courses/course-descriptions/financial-reporting-and-analysis/'
            },
            {
              code: 'SPÅ 2901',
              title: 'Business Communications, Culture and Ethics',
              points: 7.5,
              complete: 'true',
              grade: 'C',
              type: 'Obligatorisk',
              url: 'https://www.bi.edu/programmes-and-individual-courses/course-descriptions/business-communication-culture-and-ethics/'
            }

          ];
          case '2222':
            return [
              {
                code: 'EXC 3452',
                title: 'Financial Reporting and Analysis',
                points: 7.5,
                complete: 'true',
                grade: 'A',
                type: 'Obligatorisk',
                url: 'https://www.bi.edu/programmes-and-individual-courses/course-descriptions/financial-reporting-and-analysis/'
              },
              {
                code: 'EXC 3410',
                title: 'The Firm',
                points: 7.5,
                complete: 'true',
                grade: 'A',
                type: 'Obligatorisk',
                url: 'https://programmeinfo.bi.no/en/course/EXC-3410/2021-autumn/'
              },
              {
                code: 'EXC-3415',
                title: 'Marketing Management',
                points: '7.5',
                complete: 'false',
                grade: '-',
                type: 'Obligatorisk',
                url: 'https://programmeinfo.bi.no/nb/kurs/EXC-3415/2021-host'
              },
              {
                code: 'EXC 3400',
                title: 'Programming, Data Extraction and Visualisation',
                points: 7.5,
                complete: 'true',
                grade: 'A',
                type: 'Obligatorisk',
                url: 'https://www.bi.edu/programmes-and-individual-courses/course-descriptions/programming_data_extraction_and_visualisation/'
              }
            ];

    }

  }
  getSemester2AcademicHistoryFor(student){
    switch(student){
        case '1111':
          return [
            {
              code: 'EXC 3442',
              title: 'Managerial Accounting',
              points: 7.5,
              complete: true,
              grade: 'A',
              type: 'Obligatorisk',
              url: ''
            },
            {
              code: 'EXC 2910',
              title: 'Mathematics',
              points: 7.5,
              complete: false,
              grade: '-',
              type: 'Obligatorisk',
              url: ''
            },
            {
              code: 'EDI XX02',
              title: 'Digital Value Creation',
              points: 7.5,
              complete: true,
              grade: 'A',
              type: 'Obligatorisk',
              url: ''
            },
            {
              code: 'EXC 2904',
              title: 'Statistics',
              points: 7.5,
              complete: true,
              grade: 'A',
              type: 'Obligatorisk',
              url: ''
            }
          ];
          case '2222':
          return [
            {
              code: 'EBA 1180',
              title: 'Mathematics for Data Science',
              points: '7.5',
              complete: 'true',
              grade: 'B',
              type: 'Obligatorisk',
              url: 'https://www.bi.edu/programmes-and-individual-courses/course-descriptions/eba-1180/'
            },
            {
              code: 'EXC 3442',
              title: 'Managerial Accounting',
              points: 7.5,
              complete: true,
              grade: 'A',
              type: 'Obligatorisk',
              url: ''
            },
            {
              code: 'EXC 2910',
              title: 'Mathematics',
              points: 7.5,
              complete: false,
              grade: '-',
              type: 'Obligatorisk',
              url: ''
            },
            {
              code: 'EDI XX02',
              title: 'Digital Value Creation',
              points: 7.5,
              complete: true,
              grade: 'A',
              type: 'Obligatorisk',
              url: ''
            },
            {
              code: 'EXC 2904',
              title: 'Statistics',
              points: 7.5,
              complete: true,
              grade: 'A',
              type: 'Obligatorisk',
              url: ''
            }
          ];
        }

  }
  getSemester3AcademicHistoryFor(student){
    switch(student){
        case '1111':
          return [
            {
              code: 'EXC 3442',
              title: 'Managerial Accounting',
              points: 7.5,
              complete: true,
              grade: 'B',
              type: 'Obligatorisk',
              url: ''
            },
            {
              code: 'EXC 2910',
              title: 'Mathematics',
              points: 7.5,
              complete: true,
              grade: 'C',
              type: 'Obligatorisk',
              url: ''
            },
            {
              code: 'EDI XX02',
              title: 'Digital Value Creation',
              points: 7.5,
              complete: false,
              grade: '-',
              type: 'Obligatorisk',
              url: ''
            },
            {
              code: 'EXC 2904',
              title: 'Statistics',
              points: 7.5,
              complete: false,
              grade: '-',
              type: 'Obligatorisk',
              url: ''
            }
          ];
          case '2222':
          return [
            {
              code: 'EXC 3442',
              title: 'Managerial Accounting',
              points: 7.5,
              complete: true,
              grade: 'A',
              type: 'Obligatorisk',
              url: ''
            },
            {
              code: 'EXC 2910',
              title: 'Mathematics',
              points: 7.5,
              complete: false,
              grade: '-',
              type: 'Obligatorisk',
              url: ''
            },
            {
              code: 'EDI XX02',
              title: 'Digital Value Creation',
              points: 7.5,
              complete: true,
              grade: 'A',
              type: 'Obligatorisk',
              url: ''
            },
            {
              code: 'EXC 2904',
              title: 'Statistics',
              points: 7.5,
              complete: true,
              grade: 'B',
              type: 'Obligatorisk',
              url: ''
            }
          ];
        }

  }
}

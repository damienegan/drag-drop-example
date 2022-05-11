import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AvailableCoursesService {

  constructor() { }
  getAvailableSemester4CoursesFor(programme){
    switch(programme){
      case 'BBA':
        return [
          {
            code: 'EXC 3505',
            title: 'Strategy',
            points: 7.5,
            complete: false,
            grade: '',
            url: 'https://programmeinfo.bi.no/nb/kurs/EXC-3505/2023-var',
            type: 'Valgbart'
          },
          {
            code: 'EXC 2953',
            title: 'Organizational Behaviour and Management',
            points: 7.5,
            complete: false,
            grade: '',
            url: 'https://programmeinfo.bi.no/nb/kurs/EXC-2953/2022-var',
            type: 'Valgbart'
          },
          {
            code: 'EXC 3505',
            title: 'Strategy',
            points: 7.5,
            complete: false,
            grade: '',
            url: 'https://programmeinfo.bi.no/nb/kurs/EXC-3505/2023-var',
            type: 'Valgbart'
          },
          {
            code: 'EXC 2953',
            title: 'Organizational Behaviour and Management',
            points: 7.5,
            complete: false,
            grade: '',
            url: 'https://programmeinfo.bi.no/nb/kurs/EXC-2953/2022-var',
            type: 'Valgbart'
          },
          {
            code: 'EXC 3505',
            title: 'Strategy',
            points: 7.5,
            complete: false,
            grade: '',
            url: 'https://programmeinfo.bi.no/nb/kurs/EXC-3505/2023-var',
            type: 'Valgbart'
          },
          {
            code: 'EXC 2953',
            title: 'Organizational Behaviour and Management',
            points: 7.5,
            complete: false,
            grade: '',
            url: 'https://programmeinfo.bi.no/nb/kurs/EXC-2953/2022-var',
            type: 'Valgbart'
          },
          {
            code: 'EXC 3505',
            title: 'Strategy',
            points: 7.5,
            complete: false,
            grade: '',
            url: 'https://programmeinfo.bi.no/nb/kurs/EXC-3505/2023-var',
            type: 'Valgbart'
          },
          {
            code: 'EXC 2953',
            title: 'Organizational Behaviour and Management',
            points: 7.5,
            complete: false,
            grade: '',
            url: 'https://programmeinfo.bi.no/nb/kurs/EXC-2953/2022-var',
            type: 'Valgbart'
          }
        ];
        case 'BDS':
        return [
          {
            code: 'EXC 3505',
            title: 'Strategy',
            points: 7.5,
            complete: false,
            grade: '',
            url: 'https://programmeinfo.bi.no/nb/kurs/EXC-3505/2023-var',
            type: 'Obligatorisk'
          },
          {
            code: 'EXC 2953',
            title: 'Organizational Behaviour and Management',
            points: 7.5,
            complete: false,
            grade: '',
            url: 'https://programmeinfo.bi.no/nb/kurs/EXC-2953/2022-var',
            type: 'Obligatorisk'
          },
          {
            code: 'EXC 2953',
            title: 'Organizational Behaviour and Management',
            points: 7.5,
            complete: false,
            grade: '',
            url: 'https://programmeinfo.bi.no/nb/kurs/EXC-2953/2022-var',
            type: 'Valgbart'
          },
          {
            code: 'EXC 3505',
            title: 'Strategy',
            points: 7.5,
            complete: false,
            grade: '',
            url: 'https://programmeinfo.bi.no/nb/kurs/EXC-3505/2023-var',
            type: 'Valgbart'
          },
          {
            code: 'EXC 2953',
            title: 'Organizational Behaviour and Management',
            points: 7.5,
            complete: false,
            grade: '',
            url: 'https://programmeinfo.bi.no/nb/kurs/EXC-2953/2022-var',
            type: 'Valgbart'
          },
          {
            code: 'EXC 3505',
            title: 'Strategy',
            points: 7.5,
            complete: false,
            grade: '',
            url: 'https://programmeinfo.bi.no/nb/kurs/EXC-3505/2023-var',
            type: 'Valgbart'
          },
          {
            code: 'EXC 2953',
            title: 'Organizational Behaviour and Management',
            points: 7.5,
            complete: false,
            grade: '',
            url: 'https://programmeinfo.bi.no/nb/kurs/EXC-2953/2022-var',
            type: 'Valgbart'
          },
          {
            code: 'EXC 3505',
            title: 'Strategy',
            points: 7.5,
            complete: false,
            grade: '',
            url: 'https://programmeinfo.bi.no/nb/kurs/EXC-3505/2023-var',
            type: 'Valgbart'
          },
          {
            code: 'EXC 2953',
            title: 'Organizational Behaviour and Management',
            points: 7.5,
            complete: false,
            grade: '',
            url: 'https://programmeinfo.bi.no/nb/kurs/EXC-2953/2022-var',
            type: 'Valgbart'
          }
        ];

}
}

getAvailableSemester5CoursesFor(programme){
  switch(programme){
    case 'BBA':
      return [
        {
          code: 'EXC XX01',
          title: 'XX01 - Strategy',
          points: 7.5,
          complete: false,
          grade: '',
          url: 'https://programmeinfo.bi.no/nb/kurs/EXC-3505/2023-var',
          type: 'Obligatorisk'
        },
        {
          code: 'EXC XX02',
          title: 'XX02 - Organizational Behaviour and Management',
          points: 7.5,
          complete: false,
          grade: '',
          url: 'https://programmeinfo.bi.no/nb/kurs/EXC-2953/2022-var',
          type: 'Obligatorisk'
        }
      ];
      case 'BDS':
      return [
        {
          code: 'EXC 35XX',
          title: '35 Strategy',
          points: 7.5,
          complete: false,
          grade: '',
          url: 'https://programmeinfo.bi.no/nb/kurs/EXC-3505/2023-var',
          type: 'Obligatorisk'
        },
        {
          code: 'EXC 29XX',
          title: '29 Organizational Behaviour and Management',
          points: 7.5,
          complete: false,
          grade: '',
          url: 'https://programmeinfo.bi.no/nb/kurs/EXC-2953/2022-var',
          type: 'Obligatorisk'
        },
        {
          code: 'EXC',
          title: 'Exchange',
          points: 30,
          complete: false,
          grade: '',
          url: 'https://programmeinfo.bi.no/nb/kurs/EXC-3505/2023-var',
          type: 'Elective'
        }
      ];
}
}
}

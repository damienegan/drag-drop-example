import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AvailableBBASpecialisationsService {

  constructor() { }
  getAvailableSpecialisationsFor(specialisation){
    switch(specialisation){
      case 'Finance':
        return [
          {
          code: 'EDI FI01',
          title: 'Finance 1',
          points: 7.5,
          complete: false
        },
        {
          code: 'EDI FI02',
          title: 'Finance 2',
          points: 7.5,
          complete: false
        }
      ];
      case 'IntBus':
        return [
          {
          code: 'EDI IB01',
          title: 'International Business 1',
          points: 7.5,
          complete: false
        },
        {
          code: 'EDI IB02',
          title: 'International Business 2',
          points: 7.5,
          complete: false
        }
      ];
      case 'ShipMgt':
        return [
          {
          code: 'EDI SM01',
          title: 'Ship Management 1',
          points: 7.5,
          complete: false
        },
        {
          code: 'EDI SM01',
          title: 'Ship Management 2',
          points: 7.5,
          complete: false
        }
      ];
    }
}
}

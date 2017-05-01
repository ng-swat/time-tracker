import { TestBed, inject } from '@angular/core/testing';

import { MyProjectsServiceService } from './my-projects-service.service';

describe('MyProjectsServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyProjectsServiceService]
    });
  });

  it('should ...', inject([MyProjectsServiceService], (service: MyProjectsServiceService) => {
    expect(service).toBeTruthy();
  }));
});

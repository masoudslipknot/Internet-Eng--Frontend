import {Injectable} from '@angular/core';

@Injectable()
export class ChecktableService {
  checkstatus = true;

  constructor() {
  }

  getcheckstatus() {
    return this.checkstatus;
  }

}

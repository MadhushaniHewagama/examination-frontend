import {Injectable} from '@angular/core';
import {AuthService} from './auth.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {SimpleMessage} from './user-services.service';

@Injectable()
export class ModuleService {

  private moduleServiceEndpoint = 'http://localhost:3000/modules/';
  private userServiceEndpoint = 'http://localhost:3000/users';

  constructor(private authService: AuthService,
              private http: HttpClient) {
  }

  getModuleData(moduleId: string) {
    const params = {
      moduleId: moduleId
    };
    return this.http.get(this.moduleServiceEndpoint + 'moduleData', {params: params}) as Observable<ModuleDataMessage>;
  }

  updateResults(moduleId: string, result: any) {
    const params = {
      moduleId: moduleId,
      userId: this.authService.getUserId(),
      results: result
    };
    return this.http.post(this.moduleServiceEndpoint + 'updateResults', params) as Observable<SimpleMessage>;
  }

}

interface ModuleDataMessage {
  success: boolean;
  msg: any;
}


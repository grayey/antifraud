import {Injectable} from '@angular/core';
import {ApiHandlerService} from '../api-handler.service';
import {ResolveApiUrls} from '../../shared/magic-methods/resolveApiUrls';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class SharedService extends ResolveApiUrls {

  constructor(private setupService: ApiHandlerService) {
    super();
  }


  /**
   *
   * @param entityname
   * @param action
   * @param data
   * @param entityId
   * @returns {Observable<any>}
   */
  public processEntity(entityname, action, data?: any, entityId?): Observable<any> {
    const url: string = this.resolveSetUpEntityUrl(entityname).url;
    switch (action) {
      case 'get':
        if (this.resolveSetUpEntityUrl(entityname).limit) {
          const limit = this.resolveSetUpEntityUrl(entityname).limit;
          return this.getAllOfEntity(url, limit);
        }
        return (entityId) ? this.getEntityById(url, entityId) : this.getAllOfEntity(url);
      case 'update':
        return this.createOrUpdateEntity(url, data, entityId);
      case 'create':
        return this.createOrUpdateEntity(url, data);
      case 'toggle':
        return this.toggleEntity(url, entityId);
      case 'confirm':
        return this.toggleEntity(url, 'confirm', entityId);
      default:
        return Observable.from('Entity could not be processed!');
    }
  }

  /**
   * /**\
   *
   * @param path
   * @param limit
   * @returns {Observable<any>}
   */
  private getAllOfEntity(path, limit?): Observable<any> {
    return (limit) ? this.setupService.get(path, limit) : this.setupService.get(path);
  }

  /**
   *
   *
   * @param path
   * @param entityId
   * @returns {Observable<any>}
   */
  private getEntityById(path, entityId): Observable<any> {
    const url = `${path}/${entityId}`;
    return this.setupService.get(url);
  }

  /**
   *
   *
   * @param path
   * @param data
   * @param entityId
   * @returns {Observable<any>}
   */
  private createOrUpdateEntity(path, data, entityId?): Observable<any> {
    if (entityId) {
      path += `/${entityId}`;
      return this.setupService.put(path, data);
    }

    return this.setupService.post(path, data);
  }

  /**
   * /**\
   *
   * @param path
   * @param entityId
   * @param {string} action
   * @returns {Observable<any>}
   */
  private toggleEntity(path, entityId, action: string = 'toggle'): Observable<any> {
    let url = `${path}/${entityId}/${action}`;
    if (action !== 'toggle') {
      url = `${path}/${action}/${entityId}`;
    }
    return this.setupService.put(url);
  }


}

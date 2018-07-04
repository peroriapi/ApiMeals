import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import { user } from '../Interfaces/User/user.model';

const BASE_URL = environment.apiBase + '/User';


@Injectable()
export class UserService {

    public user: user;

    constructor(private http: Http) {

    }

    getUser(id: number){
        const headers = new Headers({
            'X-Requested-With': 'XMLHttpRequest'    
        });
        const options = new RequestOptions({ withCredentials: true });

        
        return this.http.get(BASE_URL + '/' + id, options)
            .map(response=>{
                this.user =response.json();
                return this.user;
            })
            .catch(error=>this.handleError(error));
        
    }


    private handleError(error: any) {
        console.error(error);
        return Observable.throw('Server error (' + error.status + '): ' + error.text());
    }
}
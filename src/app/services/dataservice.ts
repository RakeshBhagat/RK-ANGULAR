import {Injectable} from '@angular/core';
import {USER_DATA} from '../data/user-data'  
import { Http } from '@angular/http';
import { User } from '../model/user';
import 'rxjs/add/operator/map';

@Injectable()


export class DataService
{
    constructor(private http : Http){}
    public getUserData()
    {
            return USER_DATA; 
    }

    getHttpData()
    {
       // return this.http.get("assets/user-data.json")
       //.map(response=><User[]>response.json().userdata);
        return this.http.get( "https://sg-rk-project.firebaseio.com/userdata.json")
        .map(response=><User[]>response.json());
    }
}
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ContestService {
    apiparth='http://ec2-107-21-69-52.compute-1.amazonaws.com:9000/api/'

    constructor (private http: Http) {
    }

    getContests(){
        return this.http.get(this.apiparth+'contests')
        .map(res =>{return res.json()})
    }

    getContestsById(id){
        return this.http.get(this.apiparth+'contest/'+id)
        .map(res =>{return res.json()})
    }

    addContest(newContest){
        var headers= new Headers();
        headers.append('Content-Type','application/json');
        return this.http.post(this.apiparth+'addcontest',JSON.stringify(newContest),{headers:headers})
        .map(res => res.json())
    }

    removeContest(id){
        return this.http.delete(this.apiparth+'removecontest/'+id)
        .map(res => res.json())
    }

    updateContest(contest){
        let id=contest._id;
        var headers= new Headers();
        delete contest._id;
        headers.append('Content-Type','application/json');
        return this.http.put(this.apiparth+'updatecontest/'+id,JSON.stringify(contest),{headers:headers})
        .map(res => res.json())
    }

}

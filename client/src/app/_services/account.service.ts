import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import{map} from 'rxjs/operators';
import { User } from '../_model/user';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  baseUrl='https://localhost:44327/api/';
  private curentUserSource= new ReplaySubject<User>(1);
  currentUser$=this.curentUserSource.asObservable();
  constructor(private http:HttpClient) { }

  login(model:any){
    return this.http.post(this.baseUrl+'account/login' ,model).pipe(
      map((response:any)=>{
        const user=response;
        if(user){
          localStorage.setItem('user',JSON.stringify(user));
          this.curentUserSource.next(user);
        }
      })
    )
}

register(model:any){
  return this.http.post(this.baseUrl+'account/register',model).pipe(
    map((user:any)=>{
      if(user){
        localStorage.setItem('user',JSON.stringify(user));
        this.curentUserSource.next(user)
      }
    
    })
  )
}

setCurrentUSer(user:User){
  this.curentUserSource.next(user);

}
logout(){
  localStorage.removeItem('user');
  this.curentUserSource.next();
}


}


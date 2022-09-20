import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ticket } from './ticket';


@Injectable({
  providedIn: 'root'
})
export class TicketsService {
  ticketList : any[] = [];
  constructor(private http: HttpClient) { }

  // Recupere tout les tickets
  // Lien de la source https://book.angular.fr/services-et-http/requete-http 
  getTicketList():Observable<Ticket[]> {
    return this.http.get<Ticket[]>('http://apinautilus.test/api/ticket');
  } 

  //Lien de la source https://www.youtube.com/watch?v=oTObLWih_EA
  addTicket(imatriculation:string){
    return this.http.post<Ticket>('http://apinautilus.test/api/ticket', imatriculation).subscribe((res)=>{
      window.location.reload();
    });
    
    
  }

  deleteTicket(id:number){
    return this.http.delete<Ticket>('http://apinautilus.test/api/ticket/'+id).subscribe((res)=>{
      window.location.reload();
    });
  }

  showTicket(id:number):Observable<Ticket[]> {
    return this.http.get<Ticket[]>('http://apinautilus.test/api/ticket/'+id)

  }
}

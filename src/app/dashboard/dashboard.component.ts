import { Component, OnInit } from '@angular/core';
import { Ticket } from './ticket/ticket';
import { TicketsService } from './ticket/tickets.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DataIdDirective } from './data-id.directive';


@Component({
  selector: 'app-dashboard',
  templateUrl:'./dashboard.html',
})

export class DashboardComponent implements OnInit {
  //recuperation de la liste des ticket par le service
  ticketList : any[] = [];
  constructor(private ticket: TicketsService, private router:Router,) { 
  }

  ngOnInit(): void {
    //Lien de la source https://book.angular.fr/services-et-http/requete-http 
    this.ticket.getTicketList().subscribe((ticketList : Ticket[]) =>{
      this.ticketList = ticketList;
    });
  }
  
  onSubmit(f:NgForm):void{
    if(f.valid){
      let imatriculation = f.value ;
      //envoyer la data a l'api
      this.ticket.addTicket(imatriculation);
    }
    
  }
}

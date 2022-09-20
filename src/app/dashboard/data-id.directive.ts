import { Directive, ElementRef,HostListener } from '@angular/core';
import { Ticket } from './ticket/ticket';
import { TicketsService } from './ticket/tickets.service';

@Directive({
  selector: '[appDataId]'
})
export class DataIdDirective {
  ticketList : any[] = [];
  constructor(private el:ElementRef , private ticket:TicketsService) { }

  @HostListener('click') onClick(){
    let choix = this.el.nativeElement.getAttribute('data-choix');
    let id = this.el.nativeElement.id;
    //en fonction du bouton séléctionné la directive dirige l'action vers la function choisis.
    if(choix == 'delete'){
      this.deleteTicketById(id);
    }else if(choix == 'edit'){
      this.showTicketById(id);
    }
  }

  deleteTicketById(id:number){
    this.ticket.deleteTicket(id);
  }

  //Permet de voir le ticket sleectionné.
  // TODO Faire afficher la valeur actuel dans le input #actuel + update de la data
  showTicketById(id:number){
    //Recuperation du ticket avec l'id
    let findTicket = this.ticket.showTicket(id);
    findTicket.subscribe((ticketList : Ticket[]) =>{
      this.ticketList = ticketList;
      console.log(this.ticketList);
      //recuperer l'element cibler
    });
    
    
  }
}

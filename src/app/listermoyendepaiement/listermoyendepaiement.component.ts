import { OnInit, Component } from '@angular/core';
import { MoyendepaiementService } from '../moyendepaiement.service';


@Component({
    selector: 'app-listermoyendepaiement',
    templateUrl: './listermoyendepaiement.component.html',
    styleUrls: ['./listermoyendepaiement.component.css']
})
export class ListermoyendepaiementComponent implements OnInit {
     id: number;
    pageMoyensdePaiment: any;
    constructor(private service: MoyendepaiementService) { }

    ngOnInit() {
        this.service.getMoyenDePaiment()
            .subscribe(data => {
                this.pageMoyensdePaiment = data;
            }, err => {
                console.log(err);
            });
    }
}
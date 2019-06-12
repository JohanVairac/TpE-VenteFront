import { Component } from '@angular/core';
import { PersonneService } from '../personne.service';
import { ClientService } from '../client.service';

@Component({
	selector: 'app-ajouterclient',
	templateUrl: './ajouterclient.component.html',
	styleUrls: ['./ajouterclient.component.css']
})
export class AjouterclientComponent {

	constructor(private service: ClientService) { }

	client = {
		nom: '',
		prenom: '',
		age: 0,
		email: '',
		mdp: '',
	};
	saveClient() {
		this.service.saveClient(this.client)
			.subscribe(data => {
				this.client.nom = '',
					this.client.prenom = '',
					this.client.age = 0,
					this.client.email = '',
					this.client.mdp = '';

			});


	}
}


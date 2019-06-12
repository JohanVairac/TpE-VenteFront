import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonneService {
	saveClient(client: { nom: string; prenom: string; age: number; email: string; mdp: string; }) {
		throw new Error("Method not implemented.");
	}

  constructor() { }
}

/**
 * Collègue utilisateur de l'application.
 */
export class Collegue {
  id:number;
  nom: string;
  prenom: string;
  email: string;
  motDePasse: string;
  roles: string[];
  manager:Collegue

  constructor(params: any) {
    Object.assign(this, params);
  }

  estAnonyme(): boolean {
    return this.email === undefined;
  }

}

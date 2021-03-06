import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Mission } from '../models/mission';

@Injectable({
  providedIn: 'root'
})
export class MissionService {

  subjectMissionSelectionne = new Subject<Mission>()
  
  publierMission(mission: Mission): void {
    this.subjectMissionSelectionne.next(mission); 
  }

  abonnerMissionSelectionne(): Observable<Mission> {
    return this.subjectMissionSelectionne.asObservable();
  }
  
  
  constructor(private http: HttpClient) { }

  listeMissions(idCollegue: number): Observable<Mission[]> {
    return this.http.get<Mission[]>(`${environment.baseUrl}missions/${idCollegue}`)
  }

  listeMissionsManager(idManager: number): Observable<Mission[]> {
    return this.http.get<Mission[]>(`${environment.baseUrl}missions/manager/${idManager}`)
  }

  demanderMission(idCollegue: number, mission: Mission): Observable<Mission> {
    return this.http.post<Mission>(`${environment.baseUrl}missions/${idCollegue}`, mission)
  }

  modifierMission(idMission: number, mission: Mission): Observable<Mission> {
    return this.http.patch<Mission>(`${environment.baseUrl}missions/${idMission}`, mission)
  }

  validationMission(idMission: number, valide: boolean, idManager: number): Observable<Mission[]> {
    return this.http.patch<Mission[]>(`${environment.baseUrl}missions/manager/${idManager}`, { "id": idMission, "valide": valide })
  }


  supprimerMission(id:number):Observable<Mission[]> {
    return this.http.delete<Mission[]>(`${environment.baseUrl}missions/${id}`)
  }

  traitementNuit(){
    return this.http.patch(`${environment.baseUrl}missions/nuit`,null)
  }

  getMission(id: number): Observable<Mission>{
    return this.http.get<Mission>(`${environment.baseUrl}missions?id=${id}`);
  }

}

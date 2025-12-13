import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ManualEntry } from '../models/manual-entry.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ManualEntryService {

  private api = `${environment.apiUrl}/manual-entries`;

  constructor(private http: HttpClient) {}

  create(entry: ManualEntry) {
    return this.http.post(this.api, entry);
  }

  list() {
    return this.http.get<ManualEntry[]>(this.api);
  }
}

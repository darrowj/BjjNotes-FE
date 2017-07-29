import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { Note } from './note';

@Injectable()
export class NotesService {

  private _notesUrl = 'http://127.0.0.1:8080/Notes';
  private _noteCountUrl = 'http://localhost:8080/NoteCount';
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http) { }

  getNotes(): Observable<Note[]> {
    return this.http.get(this._notesUrl)
      .map((res: Response) => {
        let notes = res.json();
        return notes;
      })
      .catch(this.handleError);

  }

  getNote(id: string): Observable<Note> {
    return this.http.get(this._notesUrl  + '/' + id)
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }

  public deleteNoteById(noteId: string)  : Observable<string> {
    return this.http.delete(this._notesUrl  + '/' + noteId)
      .map((res: Response) => res)
      .catch(this.handleError);
  }

  getNoteCount(): Observable<string> {
    return this.http.get(this._noteCountUrl)
      .map((res: Response) => res.text())
      .catch(this.handleError);
  }

  insertNote(note: Note) : Observable<Note> {
    return this.http.post(this._notesUrl, note)
      .map((res: Response) => {
        let note = res.json();
        console.log('Insert Note status: ' + note);
        return note;
      })
      .catch(this.handleError);
  }

  updateNote(note: Note) : Observable<Note> {
    return this.http.put(this._notesUrl, note)
      .map((res: Response) => {
        console.log('Update Note return: ' + res.json());
        let note = res.json();
        return note;
      })
      .catch(this.handleError);
  }



  private handleError(error: Response) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
  /*
   getCustomers() : Observable<ICustomer[]> {
   return this.http.get(this.baseUrl)
   .map((res: Response) => {
   let customers = res.json();
   this.calculateCustomersOrderTotal(customers);
   return customers;
   })
   .catch(this.handleError);
   }

   getCustomersPage(page: number, pageSize: number) : Observable<IPagedResults<ICustomer[]>> {
   return this.http.get(`${this.baseUrl}/page/${page}/${pageSize}`)
   .map((res: Response) => {
   const totalRecords = +res.headers.get('x-inlinecount');
   let customers = res.json();
   this.calculateCustomersOrderTotal(customers);
   return {
   results: customers,
   totalRecords: totalRecords
   };
   })
   .catch(this.handleError);
   }

   getCustomer(id: string) : Observable<ICustomer> {
   return this.http.get(this.baseUrl + '/' + id)
   .map((res: Response) => res.json())
   .catch(this.handleError);
   }

   insertCustomer(customer: ICustomer) : Observable<ICustomer> {
   return this.http.post(this.baseUrl, customer)
   .map((res: Response) => {
   const data = res.json();
   console.log('insertCustomer status: ' + data.status);
   return data.customer;
   })
   .catch(this.handleError);
   }

   updateCustomer(customer: ICustomer) : Observable<ICustomer> {
   return this.http.put(this.baseUrl + '/' + customer._id, customer)
   .map((res: Response) => {
   const data = res.json();
   console.log('updateCustomer status: ' + data.status);
   return data.customer;
   })
   .catch(this.handleError);
   }

   deleteCustomer(id: string) : Observable<boolean> {
   return this.http.delete(this.baseUrl + '/' + id)
   .map((res: Response) => res.json().status)
   .catch(this.handleError);
   }

   //Not used but could be called to pass "options" (3rd parameter) to
   //appropriate POST/PUT/DELETE calls made with http
   getRequestOptions() {
   const csrfToken = ''; //would retrieve from cookie or from page
   const options = new RequestOptions({
   headers: new Headers({ 'x-xsrf-token': csrfToken })
   });
   return options;
   }

   getStates(): Observable<IState[]> {
   return this.http.get('/api/states')
   .map((res: Response) => res.json())
   .catch(this.handleError);
   }

   calculateCustomersOrderTotal(customers: ICustomer[]) {
   for (let customer of customers) {
   if (customer && customer.orders) {
   let total = 0;
   for (let order of customer.orders) {
   total += (order.price * order.quantity);
   }
   customer.orderTotal = total;
   }
   }
   }

   private handleError(error: any) {
   console.error('server error:', error);
   if (error instanceof Response) {
   let errMessage = '';
   try {
   errMessage = error.json().error;
   } catch(err) {
   errMessage = error.statusText;
   }
   return Observable.throw(errMessage);
   // Use the following instead if using lite-server
   //return Observable.throw(err.text() || 'backend server error');
   }
   return Observable.throw(error || 'Node.js server error');
   }


   */


}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PersonTableComponent } from './components/person-table/person-table.component';  
import { Person } from './shared/interfaces/person';
import { EventBindExampleComponent } from './components/event-bind-example/event-bind-example.component';

@Component({
  selector: 'app-root',
  imports: [PersonTableComponent, EventBindExampleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = 'Markos';

  // Step 1 : One way binding data
  person = {
    givenName: 'Markos',
    surName: 'Karampatsis',
    age: 52,
    email:'marka@aueb.gr'
  }

  // Step 3: Component Input

  person0: Person = {
    givenName: "Christodoulos",
    surName: "Fragioudakis",
    age:55,
    email: "chr@aueb.gr",
    address: "Athens, Greece"
  }

  person1: Person= {
    givenName: "John",
    surName: "Doe",
    age: 32,
    email: "jo@aueb.gr",
    address: "Piraeus, Greece"
  }

  users: Person[] = [{
    "givenName": "Joanna",
    "surName": "O' Hanvey",
    "age": 1,
    "email": "johanvey0@bbc.co.uk",
    "address": "PO Box 32118"
  }, {
    "givenName": "Remington",
    "surName": "Rihosek",
    "age": 2,
    "email": "rrihosek1@jiathis.com",
    "address": "20th Floor"
  }, {
    "givenName": "Cacilia",
    "surName": "Scaife",
    "age": 3,
    "email": "cscaife2@nature.com",
    "address": "Room 452"
  }, {
    "givenName": "Timoteo",
    "surName": "Vickerman",
    "age": 4,
    "email": "tvickerman3@google.ca",
    "address": "Room 586"
  }, {
    "givenName": "Roddy",
    "surName": "Docwra",
    "age": 5,
    "email": "rdocwra4@mit.edu",
    "address": "PO Box 84539"
  }, {
    "givenName": "Roanne",
    "surName": "Atcock",
    "age": 6,
    "email": "ratcock5@latimes.com",
    "address": "PO Box 24116"
  }, {
    "givenName": "Joanne",
    "surName": "Batho",
    "age": 7,
    "email": "jbatho6@zimbio.com",
    "address": "6th Floor"
  }, {
    "givenName": "Lane",
    "surName": "MacKinnon",
    "age": 8,
    "email": "lmackinnon7@devhub.com",
    "address": "Suite 39"
  }, {
    "givenName": "Wyatan",
    "surName": "Galea",
    "age": 9,
    "email": "wgalea8@slideshare.net",
    "address": "Apt 1961"
  }, {
    "givenName": "Bette",
    "surName": "McWard",
    "age": 10,
    "email": "bmcward9@skyrock.com",
    "address": "Suite 70"
  }, {
    "givenName": "Katherina",
    "surName": "Gaylor",
    "age": 11,
    "email": "kgaylora@plala.or.jp",
    "address": "Apt 293"
  }, {
    "givenName": "Daffi",
    "surName": "Scudamore",
    "age": 12,
    "email": "dscudamoreb@a8.net",
    "address": "Suite 6"
  }, {
    "givenName": "Cybill",
    "surName": "Hamper",
    "age": 13,
    "email": "champerc@nasa.gov",
    "address": "15th Floor"
  }, {
    "givenName": "Delmore",
    "surName": "Frankes",
    "age": 14,
    "email": "dfrankesd@bluehost.com",
    "address": "Suite 32"
  }, {
    "givenName": "Rodrique",
    "surName": "Vanyashin",
    "age": 15,
    "email": "rvanyashine@cdc.gov",
    "address": "Room 632"
  }, {
    "givenName": "Oralla",
    "surName": "Wearn",
    "age": 16,
    "email": "owearnf@cpanel.net",
    "address": "PO Box 4680"
  }, {
    "givenName": "Madella",
    "surName": "Sigert",
    "age": 17,
    "email": "msigertg@walmart.com",
    "address": "Room 872"
  }, {
    "givenName": "Adoree",
    "surName": "Chitter",
    "age": 18,
    "email": "achitterh@google.com",
    "address": "Apt 1465"
  }, {
    "givenName": "Matthus",
    "surName": "Payler",
    "age": 19,
    "email": "mpayleri@cisco.com",
    "address": "4th Floor"
  }, {
    "givenName": "Anatol",
    "surName": "Collingham",
    "age": 20,
    "email": "acollinghamj@wix.com",
    "address": "Suite 3"
  }]
  

}

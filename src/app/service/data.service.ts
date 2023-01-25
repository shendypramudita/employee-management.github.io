import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class DataService {

  paginationEmployee = new BehaviorSubject<any>(null);

  constructor(private http: HttpClient
  ) { }

  private url = "https://jsonplaceholder.typicode.com/todos";

  getList(): Promise<any> {
    const url = `${this.url}`;
    return this.http.get(url)
      .toPromise()
      .catch(this.handleError);
  }
  // handler for error in URL
  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }

  employeeData(){

    // username: 'string',
    //   firstName:'string',
    //   lastName:'string',
    //   email:'string',
    //   birthDate:'datetime',
    //   basicSalary:'double',
    //   status:'string',
    //   group:'string',
    //   description:'datetime'

    let employeedata:any = [
      {
        'id': 1,
        'username': 'Clare',
        'firstName': 'Clare',
        'lastName': 'Cornau',
        'email': 'ccornau0@bigcartel.com',
        'birthDate':'1990-01-01 00:00:00',
        'basicSalary':'5000000',
        'status':'single',
        'group':'IT',
        'description':'1990-01-01 00:00:00'
      },
      {
        'id': 2,
        'username': 'Edouard',
        'firstName': 'Edouard',
        'lastName': 'Elsmore',
        'email': 'eelsmore1@goo.gl',
        'birthDate':'1990-01-01 00:00:00',
        'basicSalary':'5000000',
        'status':'single',
        'group':'IT',
        'description':'1990-01-01 00:00:00'
      },
      {
        'id': 3,
        'username': 'Aeriel',
        'firstName': 'Aeriel',
        'lastName': 'Elldred',
        'email': 'aelldred2@archive.org',
        'birthDate':'1990-01-01 00:00:00',
        'basicSalary':'5000000',
        'status':'single',
        'group':'IT',
        'description':'1990-01-01 00:00:00'
      },
      {
        'id': 4,
        'username': 'Abagael',
        'firstName': 'Abagael',
        'lastName': 'Meachem',
        'email': 'ameachem3@columbia.edu',
        'birthDate':'1990-01-01 00:00:00',
        'basicSalary':'5000000',
        'status':'single',
        'group':'IT',
        'description':'1990-01-01 00:00:00'
      },
      {
        'id': 5,
        'username': 'Jeremiah',
        'firstName': 'Jeremiah',
        'lastName': 'Hadwen',
        'email': 'jhadwen4@vkontakte.ru',
        'gender': 'Male',
        'nationality': 'Mongolia'
      },
      {
        'id': 6,
        'username': 'Rollin',
        'firstName': 'Rollin',
        'lastName': 'Wainscoat',
        'email': 'rwainscoat5@thetimes.co.uk',
        'birthDate':'1990-01-01 00:00:00',
        'basicSalary':'5000000',
        'status':'single',
        'group':'IT',
        'description':'1990-01-01 00:00:00'
      },
      {
        'id': 7,
        'username': 'Micah',
        'firstName': 'Micah',
        'lastName': 'Braddock',
        'email': 'mbraddock6@yellowbook.com',
        'birthDate':'1990-01-01 00:00:00',
        'basicSalary':'5000000',
        'status':'single',
        'group':'IT',
        'description':'1990-01-01 00:00:00'
      },
      {
        'id': 8,
        'username': 'Jayme',
        'firstName': 'Jayme',
        'lastName': 'Crotty',
        'email': 'jcrotty7@opensource.org',
        'gender': 'Male',
        'nationality': 'Niger'
      },
      {
        'id': 9,
        'username': 'Margo',
        'firstName': 'Margo',
        'lastName': 'Braker',
        'email': 'mbraker8@yahoo.co.jp',
        'birthDate':'1990-01-01 00:00:00',
        'basicSalary':'5000000',
        'status':'single',
        'group':'IT',
        'description':'1990-01-01 00:00:00'
      },
      {
        'id': 10,
        'username': 'Bertie',
        'firstName': 'Bertie',
        'lastName': 'Bosman',
        'email': 'bbosman9@google.co.jp',
        'birthDate':'1990-01-01 00:00:00',
        'basicSalary':'5000000',
        'status':'single',
        'group':'IT',
        'description':'1990-01-01 00:00:00'
      },
      {
        'id': 11,
        'username': 'Darelle',
        'firstName': 'Darelle',
        'lastName': 'Rowlands',
        'email': 'drowlandsa@slate.com',
        'birthDate':'1990-01-01 00:00:00',
        'basicSalary':'5000000',
        'status':'single',
        'group':'IT',
        'description':'1990-01-01 00:00:00'
      },
      {
        'id': 12,
        'username': 'Neile',
        'firstName': 'Neile',
        'lastName': 'Keets',
        'email': 'nkeetsb@canalblog.com',
        'birthDate':'1990-01-01 00:00:00',
        'basicSalary':'5000000',
        'status':'single',
        'group':'IT',
        'description':'1990-01-01 00:00:00'
      },
      {
        'id': 13,
        'username': 'Shari',
        'firstName': 'Shari',
        'lastName': 'Bussen',
        'email': 'sbussenc@so-net.ne.jp',
        'birthDate':'1990-01-01 00:00:00',
        'basicSalary':'5000000',
        'status':'single',
        'group':'IT',
        'description':'1990-01-01 00:00:00'
      },
      {
        'id': 14,
        'username': 'Arron',
        'firstName': 'Arron',
        'lastName': 'Drivers',
        'email': 'adriversd@com.com',
        'birthDate':'1990-01-01 00:00:00',
        'basicSalary':'5000000',
        'status':'single',
        'group':'IT',
        'description':'1990-01-01 00:00:00'
      },
      {
        'id': 15,
        'username': 'Carola',
        'firstName': 'Carola',
        'lastName': 'Balasin',
        'email': 'cbalasine@blogger.com',
        'birthDate':'1990-01-01 00:00:00',
        'basicSalary':'5000000',
        'status':'single',
        'group':'IT',
        'description':'1990-01-01 00:00:00'
      },
      {
        'id': 16,
        'username': 'Clarinda',
        'firstName': 'Clarinda',
        'lastName': 'Barrick',
        'email': 'cbarrickf@t-online.de',
        'birthDate':'1990-01-01 00:00:00',
        'basicSalary':'5000000',
        'status':'single',
        'group':'IT',
        'description':'1990-01-01 00:00:00'
      },
      {
        'id': 17,
        'username': 'Inglis',
        'firstName': 'Inglis',
        'lastName': 'Treweela',
        'email': 'itreweelag@tripod.com',
        'birthDate':'1990-01-01 00:00:00',
        'basicSalary':'5000000',
        'status':'single',
        'group':'IT',
        'description':'1990-01-01 00:00:00'
      },
      {
        'id': 18,
        'username': 'Yardley',
        'firstName': 'Yardley',
        'lastName': 'Georgeot',
        'email': 'ygeorgeoth@360.cn',
        'birthDate':'1990-01-01 00:00:00',
        'basicSalary':'5000000',
        'status':'single',
        'group':'IT',
        'description':'1990-01-01 00:00:00'
      },
      {
        'id': 19,
        'username': 'Hestia',
        'firstName': 'Hestia',
        'lastName': 'Palffrey',
        'email': 'hpalffreyi@nba.com',
        'birthDate':'1990-01-01 00:00:00',
        'basicSalary':'5000000',
        'status':'single',
        'group':'IT',
        'description':'1990-01-01 00:00:00'
      },
      {
        'id': 20,
        'username': 'Gwendolyn',
        'firstName': 'Gwendolyn',
        'lastName': 'Mordon',
        'email': 'gmordonj@uiuc.edu',
        'birthDate':'1990-01-01 00:00:00',
        'basicSalary':'5000000',
        'status':'single',
        'group':'IT',
        'description':'1990-01-01 00:00:00'
      },
      {
        'id': 21,
        'username': 'Brianna',
        'firstName': 'Brianna',
        'lastName': 'Mckay',
        'email': 'Brianna@bigcartel.com',
        'birthDate':'1990-01-01 00:00:00',
        'basicSalary':'5000000',
        'status':'single',
        'group':'IT',
        'description':'1990-01-01 00:00:00'
      },
      {
        'id': 22,
        'username': 'Sharon',
        'firstName': 'Sharon',
        'lastName': 'Monroe',
        'email': 'Sharon@goo.gl',
        'birthDate':'1990-01-01 00:00:00',
        'basicSalary':'5000000',
        'status':'single',
        'group':'IT',
        'description':'1990-01-01 00:00:00'
      },
      {
        'id': 23,
        'username': 'Richard',
        'firstName': 'Richard',
        'lastName': 'Mooney',
        'email': 'Richard@archive.org',
        'birthDate':'1990-01-01 00:00:00',
        'basicSalary':'5000000',
        'status':'single',
        'group':'IT',
        'description':'1990-01-01 00:00:00'
      },
      {
        'id': 24,
        'username': 'Brock',
        'firstName': 'Brock',
        'lastName': 'Owens',
        'email': 'Brock@columbia.edu',
        'birthDate':'1990-01-01 00:00:00',
        'basicSalary':'5000000',
        'status':'single',
        'group':'IT',
        'description':'1990-01-01 00:00:00'
      },
      {
        'id': 25,
        'username': 'Isabelle',
        'firstName': 'Isabelle',
        'lastName': 'Wolf',
        'email': 'Isabelle@vkontakte.ru',
        'gender': 'Male',
        'nationality': 'Mongolia'
      },
      {
        'id': 26,
        'username': 'Isaac',
        'firstName': 'Isaac',
        'lastName': 'Bullock',
        'email': 'Isaac@thetimes.co.uk',
        'birthDate':'1990-01-01 00:00:00',
        'basicSalary':'5000000',
        'status':'single',
        'group':'IT',
        'description':'1990-01-01 00:00:00'
      },
      {
        'id': 27,
        'username': 'Phelan',
        'firstName': 'Phelan',
        'lastName': 'Whitney',
        'email': 'Phelan@yellowbook.com',
        'birthDate':'1990-01-01 00:00:00',
        'basicSalary':'5000000',
        'status':'single',
        'group':'IT',
        'description':'1990-01-01 00:00:00'
      },
      {
        'id': 28,
        'username': 'Vernon',
        'firstName': 'Vernon',
        'lastName': 'Buchanan',
        'email': 'Vernon@opensource.org',
        'gender': 'Male',
        'nationality': 'Niger'
      },
      {
        'id': 29,
        'username': 'Yoshio',
        'firstName': 'Yoshio',
        'lastName': 'Berg',
        'email': 'Yoshio@yahoo.co.jp',
        'birthDate':'1990-01-01 00:00:00',
        'basicSalary':'5000000',
        'status':'single',
        'group':'IT',
        'description':'1990-01-01 00:00:00'
      },
      {
        'id': 30,
        'username': 'Hanna',
        'firstName': 'Hanna',
        'lastName': 'Ruiz',
        'email': 'Ruiz@google.co.jp',
        'birthDate':'1990-01-01 00:00:00',
        'basicSalary':'5000000',
        'status':'single',
        'group':'IT',
        'description':'1990-01-01 00:00:00'
      },
      {
        'id': 31,
        'username': 'Abraham',
        'firstName': 'Abraham',
        'lastName': 'Mercer',
        'email': 'Abraham@slate.com',
        'birthDate':'1990-01-01 00:00:00',
        'basicSalary':'5000000',
        'status':'single',
        'group':'IT',
        'description':'1990-01-01 00:00:00'
      },
      {
        'id': 32,
        'username': 'Camden',
        'firstName': 'Camden',
        'lastName': 'Quinn',
        'email': 'Camden@canalblog.com',
        'birthDate':'1990-01-01 00:00:00',
        'basicSalary':'5000000',
        'status':'single',
        'group':'IT',
        'description':'1990-01-01 00:00:00'
      },
      {
        'id': 33,
        'username': 'Kimberly',
        'firstName': 'Kimberly',
        'lastName': 'Lang',
        'email': 'Kimberly@so-net.ne.jp',
        'birthDate':'1990-01-01 00:00:00',
        'basicSalary':'5000000',
        'status':'single',
        'group':'IT',
        'description':'1990-01-01 00:00:00'
      },
      {
        'id': 34,
        'username': 'Ayanna',
        'firstName': 'Ayanna',
        'lastName': 'Jacobson',
        'email': 'Ayanna@com.com',
        'birthDate':'1990-01-01 00:00:00',
        'basicSalary':'5000000',
        'status':'single',
        'group':'IT',
        'description':'1990-01-01 00:00:00'
      },
      {
        'id': 35,
        'username': 'Keefe',
        'firstName': 'Keefe',
        'lastName': 'Huff',
        'email': 'Keefe@blogger.com',
        'birthDate':'1990-01-01 00:00:00',
        'basicSalary':'5000000',
        'status':'single',
        'group':'IT',
        'description':'1990-01-01 00:00:00'
      },
      {
        'id': 36,
        'username': 'Keaton',
        'firstName': 'Keaton',
        'lastName': 'Bush',
        'email': 'Keaton@t-online.de',
        'birthDate':'1990-01-01 00:00:00',
        'basicSalary':'5000000',
        'status':'single',
        'group':'IT',
        'description':'1990-01-01 00:00:00'
      },
      {
        'id': 37,
        'username': 'Selma',
        'firstName': 'Selma',
        'lastName': 'Davenport',
        'email': 'Selma@tripod.com',
        'birthDate':'1990-01-01 00:00:00',
        'basicSalary':'5000000',
        'status':'single',
        'group':'IT',
        'description':'1990-01-01 00:00:00'
      },
      {
        'id': 38,
        'username': 'Reece',
        'firstName': 'Reece',
        'lastName': 'Hansen',
        'email': 'Reece@360.cn',
        'birthDate':'1990-01-01 00:00:00',
        'basicSalary':'5000000',
        'status':'single',
        'group':'IT',
        'description':'1990-01-01 00:00:00'
      },
      {
        'id': 39,
        'username': 'Larissa',
        'firstName': 'Larissa',
        'lastName': 'Patton',
        'email': 'Larissa@nba.com',
        'birthDate':'1990-01-01 00:00:00',
        'basicSalary':'5000000',
        'status':'single',
        'group':'IT',
        'description':'1990-01-01 00:00:00'
      },
      {
        'id': 40,
        'username': 'Lucas',
        'firstName': 'Lucas',
        'lastName': 'Chapman',
        'email': 'Lucas@uiuc.edu',
        'birthDate':'1990-01-01 00:00:00',
        'basicSalary':'5000000',
        'status':'single',
        'group':'IT',
        'description':'1990-01-01 00:00:00'
      }
    ];

    return employeedata;
  }
}

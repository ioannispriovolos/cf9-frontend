import { Component } from '@angular/core';
import { IPerson } from '../../shared/interfaces/person';
import { Step3PersonTableInput } from '../step3-person-table-input/step3-person-table-input';

@Component({
  selector: 'app-step4-for-directive',
  imports: [Step3PersonTableInput],
  templateUrl: './step4-for-directive.html',
  styleUrl: './step4-for-directive.css',
})
export class Step4ForDirective {
  persons: IPerson[] = [
    {"firstname":"Pooh","lastname":"Dusting","email":"pdusting0@quantcast.com"},
    {"firstname":"Emmery","lastname":"Lowsely","email":"elowsely1@tiny.cc"},
    {"firstname":"Anne-marie","lastname":"Sowood","email":"asowood2@taobao.com"},
    {"firstname":"Kaitlynn","lastname":"Egre","email":"kegre3@scribd.com"},
    {"firstname":"Griswold","lastname":"Wearne","email":"gwearne4@vinaora.com"},
    {"firstname":"Briney","lastname":"Capelen","email":"bcapelen5@taobao.com"},
    {"firstname":"Ban","lastname":"Ferriman","email":"bferriman6@facebook.com"},
    {"firstname":"Johnny","lastname":"Weaver","email":"jweaver7@parallels.com"},
    {"firstname":"Gar","lastname":"Bruckner","email":"gbruckner8@istockphoto.com"},
    {"firstname":"Dalila","lastname":"Boocock","email":"dboocock9@cbc.ca"},
    {"firstname":"Dannel","lastname":"Crim","email":"dcrima@icio.us"},
    {"firstname":"Dwain","lastname":"Tatteshall","email":"dtatteshallb@google.com.hk"},
    {"firstname":"Chryste","lastname":"Wiley","email":"cwileyc@fotki.com"},
    {"firstname":"Susette","lastname":"Bales","email":"sbalesd@un.org"},
    {"firstname":"Salomi","lastname":"Lenglet","email":"slenglete@addtoany.com"},
    {"firstname":"Hank","lastname":"Yateman","email":"hyatemanf@tumblr.com"},
    {"firstname":"Jyoti","lastname":"Stapele","email":"jstapeleg@slashdot.org"},
    {"firstname":"Tierney","lastname":"Tafani","email":"ttafanih@fastcompany.com"},
    {"firstname":"Gerhardine","lastname":"Verissimo","email":"gverissimoi@blogtalkradio.com"},
    {"firstname":"Robbin","lastname":"Behning","email":"rbehningj@wired.com"},
    {"firstname":"Rena","lastname":"Cobleigh","email":"rcobleighk@cnn.com"},
    {"firstname":"Gary","lastname":"Lister","email":"glisterl@mashable.com"},
    {"firstname":"Marijo","lastname":"Moubray","email":"mmoubraym@ibm.com"},
    {"firstname":"Brit","lastname":"Cockling","email":"bcocklingn@seesaa.net"}
  ]
}

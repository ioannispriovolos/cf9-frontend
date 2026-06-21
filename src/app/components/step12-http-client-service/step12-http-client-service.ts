import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { JokeService } from '../../shared/services/joke.service';

@Component({
  selector: 'app-step12-http-client-service',
  imports: [
    MatButtonModule,
    MatCardModule
  ],
  templateUrl: './step12-http-client-service.html',
  styleUrl: './step12-http-client-service.css',
})
export class Step12HttpClientService {
  jokeService = inject(JokeService);
  dadText: string = '';
  chuckNorrisText: string = '';
  cdr = inject(ChangeDetectorRef);

  ngOnInit(){
    this.chuckNorrisJokes();
    this.dadJokes();
  }
  dadJokes(){
    this.jokeService.getDadJoke().subscribe((data)=>{
      this.dadText = data.joke;
      this.cdr.markForCheck();
      console.log("DAD>>>",this.dadText);
    });
  };

  chuckNorrisJokes(){
    this.jokeService.getChuckNorrisJoke().subscribe((data)=>{
      this.chuckNorrisText = data.value;
      this.cdr.markForCheck();
      console.log("ChuckNorris", this.chuckNorrisText);
    });
  };
}
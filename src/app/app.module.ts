import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameBoardComponent } from './game-board/game-board.component';
import { PuzzleComponent } from './puzzle/puzzle.component';
import { PuzzlePiecesComponent } from './puzzle-pieces/puzzle-pieces.component';
import { PuzzlePieceComponent } from './puzzle-piece/puzzle-piece.component';
import { GameComponent } from './game/game.component';

@NgModule({
  declarations: [
    AppComponent,
    GameBoardComponent,
    PuzzleComponent,
    PuzzlePiecesComponent,
    PuzzlePieceComponent,
    GameComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

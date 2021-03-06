import { Injectable } from '@angular/core';

import { Player } from './player';

@Injectable({ providedIn: 'root' })
export class PlayerService {
  // contains player's data, at the moment only a nickname but easily expandable in the future
  player: Player = {
    nickname: '',
  };
}

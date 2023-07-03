import React from 'react';
import Square from './Square';
import { move } from './Game';

import r_b from './assets/r_b.png';
import n_b from './assets/n_b.png';
import b_b from './assets/b_b.png';
import q_b from './assets/q_b.png';
import r_w from './assets/r_w.png';
import n_w from './assets/n_w.png';
import b_w from './assets/b_w.png';
import q_w from './assets/q_w.png';

const promotionPieces = {
  r: { b: r_b, w: r_w },
  n: { b: n_b, w: n_w },
  b: { b: b_b, w: b_w },
  q: { b: q_b, w: q_w },
};

export default function Promote({ promotion: { from, to, color } }) {
  return (
    <div className="board">
      {Object.keys(promotionPieces).map((p, i) => (
        <div key={i} className="promote-square">
            <Square black={i % 3 === 0}>
                <div className='piece-container' onClick={()=> move(from,to, p)}>
                    <img src={promotionPieces[p][color]} alt="" className="piece cursor-pointer" />
                </div>
            </Square>
        </div>
      ))}
    </div>
  );
}

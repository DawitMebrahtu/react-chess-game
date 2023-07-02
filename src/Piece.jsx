import React from 'react'
import b_b from './assets/b_b.png';
import b_w from './assets/b_w.png';
import k_b from './assets/k_b.png';
import k_w from './assets/k_w.png';
import n_b from './assets/n_b.png';
import n_w from './assets/n_w.png';
import p_b from './assets/p_b.png';
import p_w from './assets/p_w.png';
import q_b from './assets/q_b.png';
import q_w from './assets/q_w.png';
import r_b from './assets/r_b.png';
import r_w from './assets/r_w.png';
const pieceImages = {
  b: {
    b: b_b,
    w: b_w,
  },
  k: {
    b: k_b,
    w: k_w,
  },
  n: {
    b: n_b,
    w: n_w,
  },
  p: {
    b: p_b,
    w: p_w,
  },
  q: {
    b: q_b,
    w: q_w,
  },
  r: {
    b: r_b,
    w: r_w,
  },
};

export default function Piece({piece: {type, color}}) {
  const pieceImg = pieceImages[type][color];
    return (
    <div>
      <img src={pieceImg} alt="" /> {' '}
    </div>
  )
}

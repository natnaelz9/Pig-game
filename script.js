'use strict'
const player0EL=document.querySelector('.player--0');
const player1EL=document.querySelector('.player--1');
const score0El=document.querySelector('#score--0');
const score1El=document.getElementById('score--1');
const diceEl=document.querySelector('.dice');
const btnNew=document.querySelector('.btn--new');
const btnRoll=document.querySelector('.btn--roll')
const btnHold=document.querySelector('.btn--hold');
const current0=document.querySelector('#current--0');
const current1=document.querySelector('#current--1');

let score,currentsocre,activeplayer,playing;
const init=function(){
     score=[0,0];
     currentsocre=0;
     activeplayer=0;
     playing=true;
    score0El.textContent=0;
    score1El.textContent=0;
    current0.textContent=0;
    current1.textContent=0
    diceEl.classList.add('hidden');
    player0EL.classList.remove(`player--winner`);
    player1EL.classList.remove(`player--winner`);
    player0EL.classList.add(`player--active`);
    player1EL.classList.remove(`player--active`);
}
init();

const switchplayer=function(){
    document.getElementById(`current--${activeplayer}`).textContent=0;
    currentsocre=0;
    activeplayer=activeplayer===0?1:0;
    player0EL.classList.toggle('player--active');
    player1EL.classList.toggle('player--active');
}
btnRoll.addEventListener('click',function(){
    if(playing){
    const dice=Math.trunc(Math.random()*6)+1;
     diceEl.classList.remove('hidden');
    diceEl.src=`dice-${dice}.png`;
    
    //console.log(dice);
    if(dice!==1){
    currentsocre+=dice;
    document.getElementById(`current--${activeplayer}`).textContent=currentsocre;
    //current0.textContent=currentsocre;  
    }else {
        switchplayer();
        
    }
}
})
btnHold.addEventListener('click',function(){
    if(playing){
     score[activeplayer]+=currentsocre;
    document.getElementById(`score--${activeplayer}`).textContent=score[activeplayer];
    //switchplayer();

    if(score[activeplayer]>=30){
        playing=false;
        diceEl.classList.add('hidden');

        document.querySelector(`.player--${activeplayer}`).classList.add(`player--winner`);
        document.querySelector(`.player--${activeplayer}`).classList.remove(`player--active`);

    }else {
        switchplayer();
    }
}
})
btnNew.addEventListener('click',init)
    

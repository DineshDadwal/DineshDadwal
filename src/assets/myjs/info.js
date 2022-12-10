import { createPopper } from '@popperjs/core';

function Pop(){
   const popcorn = document.querySelector('#popcorn');
   const tooltip = document.querySelector('#tooltip');
   createPopper(popcorn, tooltip);
}

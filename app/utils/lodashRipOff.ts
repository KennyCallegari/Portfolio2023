/************************************
* USEFUL FUNCTIONS JUST LIKE LODASH *
*************************************/


/*
  * clamp value between a min and a max
*/
export const clamp = (num: number, min: number, max: number) => Math.min(Math.max(num, min), max);

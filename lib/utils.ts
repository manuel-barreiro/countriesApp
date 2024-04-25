import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function generatePaginationArrays(numberOfPages: number, rangeNum: number) {
  let pagesOffset = [];
  let pages_array = [];
  for (let i = 1; i <= numberOfPages; i++) {
    pages_array.push(i);
    if (pages_array.length === rangeNum) {
      pagesOffset.push(pages_array);
      pages_array = [];
      if (i === numberOfPages - (numberOfPages % rangeNum)) { 
      for (let j: number = i; j <= numberOfPages; j++) {
          pages_array.push(j);
          if (j === numberOfPages) {
              pagesOffset.push(pages_array);
              pages_array = [];
          }
       }
          i = numberOfPages
      } 
    }
  }
  return pagesOffset
}
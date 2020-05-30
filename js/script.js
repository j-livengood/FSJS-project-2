/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// ========== LOAD HTML FIRST ========== //
window.addEventListener('DOMContentLoaded', () => {


// ========== GLOBAL VARIABLES ========== //
const studentList = document.querySelectorAll('.student-item'); // grab list of students
const showItems = 10; // show 10 students


// ========== FUNCTIONS ========== //
   // list is studentListItems
   // page is the current page
const showPage = (list, page) => {
   const startIndex = (page * showItems) - showItems;
   const endIndex = page * showItems;

   // loop over items in student list
   for (let i = 0; i < list.length; i++) {
      // check if index of list item is between
      // startIndex and endIndex
         // if yes, set display to empty string
      if (i >= startIndex && i < endIndex) {
         list[i].style.display = '';
         // if no, set display to none
      } else {
         list[i].style.display = 'none';
      }
   }
}


/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/



// ========== FUNCTION CALLS ========== //
showPage(studentListItems, 1);

});


























// FROM LINE 15:
/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.

   Pro Tips: 
     - Keep in mind that with a list of 54 students, the last page 
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function 
***/










// const appendPageLinks = (list) => {
//    const numOfPages = Math.ceil(list.length/showItems);
//    const pagiDivParent = document.querySelector('.page');
//    const pagiDiv = document.createElement('div');
//    pagiDivParent.appendChild(pagiDiv);
//    pagiDiv.className = 'pagination';

//    const pagiDivUl = document.createElement('ul');
//    pagiDiv.appendChild(pagiDivUl);

//    for (let i = 0; i < numOfPages; i++) {
//       const pagiDivLi = document.createElement('li');
//       pagiDivUl.appendChild(pagiDivLi);

//       const pagiDivAnchor = document.createElement('a');
//       pagiDivAnchor.setAttribute('href', '#')
//       pagiDivAnchor.textContent = i + 1;
//       pagiDivLi.appendChild(pagiDivAnchor);

//       pageBody.addEventListener('click', (e) => {
//          const buttons = document.querySelectorAll('a');
//          showPage(studentListItems, i);
//       });
//    };
// }
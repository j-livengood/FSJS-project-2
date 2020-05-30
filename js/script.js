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
const appendPageLinks = () => {
   // grab div.page to append div.pagination
   const page = document.querySelector('.page');
   
   // create pagination div
   // set class on paginationDiv
   // append div to page
   const paginationDiv = document.createElement('div');
   paginationDiv.className = 'pagination';
   page.appendChild(paginationDiv);

   // create ul for div
   // append ul to div
   const paginationList = document.createElement('ul');
   paginationDiv.appendChild(paginationList);

   // determine how many pages are needed
   // number of items / number of items to show = number of pages
   // (example) 50 / 10 = 5 
   const numOfPages = Math.ceil(studentList.length/showItems);

   // create loop to determine number of list items
   for (let i = 0; i < numOfPages; i++) {
      // create li for ul
      // append li to ul
      const paginationListItem = document.createElement('li');
      paginationList.appendChild(paginationListItem);

      // create anchor for li
      // set text content of anchor
      // set href attribute of anchor
      // append anchor to li
      const paginationListItemAnchor = document.createElement('a');
      paginationListItemAnchor.textContent = i + 1;
      paginationListItemAnchor.setAttribute('href', '#');
      paginationListItem.appendChild(paginationListItemAnchor);

      console.log(i);
   }

   // add click listener to each anchor
   page.addEventListener('click', (e) => {
      console.log(e.target);
      if (e.target === 'a') {
         console.log('clicked');
      }
   })
   
   console.log(numOfPages);
}


// ========== FUNCTION CALLS ========== //
showPage(studentList, 1);
appendPageLinks();

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
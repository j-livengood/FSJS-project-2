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

   for (let i = 0; i < list.length; i++) {         // loop over items in student list
      if (i >= startIndex && i < endIndex) {       // check if index of list item is between startIndex and endIndex
         list[i].style.display = '';               // if yes, set display to empty string
      } else {
         list[i].style.display = 'none';           // if no, set display to none
      }
   }
}


// list is studentListItems
// num is showItems
const appendPageLinks = (list, num) => {
   const page = document.querySelector('.page');     // grab div.page to append div.pagination
   
   const paginationDiv = document.createElement('div');     // create pagination div
   paginationDiv.className = 'pagination';                  // set class on paginationDiv
   page.appendChild(paginationDiv);                         // append div to page

   const paginationList = document.createElement('ul');     // create ul for div
   paginationDiv.appendChild(paginationList);               // append ul to div

                                                      // determine how many pages are needed
   const numOfPages = Math.ceil(list.length/num);     // studentListItems / showItems = numOfPages
                                                      // (example) 50 / 10 = 5    

   for (let i = 0; i < numOfPages; i++) {                          // create loop to determine number of list items
      const paginationListItem = document.createElement('li');     // create li for ul
      paginationList.appendChild(paginationListItem);              // append li to ul

      const paginationListItemAnchor = document.createElement('a');     // create anchor for li
      paginationListItemAnchor.textContent = i + 1;                     // set text content of anchor
      paginationListItemAnchor.setAttribute('href', '#');               // set href attribute of anchor
      paginationListItem.appendChild(paginationListItemAnchor);         // append anchor to li

      if (paginationListItemAnchor.textContent === '1') {     // check for text content on inital page load
         paginationListItemAnchor.className = 'active';       // set first anchor class to active
      }
   }

   
   page.addEventListener('click', (e) => {            // add click listener to each anchor
      if (e.target.tagName === 'A') {                 // check if click target is and anchor tag
         const newPageNum = e.target.textContent;     // grab event targets text content

         for (i = 0; i < paginationList.children.length; i++) {              // loop over anchors and remove class name
            paginationList.children[i].firstElementChild.className = '';     // remove all anchor class names
         }

         e.target.className = 'active';     // add class name to target

         showPage(list, newPageNum);     // show new page
      }
   });
}


// ========== FUNCTION CALLS ========== //
showPage(studentList, 1);
appendPageLinks(studentList, showItems);

});
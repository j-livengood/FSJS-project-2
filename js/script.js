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
      } else {                                     // else
         list[i].style.display = 'none';           // if no, set display to none
      }
   }
}

   // function to remove pagination div to be replaced
const divRemoval = (name) => {
   const removeDiv = document.querySelector(name);        // grab div to remove
   if (removeDiv) {                                       // check if div exists
      removeDiv.parentElement.removeChild(removeDiv);     // remove div
   }
}


   // list is studentListItems
   // num is showItems
const appendPageLinks = (list) => {
   const page = document.querySelector('.page');     // grab div.page to append div.pagination
   
   const paginationDiv = document.createElement('div');     // create pagination div
   paginationDiv.className = 'pagination';                  // set class on paginationDiv
   page.appendChild(paginationDiv);                         // append div to page

   const paginationList = document.createElement('ul');     // create ul for div
   paginationDiv.appendChild(paginationList);               // append ul to div

                                                      // determine how many pages are needed
   const numOfPages = Math.ceil(list.length/showItems);     // studentListItems / showItems = numOfPages
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


// ========== EXCEEDS EXPECTATIONS SECTION ========== //
const appendSearch = () => {
   const page = document.querySelector('.page');     // grab div.page to append div.pagination

   const pageHeader = document.querySelector('.page-header');      // grab page header div
   const searchDiv = document.createElement('div');                // create div
   searchDiv.className = 'student-search'                          // set div class
   pageHeader.appendChild(searchDiv);                              // append div to header
   
   const searchBar = document.createElement('input');     // create input element
   searchBar.type = 'text';                               // set input type
   searchBar.placeholder = 'Search for a student!';       // set placeholder
   searchDiv.appendChild(searchBar);                      // append searchBar to pageHeader

   const searchButton = document.createElement('button');         // create search button
   searchButton.textContent = 'SEARCH';                           // set button text content
   searchBar.insertAdjacentElement('afterend', searchButton);     // insert after search input

   const searchAgain = document.createElement('h1');                                // create header
   searchAgain.textContent = `Sorry, no students match. Please search again.`;      // fill header
   searchAgain.style.display = 'none';                                              // set display to none
   pageHeader.insertAdjacentElement('afterend', searchAgain);                       // insert after header

   let newList = [];

   const filter = (list) => {     // create filter function
      const inputFilter = searchBar.value.toLowerCase();     // grab input value
      newList = [];

      for (let i = 0; i < list.length; i++) {                                                     // loop over list of students
         let student = list[i];                                                                   // grab student
         const studentName = list[i].firstElementChild.firstElementChild.nextElementSibling;      // grab students name node
         const nameValue = studentName.textContent;                                               // store the text content

         if (nameValue.toLowerCase().indexOf(inputFilter) > -1) {     // check value against filter
            student.style.display = '';                               // if a match, display is empty
            newList.push(student);                                    // push student onto new list
         } else {
            student.style.display = 'none';
         };
      }
   };

   page.addEventListener('click', (e) => {          // listen for click
      if (e.target.tagName === 'BUTTON') {          // on search button
         filter(studentList);                       // call filter
         showPage(newList, 1);                      // call showPage with new list
         divRemoval('.pagination');                 // remove pagination links div
         appendPageLinks(newList, showItems);       // append new pagination links
         if (newList.length === 0) {                // if there are no students in the new list
            searchAgain.style.display = '';         // display header message
         } else {                                   // else
            searchAgain.style.display = 'none';     // hide header message
         }
      }
   });

   // page.addEventListener('keyup', (e) => {          // listen for keyUp
   //    if (e.target.tagName === 'INPUT') {           // on input field
   //       filter(studentList);                       // call filter
   //       showPage(newList, 1);                      // call showPage with new list
   //       divRemoval('.pagination');                 // remove pagination links div
   //       appendPageLinks(newList, showItems);       // append new pagination links
   //       if (newList.length === 0) {                // if there are no students in the new list
   //          searchAgain.style.display = '';         // display header message
   //       } else {                                   // else
   //          searchAgain.style.display = 'none';     // hide header message
   //       }
   //    }
   // });
}




// ========== FUNCTION CALLS ========== //
showPage(studentList, 1);
appendPageLinks(studentList, showItems);
appendSearch();

});
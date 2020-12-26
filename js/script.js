//Activate links
const tabs = document.querySelectorAll('.icon');

tabs.forEach(clickedTab => {
    //Add onClick event
    clickedTab.addEventListener('click', () => {
        //Remove the active class from all tabs
        tabs.classList.remove('active');
    });

    //Add the active class on the clicked tab
    clickedTab.classList.add('active');
})
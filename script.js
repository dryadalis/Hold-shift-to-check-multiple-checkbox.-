
const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
console.log(checkboxes);

let lastChecked;

function handleCheck(e) {

    let inBetween = false;
    //check if they had shift kay
    // and check tahat they are checking it
    if (e.shiftKey && this.checked) {
        //loop over every single chceckbox
        checkboxes.forEach(checkbox => {
        
            if (checkbox === this || checkbox === lastChecked) {
                inBetween = !inBetween;
            }
            if (inBetween) {
                checkbox.checked = true;
              }
        });
    }
    lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));

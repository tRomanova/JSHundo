// get the user input from the page
// Controller function
function getValues() {
    //get the values from the page
    let startValue = document.getElementById('startValue').value;
    let endValue = document.getElementById('endValue').value;


    //parse our inputs as number
    startValue = parseInt(startValue)
    endValue = parseInt(endValue)
    
    //verify our inputs are numbers
    if ( Number.isInteger(startValue) && Number.isInteger(endValue)) {
        //if thay are, generate our numbers
        let numbersAray = generateNumbers(startValue, endValue);

        //then display on the page
        displayNumbers(numbersAray);
    }else{
        //if they are not, tell our user
        Swal.fire(
            {
                icon: "error",
                title: "Oops",
                text: "Only integer are allow for Hondo!"
            }
        )
    }

}
// generate ore numbers
function generateNumbers(start, end) {
    let numbers = [];

    for (let value = start; value <= end; value++) {
        
        numbers.push(value)
    }

    return numbers;
}

// display them on the page
// View function
function displayNumbers(numbersAray) {
    let tableBody = document.getElementById('results')
    let tableHtml = "";
    
    for (let i = 0; i < numbersAray.length; i++) {
        let value = numbersAray[i];
        //modulo
        let className = value % 2 == 0 ? 'even' : 'odd';
        
        // if(value % 2 == 0){
        //     className = 'even'
        // }else{
        //     className = 'odd'
        // }

        if (i % 5 == 0) {
            tableHtml += '<tr>';
        }

        let tableRow = `<td class="${className}">${value}</td>`;
        tableHtml = tableHtml + tableRow;
        // tableHtml += tableRow;

        if ((i + 1) % 5 == 0) {
            tableHtml += '</tr>';
        }
    }
    tableBody.innerHTML = tableHtml;
}
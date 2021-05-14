$(function() {
        $('#example1').DataTable()
        $('#example2').DataTable({
            'paging': true,
            'lengthChange': false,
            'searching': false,
            'ordering': true,
            'info': true,
            'autoWidth': false
        })
    })
    // Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    //JavaScript function that enables or disables a submit button depending
    //on whether a checkbox has been ticked or not.
function terms_changed(termsCheckBox) {
    //If the checkbox has been checked
    if (termsCheckBox.checked) {
        //Set the disabled property to FALSE and enable the button.
        document.getElementById("submit_button").disabled = false;
    } else {
        //Otherwise, disable the submit button.
        document.getElementById("submit_button").disabled = true;
    }
}
// search bar
function myFunction() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        mytd = tr[i].getElementsByTagName("td")
        for (j = 0; j < mytd.length; j++) {
            td = tr[i].getElementsByTagName("td")[j];
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
                break;
            } else {
                tr[i].style.display = "none";
                // console.clear();
            }

        }
    }
}
//   log out
$(function() {
    $('a#logout').click(function() {
        if (confirm('Are you sure to logout')) {
            return true;
        }

        return false;
    });
});
//   delete
$(function() {
    $('a#logout').click(function() {
        if (confirm('Are you sure to logout')) {
            return true;
        }

        return false;
    });
});
// wizard form
var wizard = $('#rootwizard').bootstrapWizard();

$('button').click(function() {
    wizard.bootstrapWizard('next')
});
// selective check box
var expanded = false;

function showCheckboxes() {
    var checkboxes = document.getElementById("checkboxes");
    if (!expanded) {
        checkboxes.style.display = "block";
        expanded = true;
    } else {
        checkboxes.style.display = "none";
        expanded = false;
    }
}
// input show when clicking on this
function yesnoCheck(that) {
    if (that.value == "yes") {

        document.getElementById("ifYes").style.display = "block";
    } else {
        document.getElementById("ifYes").style.display = "none";
    }
}

function yesno(that) {
    if (that.value == "darad") {

        document.getElementById("ifdarad").style.display = "block";
    } else {
        document.getElementById("ifdarad").style.display = "none";
    }
}

function yesnoCheckbox(that) {
    if (that.value == "yescheck") {

        document.getElementById("ifYescheck").style.display = "block";
    } else {
        document.getElementById("ifYescheck").style.display = "none";
    }
}

function noyesCheckbox(that) {
    if (that.value == "yescheckbox") {

        document.getElementById("ifYescheckbox").style.display = "block";
    } else {
        document.getElementById("ifYescheck").style.display = "none";
    }
}
function addclass1() {
    var element = document.getElementsByClassName(".second-btn");
    element.classList.add("active-tab");
  }
function addclass2() {
    var element = document.getElementsByClassName(".third-btn");
    element.classList.add("active-tab");
  }
// tab changer

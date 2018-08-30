// Collapse mobile menu
(function() {
  $(".navbar-toggler").click(function() {
    $(this).toggleClass("navbar-toggler_is-opened");
  });
})();

// Change styles for invalid input form
(function() {
  $("input").bind("input", function() {
    function validateEmail(email) {
      var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }

    var email = $(this).val();

    if (validateEmail(email)) {
      $(this).removeClass("invalid-input");
    } else {
      $(this).addClass("invalid-input");
    }
  });
})();

// Show modal window

function requireInput(form) {
  let input = form.querySelector("input");
  let inputValue = $(input).val();

  function validateEmail(inputValue) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(inputValue);
  }

  if (validateEmail(inputValue)) {
    $("#exampleModal").modal("show");
  } else {
  }
}

$("form").submit(function(event) {
  //   $("#exampleModal").modal("show");
  let form = this;
  requireInput(form);
  return false;
});

// $('#exampleModal').modal('show');

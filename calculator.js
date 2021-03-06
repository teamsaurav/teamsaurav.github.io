$('#calculate-btn').click(function() {

  var category = $('#dropdown').val();
  var demo = $('#demos').val();
  var revenue = $('#revenue').val();

  $('.error-incentive').css('display', 'block');

  var validateError = validate(category, demo, revenue);

  if (validateError === "") {
    var incentive = calculateIncetive(category, demo, revenue);
    var stripped = incentive.replace(/\s+/g, '');

    if (stripped === '0()') {


      $('.error-incentive').text("Minimum Requirements Not Met");

    } else {
      $('.error-incentive').text("Your Incentive Is Rs " + incentive);

    }
  } else {
    $('.error-incentive').text(validateError);
  }

});

function calculateIncetive(category, demo, revenue) {

  demo = parseInt(demo);
  revenue = parseInt(revenue);
  var incentive = 0;
  var slab = '';

  if (category === "1") {
    if (demo >= 9) {
      if (revenue >= 135000) {
        incentive = 700 * demo + 0.08 * revenue;
        slab = '700 * demo + 8% of revenue';
      } else if (revenue >= 90000) {
        incentive = 600 * demo + 0.07 * revenue;
        slab = '600 * demo + 7% of revenue';
      } else if (revenue >= 45000) {
        incentive = 400 * demo + 0.05 * revenue;
        slab = '400 * demo + 5% of revenue';
      }
    } else if (demo >= 7) {
      if (revenue >= 90000) {
        incentive = 500 * demo + 0.06 * revenue;
        slab = '500 * demo + 6% of revenue';
      } else if (revenue >= 45000) {
        incentive = 400 * demo + 0.05 * revenue;
        slab = '400 * demo + 5% of revenue';
      }
    } else if (demo >= 6) {
      if (revenue >= 45000) {
        incentive = 300 * demo + 0.05 * revenue;
        slab = '300 * demo + 5% of revenue';
      }
    }
    incentive = (Math.round((incentive + Number.EPSILON) * 100) / 100) + '   (' + slab + ')';
    return incentive;
  } else if (category === "2") {
    if (demo >= 8) {
      if (revenue >= 135000) {
        incentive = 700 * demo + 0.08 * revenue;
        slab = '700 * demo + 8% of revenue';
      } else if (revenue >= 100000) {
        incentive = 600 * demo + 0.07 * revenue;
        slab = '600 * demo + 7% of revenue';
      } else if (revenue >= 65000) {
        incentive = 400 * demo + 0.05 * revenue;
        slab = '400 * demo + 5% of revenue';
      }
    } else if (demo >= 7) {
      if (revenue >= 100000) {
        incentive = 500 * demo + 0.06 * revenue;
        slab = '500 * demo + 6% of revenue';
      } else if (revenue >= 65000) {
        incentive = 400 * demo + 0.05 * revenue;
        slab = '400 * demo + 5% of revenue';
      }
    } else if (demo >= 6) {
      if (revenue >= 65000) {
        incentive = 300 * demo + 0.05 * revenue;
        slab = '300 * demo + 5% of revenue';
      }
    }
    incentive = (Math.round((incentive + Number.EPSILON) * 100) / 100) + '   (' + slab + ')';
    return incentive;
  } else if (category === "3") {
    if (demo >= 9) {
      if (revenue >= 135000) {
        incentive = 700 * demo + 0.08 * revenue;
        slab = '700 * demo + 8% of revenue';
      } else if (revenue >= 100000) {
        incentive = 600 * demo + 0.07 * revenue;
        slab = '600 * demo + 7% of revenue';
      } else if (revenue >= 65000) {
        incentive = 400 * demo + 0.05 * revenue;
        slab = '400 * demo + 5% of revenue';
      }
    } else if (demo >= 8) {
      if (revenue >= 100000) {
        incentive = 500 * demo + 0.06 * revenue;
        slab = '500 * demo + 6% of revenue';
      } else if (revenue >= 65000) {
        incentive = 400 * demo + 0.05 * revenue;
        slab = '400 * demo + 5% of revenue';
      }
    } else if (demo >= 7) {
      if (revenue >= 65000) {
        incentive = 300 * demo + 0.05 * revenue;
        slab = '300 * demo + 5% of revenue';
      }
    }
    incentive = (Math.round((incentive + Number.EPSILON) * 100) / 100) + '   (' + slab + ')';
    return incentive;
  } else if (category === "4") {
    if (demo >= 8) {
      if (revenue >= 165000) {
        incentive = 600 * demo + 0.07 * revenue;
        slab = '600 * demo + 7% of revenue';
      } else if (revenue >= 125000) {
        incentive = 500 * demo + 0.06 * revenue;
        slab = '500 * demo + 6% of revenue';
      } else if (revenue >= 10000) {
        incentive = 400 * demo + 0.05 * revenue;
        slab = '400 * demo + 5% of revenue';
      } else if (revenue >= 80000) {
        incentive = 300 * demo + 0.05 * revenue;
        slab = '300 * demo + 5% of revenue';
      }
    } else if (demo >= 7) {
      if (revenue >= 100000) {
        incentive = 400 * demo + 0.05 * revenue;
        slab = '400 * demo + 5% of revenue';
      } else if (revenue >= 80000) {
        incentive = 300 * demo + 0.05 * revenue;
        slab = '300 * demo + 5% of revenue';
      }
    } else if (demo >= 6) {
      if (revenue >= 80000) {
        incentive = 300 * demo + 0.05 * revenue;
        slab = '300 * demo + 5% of revenue';
      }
    }
    incentive = (Math.round((incentive + Number.EPSILON) * 100) / 100) + '   (' + slab + ')';
    return incentive;
  } else if (category === "5") {
    if (demo >= 8) {
      if (revenue >= 220000) {
        incentive = 600 * demo + 0.07 * revenue;
        slab = '600 * demo + 7% of revenue';
      } else if (revenue >= 165000) {
        incentive = 500 * demo + 0.06 * revenue;
        slab = '500 * demo + 6% of revenue';
      } else if (revenue >= 130000) {
        incentive = 400 * demo + 0.05 * revenue;
        slab = '400 * demo + 5% of revenue';
      } else if (revenue >= 100000) {
        incentive = 300 * demo + 0.05 * revenue;
        slab = '300 * demo + 5% of revenue';
      }
    } else if (demo >= 7) {
      if (revenue >= 130000) {
        incentive = 400 * demo + 0.05 * revenue;
        slab = '400 * demo + 5% of revenue';
      } else if (revenue >= 100000) {
        incentive = 300 * demo + 0.05 * revenue;
        slab = '300 * demo + 5% of revenue';
      }
    } else if (demo >= 6) {
      if (revenue >= 100000) {
        incentive = 300 * demo + 0.05 * revenue;
        slab = '300 * demo + 5% of revenue';
      }
    }
    incentive = (Math.round((incentive + Number.EPSILON) * 100) / 100) + '   (' + slab + ')';
    return incentive;
  } else if (category === "6") {
    if (demo >= 10) {
      if (revenue >= 6) {
        incentive = 1400 * revenue;
        slab = 'Monthly Equivalent of Rs 33000+';
      } else if (revenue >= 5) {
        incentive = 5000;
        slab = 'Monthly Equivalent of Rs 20000';
      } else if (revenue >= 4) {
        incentive = 4000;
        slab = 'Monthly Equivalent of Rs 16000';
      } else if (revenue >= 3) {
        incentive = 3500;
        slab = 'Monthly Equivalent of Rs 14000';
      } else if (revenue >= 2) {
        incentive = 2500;
        slab = 'Monthly Equivalent of Rs 10000';
      }
    }
    incentive = (Math.round((incentive + Number.EPSILON) * 100) / 100) + '   (' + slab + ')';
    return incentive;
  } else if (category === "7") {
    var tsv = $('#hidden-tsv').val();
    if (demo >= 4) {
      if (revenue >= 5) {
        incentive = 0.05 * tsv;
        slab = 'Incentive Payout = 5%';
      } else if (revenue === 4) {
        incentive = 0.0475 * tsv;
        slab = 'Incentive Payout = 4.75%';
      } else if (revenue === 3) {
        incentive = 0.045 * tsv;
        slab = 'Incentive Payout = 4.5%';
      } else if (revenue === 2) {
        incentive = 0.04 * tsv;
        slab = 'Incentive Payout = 4%';
      }
    }
    incentive = (Math.round((incentive + Number.EPSILON) * 100) / 100) + '   (' + slab + ')';
    return incentive;
  }

}

function validate(category, demo, revenue) {
  var reg = /^\d+$/;

  if (category === "0") {
    var error = "Please Select Campaign";
    return error;
  }

  if (!reg.test(demo)) {
    var error = $('#demos').attr('placeholder') + ' is mandatory and can only be numeric';
    return error;
  }

  if (!reg.test(revenue)) {

    var error = $('#revenue').attr('placeholder') + ' is mandatory and can only be numeric';
    return error;
  }

  if (category === "7") {
    var tsv = $('#hidden-tsv').val();
    if (!reg.test(tsv)) {
      var error = $('#hidden-tsv').attr('placeholder') + ' is mandatory and can only be numeric';
      return error;
    }
  }

  return "";
}

$('#dropdown').change(function() {
  var category = $('#dropdown').val();
  if (category === '6') {
    $('#revenue').attr('placeholder', 'Enter Number of Sales From Valid Demos');
    $('#hidden-tsv').css('display', 'none');
  } else if (category === '7') {
    $('#revenue').attr('placeholder', 'Enter Minimum Sales/Week (ex-Trial Series)');
    $('#demos').attr('placeholder', 'Enter Minimum Valid Demos/Week');
    $('#hidden-tsv').css('display', 'block');
  } else {
    $('#revenue').attr('placeholder', 'Enter #Revenue Done');
    $('#hidden-tsv').css('display', 'none');

  }
})

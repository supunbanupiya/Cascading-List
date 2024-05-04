$(document).ready(function () {
    $('#country').attr('disabled', true);
    $('#state').attr('disabled', true);
    $('#city').attr('disabled', true);
    LoadCountries();

    $('#country').change(function () {
        var countryId = $(this).val();
        if (countryId > 0) {
            LoadStates(countryId)
        }
        else {
            alert("Select Country");
            $('#state').empty();
            $('#city').empty();
            $('#state').attr('disabled', true);
            $('#city').attr('disabled', true);
            $('#state').append('<option>--select state--</option>');
            $('#city').append('<option>--select city--</option>');
        }
    });
    $('#state').change(function () {
        var stateId = $(this).val();
        if (stateId > 0) {
            LoadCities(stateId)
        }
        else {
            alert("Select State");

            $('#city').empty();
            $('#city').append('<option>--select city--</option>');
        }
    });
});

function LoadCountries() {
    $('#country').empty();

    $.ajax({
        url: '/Cascading/GetCountries',
        success: function (response) {
            if (response != null && response != undefined && response.length > 0) {
                $('#country').attr('disabled', false);
                $('#country').append('<option>--select country--</option>');
                $('#state').append('<option>--select state--</option>');
                $('#city').append('<option>--select city--</option>');
                $.each(response, function (i, data) {
                    $('#country').append('<option value='+data.id+ '>'+data.name+'</option>');
                })
            }
            else {
                $('#country').attr('disabled', true);
                $('#state').attr('disabled', true);
                $('#city').attr('disabled', true);
                $('#country').append('<option>--Countries not available--</option>');
                $('#state').append('<option>-- states not available--</option>');
                $('#city').append('<option>--cities not available--</option>');
            }
        },
        error: function (error) {
            alert(error)
        }
    })
}



function LoadStates(countryId) {
    $('#state').empty();
    $('#city').empty();
    $('#city').attr('disabled', true);

    $.ajax({
        url: '/Cascading/GetStates/?Id=' +countryId,
        success: function (response) {
            if (response != null && response != undefined && response.length > 0) {
                $('#state').attr('disabled', false);
               
                $('#state').append('<option>--select state--</option>');
                $('#city').append('<option>--select city--</option>');
                $.each(response, function (i, data) {
                    $('#state').append('<option value=' + data.id + '>' + data.name + '</option>');
                })
            }
            else {
            
                $('#state').attr('disabled', true);
                $('#city').attr('disabled', true);
            
                $('#state').append('<option>-- states not available--</option>');
                $('#city').append('<option>--cities not available--</option>');
            }
        },
        error: function (error) {
            alert(error)
        }
    })
}


function LoadCities(stateId) {
   
    $('#city').empty();
  

    $.ajax({
        url: '/Cascading/GetCities/?Id=' + stateId,
        success: function (response) {
            if (response != null && response != undefined && response.length > 0) {
                $('#city').attr('disabled', false);

                $('#city').append('<option>--select city--</option>');
                $.each(response, function (i, data) {
                    $('#city').append('<option value=' + data.id + '>' + data.name + '</option>');
                })
            }
            else {

                $('#city').attr('disabled', true);

                $('#city').append('<option>--cities not available--</option>');
            }
        },
        error: function (error) {
            alert(error)
        }
    })
}
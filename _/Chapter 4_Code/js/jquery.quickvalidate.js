$.fn.quickValidate = function() {

    var $form = this,
        $inputs = $form.find('input:text, input:password');
        
    var filters = {
        name: {
            regex: /^[A-Za-z]{3,}$/,
            error: 'Must be at least 3 characters long, and must only contain letters.'
        },
        pass: {
            regex: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/,
            error: 'Must be at least 6 characters long, and contain at least one number, one uppercase and one lowercase letter.'
        },
        email: {
            regex: /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/,
            error: 'Must be a valid e-mail address (eg. user@outlook.com)'
        },
        phone: {
            regex: /^[2-9]\d{2}-\d{3}-\d{4}$/,
            error: 'Must be a valid US phone number (e.g 999-999-9999)'
        }
    };
    
	var validate = function(klass, value) {
        var isValid = true, f, error = '';
        if (!value && /required/.test(klass)) {
            error = 'This field is required';
            isValid = false;
        } else {
            for (f in filters) {
                var regex = new RegExp(f);
                if (regex.test(klass)) {
                    if (value && !filters[f].regex.test(value)) {
                        error = filters[f].error;
                        isValid = false;
                    }
                    break;
                }
            }
        }
        return {
            isValid: isValid,
            error: error
        }
    };
    
    var printError = function($input) {
        var klass = $input.attr('class'),
            value = $input.val(),
            test = validate(klass, value),
            $error = $('<span class="error">' + test.error + '</span>'),
            $icon = $('<i class="error-icon"></i>');

        $input.removeClass('invalid').siblings('.error, .error-icon').remove();

        if (!test.isValid) {
            $input.addClass('invalid');
            $error.add($icon).insertAfter($input);
            $icon.hover(function() {
                $(this).siblings('.error').toggle();
            });
        }
    };

    $inputs.each(function() {
        if ($(this).is('.required')) {
            printError($(this));
        }
    });

    $inputs.keyup(function() {
        printError($(this));
    });

    $form.submit(function(e) {
        if ($form.find('input.invalid').length) {
            e.preventDefault();
            $("#errormessage").text('There are errors on this form - please check...');
        }
    });

    return this;
};
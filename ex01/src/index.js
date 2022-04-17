var isCapsLockClicked = false;
var isShiftClicked = false;

$(function () {
    $("button.keyboard_key").on("click", function () {
        var key;
        if (isShiftClicked) {
            key = $(this).text().toUpperCase();
            $("textarea")[0].value += key;
            isShiftClicked = false;
            document.getElementById("shift_key").style.backgroundColor = '#8AA1B1';
        } else if (isCapsLockClicked) {
            key = $(this).text().toUpperCase();
            $("textarea")[0].value += key;
        }
        else {
            key = $(this).text();
            $("textarea")[0].value += key;
        }    
    });
});

$(function () {
    $("button.space").on("click", function () {
        var key = " ";
        $("textarea")[0].value += key;
    });
});

$(function () {
    $("button.enter").on("click", function () {
        var key = "\n";
        $("textarea")[0].value += key;
    });
});

$(function () {
    $("button.ok").on("click", function () {
        var text = $("textarea")[0].value;
        alert(text);
    });
});

$(function () {
    $("button.shift").on("click", function () {
        isShiftClicked = !isShiftClicked;

        if(isShiftClicked) document.getElementById("shift_key").style.backgroundColor = '#6e7880';
        else document.getElementById("shift_key").style.backgroundColor = '#8AA1B1';

    })
})

$(function () {
    $("button.caps_lock").on("click", function () {
        isCapsLockClicked = !isCapsLockClicked;

        if(isCapsLockClicked) document.getElementById("caps_lock_key").style.backgroundColor = '#6e7880';
        else document.getElementById("caps_lock_key").style.backgroundColor = '#8AA1B1';
    })
})


$(function () {
    $("button.back_space").on("click", function () {
        var cursorPosition = $('#myTextarea').prop("selectionStart");
        let tempText = $("textarea")[0].value.slice(0, cursorPosition-1) + $("textarea")[0].value.slice(cursorPosition, $("textarea")[0].value.length);
        $("textarea")[0].value = tempText; 
        
    })
})


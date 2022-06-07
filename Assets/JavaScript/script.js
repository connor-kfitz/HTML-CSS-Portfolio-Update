// Change Email Icon on Hover
function newEmailIcon(){
    $('#emailIcon').attr("src", "./Assets/Images/mailc.png");
}

function originalEmailIcon(){
    $('#emailIcon').attr("src", "./Assets/Images/mail.png");
}

$('#emailIconAnchor').hover(newEmailIcon, originalEmailIcon);

// Change LinkedIn Icon on Hover
function newLinkedIcon(){
    $('#linkedIcon').attr("src", "./Assets/Images/linkedc.png");
}

function originalLinkedIcon(){
    $('#linkedIcon').attr("src", "./Assets/Images/linked.png");
}

$('#linkedIconAnchor').hover(newLinkedIcon, originalLinkedIcon);

// Change Github Icon on Hover
function newGitIcon(){
    $('#gitIcon').attr("src", "./Assets/Images/gitc.png");
}

function originalGitIcon(){
    $('#gitIcon').attr("src", "./Assets/Images/git.png");
}

$('#gitIconAnchor').hover(newGitIcon, originalGitIcon);

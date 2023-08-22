function Validate(idOfControl, idOfMessageControl,errorMessage)
{
    var controlToValidate = document.getElementById(idOfControl);
    var controlToShowMessage = 
            document.getElementById(idOfMessageControl);

    if(controlToValidate.value == "")
    {
        //controlToShowMessage.innerHTML = 
                                //'<h1>' + errorMessage +'</h1>';
        controlToShowMessage.innerText = errorMessage
    }
    else
    {
        controlToShowMessage.innerText = ''
    }
}

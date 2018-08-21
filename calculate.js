function EnterValue(val) 
{  
		document.getElementById("text-input").value+=val;
	
}
function clearValue(val)
{
    document.getElementById("text-input").value=val;
}
function calculateValue(val)
{
    try 
    { 
        clearValue(eval(document.getElementById("text-input").value)); 
    } 
    catch(e) 
    {
        clearValue('Error') ;
    } 
}
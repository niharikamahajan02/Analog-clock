function updatetime()
{
    time.innerHTML= new Date();
}
setInterval(function() {updatetime();}, 1000);
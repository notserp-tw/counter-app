//Build a School Counter App
var count = 0;
let savetext = "Previous Entries: ";
document.getElementById("count-el").innerText = count;
document.getElementById("saves").innerText = savetext;
function increment()
{
    count++;
    document.getElementById("count-el").textContent = count;
    console.log(count);
}
function save()
{
    savetext += count + " - ";
    document.getElementById("saves").innerText = savetext;
}



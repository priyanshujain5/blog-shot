const artn=['one','two','three','four','five','six','seven','eight'];
function show(artnumber)
{
    let len = artnumber.length;
    let count=4;
    while(count--)
    {
        let i = Math.floor(Math.random()*len);
        let d=document.getElementById(`${artnumber[i]}`);
        d.classList.remove("displaying");
        [artnumber[i],artnumber[len-1]]=[artnumber[len-1],artnumber[i]];
        len--;
    }
}
show(artn);
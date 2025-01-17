let color=["red","blue","purple","grey","orange","violet"]
let clength= color.length;

for(let i=1 ; i<8 ; i++){
setTimeout(() => {

        const d = document.getElementById(`${i++}`);
        let j =Math.floor(Math.random()*clength)
        d.style.color=color[j]
        color[j]=color[clength-1];
        clength--;
        d.removeAttribute("class","block")
        d.classList.add("display")


}, 500);

}

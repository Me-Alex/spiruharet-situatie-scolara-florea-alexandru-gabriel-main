let el1 = document.querySelector(".tee");
console.log(el1);
console.log(window.location);
// // el.onclick = () => {
// //     // window.location.pathname = "/note-an-trei.html";
// //     console.log(el);
// // }


function laodthis() {
    console.log(this);
    let el = document.querySelector(".select");
    // window.location.pathname = "/note-an-trei.html";
    console.log(el);
}
window.addEventListener("DOMContentLoaded", () => {
    const select = document.getElementById("an_studiu");
    select.addEventListener('change', () => {
        const index = select.selectedIndex;
        if (index == 1) {
            window.location.pathname = "/note-an-trei.html";
        }
        if(index==0){
            window.location.pathname = "/index.html";
        }

    })
    for (const option of select.options) {
        console.log(option.label); // "Option 1" and "Option 2"
    }
});
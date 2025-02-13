const result = document.querySelector(".result")
async function readData(){
    const res = await fetch("text.txt")
    const data = await res.text();
    result.textContent = data;
}
readData()


let imgfun = (img) => {
    let div = document.createElement("div")
    div.className = "sectionimg1"
    div.innerHTML = `
        <img src="${img}">
    `
    return div;
}

export { imgfun }
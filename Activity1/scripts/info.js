const infofunc = (title, par, button, titleClass) => {
    let div = document.createElement('div')
    div.className = "sec1con"
    div.innerHTML = `
    <h1 class="${titleClass}">${title}</h1>
        <p>${par}</p>
        <button>${button}</button>
    `
    return div
}

const infofunc2 = (title2) => {
    let div = document.createElement('div')
    div.innerHTML = `<h1>${title2}</h1>
                    
    
    
    `
    return div
}
export { infofunc2 }

export { infofunc }
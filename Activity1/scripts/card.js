

const cardfunc = (image, description, buttonText, link) => {
    let div = document.createElement('div');
    div.className = "cardsec2";
    div.innerHTML = `
        <img class="hop" src="${image}" alt="picture">
        <p class="hud">${description}</p>
        <a href="${link}" target="_blank"><button class="but">${buttonText}</button></a>
    `;
    return div;
}

export { cardfunc };

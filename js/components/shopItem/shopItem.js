const shopItem = (data, imgPath) => {
    return `<div class="shopItem">
                <img src="${imgPath + data.img}" alt="Shop item image">
                <div>200 pinigu</div>
            </div>`;
}

export { shopItem }
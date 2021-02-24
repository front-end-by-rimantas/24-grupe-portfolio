function services(data) {
  // input validation
  if (typeof data !== 'object' ||
    Array.isArray(data)) {
    return 'Netinkamo tipo parametras';
  }

  const allowedKeys = ['selector', 'list'];
  const keys = Object.keys(data);
  if (keys.length !== 2) {
    return 'Netinkamas kiekis objekto raktazodziu';
  }

  for (const key of keys) {
    if (!allowedKeys.includes(key)) {
      return `Neatpazintas raktazodis "${key}"`;
    }
  }

  const { selector, list } = data;

  if (!Array.isArray(list)) {
    return 'Parametras "list" netinkamo formato';
  }

  if (typeof selector !== 'string' ||
    selector === '') {
    return 'Parametras "selector" netinkamo formato';
  }

  // logic
  const DOM = document.querySelector(selector);
  const HTML = list.reduce((html, item) =>
    html + `<div class="service">
              ${item.icon.map(icon => `<i class="fa fa-${icon}"></i>`).join('')}
              <h3>${item.title}</h3>
              <p>${item.description}</p>
          </div>`, '');

  // post logic validation
  if (HTML === '') {
    return 'Duomenyse nerasta jokios teisingos informacijos';
  }

  // result return
  DOM.innerHTML = HTML;

  return true;
}

export { services }
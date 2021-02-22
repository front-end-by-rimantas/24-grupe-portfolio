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

  if (!Array.isArray(data.list)) {
    return 'Parametras "list" netinkamo formato';
  }

  if (typeof data.selector !== 'string' ||
    data.selector === '') {
    return 'Parametras "selector" netinkamo formato';
  }


  // logic
  // post logic validation
  // result return
  return true;
}

export { services }
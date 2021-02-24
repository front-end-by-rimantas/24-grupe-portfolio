import { services } from './services.js';

describe('Ar tinkamas services duomenu tipas', () => {
  test('nepriima skaiciaus', () => {
    expect(services(5)).toBe('Netinkamo tipo parametras');
  })
  test('nepriima teksto', () => {
    expect(services('labas')).toBe('Netinkamo tipo parametras');
  })
  test('nepriima array', () => {
    expect(services([])).toBe('Netinkamo tipo parametras');
  })
})

describe('Tikriname ar objekto struktura yra tinkama', () => {
  test('tuscias objektas', () => {
    expect(services({})).toBe('Netinkamas kiekis objekto raktazodziu');
  })
  test('neuztenka, kai tik 1 raktazodis', () => {
    expect(services({ selector: '#demo' })).toBe('Netinkamas kiekis objekto raktazodziu');
  })
  test('netinkamas raktazodziu rinkinys, prigavo "size"', () => {
    expect(services({ selector: '#demo', size: 5 })).toBe('Neatpazintas raktazodis "size"');
  })
  test('netinkamas raktazodziu rinkinys, prigavo "b"', () => {
    expect(services({ b: '#demo', a: 5 })).toBe('Neatpazintas raktazodis "b"');
  })
  test('netinkamas raktazodziu rinkinys, prigavo "a"', () => {
    expect(services({ a: '#demo', b: 5 })).toBe('Neatpazintas raktazodis "a"');
  })
  test('"list" negali buti skaicius', () => {
    expect(services({ selector: '#demo', list: 5 })).toBe('Parametras "list" netinkamo formato');
  })
  test('"list" negali buti tekstas', () => {
    expect(services({ selector: '#demo', list: 'labas' })).toBe('Parametras "list" netinkamo formato');
  })
  test('"selector" negali buti skaicius', () => {
    expect(services({ selector: 5, list: [] })).toBe('Parametras "selector" netinkamo formato');
  })
  test('"selector" negali buti skaicius', () => {
    expect(services({ selector: '', list: [] })).toBe('Parametras "selector" netinkamo formato');
  })
})

describe('Tinkami duomenys grazina teisinga "services" html', () => {
  test('neradus selectoriaus vietos ismeta klaida', () => {
    document.body.innerHTML = '<div id="services_block"></div>';
    const params = {
      selector: '#wrong_services',
      list: [
        {
          icon: 'television',
          title: 'Search Optimization',
          description: 'The9 is a graphically polished, interactive, easily customizable, highly modern, fast loading.'
        }
      ]
    }
    expect(services(params)).toBe('Pagal pateikta selectoriu nerastas elementas');
  })

  test('grazina klaida, kai nera geru duomenu sarase', () => {
    document.body.innerHTML = '<div id="services_block"></div>';
    const params = {
      selector: '#services_block',
      list: [
        {},
        4154,
        'Labas'
      ]
    }
    expect(services(params)).toBe('Duomenyse nerasta jokios teisingos informacijos');
  })

  test('turi grazinti "true", jei parametrai yra tinkami', () => {
    document.body.innerHTML = '<div id="services_block"></div>';
    const params = {
      selector: '#services_block',
      list: [
        {
          icon: 'television',
          title: 'Search Optimization',
          description: 'The9 is a graphically polished, interactive, easily customizable, highly modern, fast loading.'
        }
      ]
    }
    expect(services(params)).toBeTruthy();
  })
})
const pismena = 'abcdefghijklmnopqrstuvwxyzěščřžýáíéúů';
const slova = ['mrak', 'pes', 'strom', 'had', 'auto'];   // slova které můžeme přidat

const okno = document.querySelector('#okno');

okno.addEventListener('keydown', (e) => {
  console.log('Kód stisknuté klávesy: ' + e.code);
  if (e.code === 'Space') {
    e.preventDefault();
    const random = Math.random();
    if (random < 0.5) { // 50% na to, jestli se přidá náhodné číslo
      okno.value += pismena[Math.floor(Math.random() * pismena.length)];
    } else { // 50% na to, jestli se přidá náhodné slovo
      const randomWord = slova[Math.floor(Math.random() * slova.length)];
      okno.value += randomWord + ' ';
    }
  }
});

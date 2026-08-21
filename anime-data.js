const animeImages = [
  "86 Eighty-Six.png",
  "A voz do silêncio.png",
  "ajin demi human.png",
  "Akame Ga Kill.png",
  "akira.jpeg",
  "Angels of death.png",
  "Another.png",
  "attack on titan.png",
  "B IIII_ The Beginning.png",
  "Black Clover.png",
  "Black Lagoon.png",
  "Blades of the guardians.png",
  "blood c.png",
  "Blue Exorcist.png",
  "Buko no hero.png",
  "classroom of the elite.png",
  "Cowboy bebop.png",
  "Danmachi!.png",
  "darleng in the franxx.png",
  "death note.png",
  "Dororo.png",
  "Elfen Lied.png",
  "Erased.png",
  "fire force.png",
  "golden time.png",
  "Great Pretender.png",
  "haikyou.png",
  "Himouto Umaru-Chan.png",
  "Hitori no Shita.png",
  "Horimiya.png",
  "hunter x hunter.png",
  "Inuyashiki.png",
  "Jujutsu Kaisen.png",
  "Kekkai Sensen.png",
  "Kimetsu no Yaiba.png",
  "Kimi No Suizou Wo Tabetai.png",
  "Kono Subarashii Sekai ni Shukufuku wo!.png",
  "lain.png",
  "Magical Girl Site (2018).png",
  "Miss Kobayashi's Dragon Maid.png",
  "mob pycho.png",
  "monster.png",
  "ninja kamui.png",
  "Noragami.png",
  "O fantasma do futuro.png",
  "O sabor da juventude.png",
  "O tempo contigo.png",
  "One Punch Man.png",
  "parasyte.png",
  "Perfect Blue.png",
  "Platinum End.png",
  "Quando as cigarra choram.png",
  "Re_ ZERO.png",
  "SAMURAI CHAMPLOO.png",
  "Scissor seven.png",
  "Shiki.png",
  "Sono Bisque Doll.png",
  "Spriggan.png",
  "Spy X family.png",
  "Tengoku Daimayou.png",
  "Tenkuu Shinpan.png",
  "terror in resonance.png",
  "The Promised Neverland.png",
  "TOKYO REVENGERS.png",
  "tomako love story.png",
  "Tonikaku kwaii.png",
  "Undead Unluck.png",
  "uzaki-chan.png",
  "your lie in apri.png",
  "yu yu hakusho.png"
];

window.animeImages = animeImages;

function renderAnimeCards() {
  const list = document.getElementById('anime-list');

  if (!list || !window.animeImages) return;

  window.animeImages.forEach((fileName) => {
    const card = document.createElement('div');
    card.className = 'anime-card';

    const img = document.createElement('img');
    img.src = `anime_png/${fileName}`;
    img.alt = fileName.replace(/\.[^.]+$/, '');
    img.className = 'anime-image';

    const title = document.createElement('p');
    title.className = 'anime-name';
    title.textContent = fileName.replace(/\.[^.]+$/, '');

    card.appendChild(img);
    card.appendChild(title);
    list.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', renderAnimeCards);

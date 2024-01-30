const bibleVerses = [
    {
        text: "For I know the plans I have for you, declares the Lord, plans for welfare and not for evil, to give you a future and a hope.",
        verse: "(Jeremiah 29:11)",
    },
    {
        text: "The Lord is my shepherd; I shall not want.",
        verse: "(Psalm 23:1)",
    },
    {
        text: "I can do all things through him who strengthens me.",
        verse: "(Philippians 4:13)",
    },
    {
        text: "The fear of the Lord is the beginning of knowledge; fools despise wisdom and instruction.",
        verse: "(Proverbs 1:7)",
    },
    {
        text: "And we know that in all things God works for the good of those who love him, who have been called according to his purpose.",
        verse: "(Romans 8:28)",
    },
    {
        text: "Trust in the Lord with all your heart, and do not lean on your own understanding.",
        verse: "(Proverbs 3:5)",
    },
    {
        text: "Jesus answered, 'I am the way and the truth and the life. No one comes to the Father except through me.",
        verse: "(John 14:6)",
    },
    {
        text: "But the fruit of the Spirit is love, joy, peace, forbearance, kindness, goodness, faithfulness, gentleness and self-control. Against such things there is no law.",
        verse: "(Galatians 5:22-23)",
    },
    {
        text: "Therefore, if anyone is in Christ, the new creation has come: The old has gone, the new is here!",
        verse: "(2 Corinthians 5:17)",
    },
    {
        text: "But seek first the kingdom of God and his righteousness, and all these things will be added to you.",
        verse: "(Matthew 6:33)",
    },
    {
        text: "Blessed are the peacemakers, for they will be called children of God.",
        verse: "(Matthew 5:9)",
    },
    {
        text: "And we have known and believed the love that God has for us. God is love, and he who abides in love abides in God, and God in him.",
        verse: "(1 John 4:16)",
    },
    {
        text: "He who dwells in the secret place of the Most High shall abide under the shadow of the Almighty.",
        verse: "(Psalm 91:1)",
    },
    {
        text: "The Lord will fight for you, and you shall hold your peace.",
        verse: "(Exodus 14:14)",
    },
    {
        text: "The Lord is good, a stronghold in the day of trouble; and He knows those who trust in Him.",
        verse: "(Nahum 1:7)",
    },
    {
        text: "And we know that all things work together for good to those who love God, to those who are the called according to His purpose.",
        verse: "(Romans 8:28)",
    },
    {
        text: "For I am persuaded that neither death nor life, nor angels nor principalities nor powers, nor things present nor things to come, nor height nor depth, nor any other created thing, shall be able to separate us from the love of God which is in Christ Jesus our Lord.",
        verse: "(Romans 8:38-39)",
    },
    {
        text: "The Lord is my light and my salvation; whom shall I fear? The Lord is the strength of my life; of whom shall I be afraid?",
        verse: "(Psalm 27:1)",
    },
    {
        text: "Be strong and of good courage; do not be afraid, nor be dismayed, for the Lord your God is with you wherever you go.",
        verse: "(Joshua 1:9)",
    },
    {
        text: "He gives power to the weak, and to those who have no might, He increases strength.",
        verse: "(Isaiah 40:29)",
    }
];
// Use For loops
// Rewrite the Array

console.log(bibleVerses);

const versesContainer = document.getElementById("versesContainer");
const randomVerseButton = document.getElementById("randomVerseButton");
const favoritesContainer = document.getElementById("favoritesContainer");
const favoriteVerseButton = document.getElementById("favoriteVerseButton");

function randomizeddisplay() {
    const randomin = Math.floor(Math.random() * bibleVerses.length);
    const randomver = bibleVerses[randomin];
    const randomVerseCard = `
        <div class="verse-box">
            <p>${randomver.verse}: ${randomver.text}</p>
        </div>
    `;
    versesContainer.innerHTML = randomVerseCard;
}
function randomdisplay(){


    
}
function favoriteVerse() {
    const displayedVerse = versesContainer.innerHTML;
    const favoriteVerseCard = `
        <div class="favorite-box">
            <p>${displayedVerse}</p>
        </div>
    `;
    favoritesContainer.innerHTML += favoriteVerseCard;
}
randomVerseButton.addEventListener("click", randomizeddisplay);
favoriteVerseButton.addEventListener("click", favoriteVerse);

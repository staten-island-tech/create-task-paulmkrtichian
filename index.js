const bibleVerses = [
    {
        text: "May the God of hope fill you with all joy and peace as you trust in him, so that you may overflow with hope by the power of the Holy Spirit.",
        verse: "Romans 15:13"
    },
    {
        text: "Now to him who is able to do immeasurably more than all we ask or imagine, according to his power that is at work within us.",
        verse: "Ephesians 3:20"
    },
    {
        text: "For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord.",
        verse: "Romans 8:38-39"
    },
    {
        text: "The steadfast love of the Lord never ceases; his mercies never come to an end; they are new every morning; great is your faithfulness.",
        verse: "Lamentations 3:22-23"
    },
    {
        text: "Jesus looked at them and said, 'With man it is impossible, but not with God. For all things are possible with God.'",
        verse: "Mark 10:27"
    },
    {
        text: "Trust in the Lord with all your heart, and do not lean on your own understanding. In all your ways acknowledge him, and he will make straight your paths.",
        verse: "Proverbs 3:5-6"
    },
    {
        text: "Be watchful, stand firm in the faith, act like men, be strong. Let all that you do be done in love.",
        verse: "1 Corinthians 16:13-14"
    },
    {
        text: "The Lord said, “Behold, they are one people, and they all have the same language. And this is what they began to do, and now nothing which they purpose to do will be impossible for them.",
        verse: "Genesis 11:6"
    },
    {
        text: "Fear of man will prove to be a snare, but whoever trusts in the Lord is kept safe.",
        verse: "Proverbs 29:25"
    },
    {
        text: "But you, Lord, are a shield around me, my glory, the One who lifts my head high.",
        verse: "Psalms 3:3"
    },
    {
        text: "I can do all things through him who strengthens me.",
        verse: "Philippians 4:13"
    },
    {
        text: "Fear not, for I am with you; be not dismayed, for I am your God; I will strengthen you, I will help you, I will uphold you with my righteous right hand.",
        verse: "Isaiah 41:10"
    }
];


const DOMSelectors = {
    favoritecontainer: document.getElementById("favoritecontainer"),
    randomcontainer: document.getElementById("versecontainer"),
    randomVerseButton: document.getElementById("randombutton"),
    favoriteVerseButton: document.getElementById("favoritebutton"),
  
}
DOMSelectors.randomVerseButton.addEventListener("click", RandomizedVerse);
DOMSelectors.favoriteVerseButton.addEventListener("click", FavoriteVerse);

function RandomizedVerse() {
    const randomin = Math.floor(Math.random() * bibleVerses.length);
    const randomver = bibleVerses[randomin];
    const randomcard = `
        <div class="versecontainer">
            <p>${randomver.verse} - ${randomver.text}</p>
        </div>
    `;
    DOMSelectors.randomcontainer.innerHTML = randomcard;
    
}
function FavoriteVerse() {
    for (let i = 0; i < DOMSelectors.randomcontainer.children.length; i++) {
        const displayedverse = DOMSelectors.randomcontainer.children[i].innerText;

    const favoritecard = `
        <div class="favorites">
           <p>${displayedverse}</p>
        </div>
    `;
    DOMSelectors.favoritecontainer.innerHTML += favoritecard;
}
}

function deletefavorite{
    
}
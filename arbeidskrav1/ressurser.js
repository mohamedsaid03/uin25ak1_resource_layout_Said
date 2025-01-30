document.addEventListener("DOMContentLoaded", () => {
    const ressurser = [
        { kategori: "HTML", navn: "W3Schools", url: "https://www.w3schools.com/" },
        { kategori: "HTML", navn: "HTML Living standard", url: "https://html.spec.whatwg.org/" },
        { kategori: "HTML", navn: "HTML.com Tutorials", url: "https://html.com/" },
        { kategori: "CSS", navn: "CSS Tricks", url: "https://css-tricks.com/" },
        { kategori: "CSS", navn: "MDN CSS Docs", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
        { kategori: "JavaScript", navn: "MDN JavaScript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
        { kategori: "React", navn: "React Documentation", url: "https://reactjs.org/docs/getting-started.html" },
        { kategori: "Sanity", navn: "Sanity.io", url: "https://www.sanity.io/" }
    ];

    const ressursListe = document.getElementById("ressurs-liste");
    const knapper = document.querySelectorAll("nav button");

    // Standardvisning: HTML-ressurser
    visRessurser("HTML");

    // Legg til klikkhendelser på knappene
    knapper.forEach(knapp => {
        knapp.addEventListener("click", () => {
            document.querySelector("nav button.active").classList.remove("active");
            knapp.classList.add("active");
            visRessurser(knapp.dataset.category);
        });
    });

    function visRessurser(kategori) {
        ressursListe.innerHTML = `
            <h2>${kategori}</h2>
            <p>${beskrivelse(kategori)}</p>
            <ul></ul>
        `;
        const ul = ressursListe.querySelector("ul");

        const filtrerteRessurser = ressurser.filter(r => r.kategori === kategori);
        filtrerteRessurser.forEach(ressurs => {
            const li = document.createElement("li");
            const link = document.createElement("a");
            link.href = ressurs.url;
            link.textContent = ressurs.navn;
            link.target = "_blank";
            li.appendChild(link);
            ul.appendChild(li);
        });
    }

    function beskrivelse(kategori) {
        const beskrivelser = {
            "HTML": "HTML står for HyperText Markup Language, og er et strukturspråk som brukes for å lage nettsider.",
            "CSS": "CSS brukes for å style nettsider og legge til design og layout.",
            "JavaScript": "JavaScript brukes for å lage interaktive og dynamiske funksjoner på nettsider.",
            "React": "React er et JavaScript-bibliotek for å bygge brukergrensesnitt.",
            "Sanity": "Sanity er en CMS-løsning for å håndtere innhold på en fleksibel måte."
        };
        return beskrivelser[kategori] || "";
    }
});

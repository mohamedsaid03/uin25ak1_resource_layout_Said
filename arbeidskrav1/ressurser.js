const resources = [
    {
        category: "HTML",
        text: "HTML står for HyperText Markup Language, og er et strukturspråk som brukes for å lage strukturer til nettside- og applikasjonsgrensesnitt.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/html/"
            },
            {
                title: "HTML Living standard",
                url: "https://html.spec.whatwg.org/multipage/"
            },
            {
                title: "HTML.com Tutorials",
                url: "https://html.com/"
            },
        ]
    },
    {
        category: "CSS",
        text: "CSS står for Cascading StyleSheets, og brukes for å sette stilregler på HTML-elementer.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/css/"
            },
            {
                title: "W3C HTML & CSS Standards",
                url: "https://www.w3.org/standards/webdesign/htmlcss.html"
            },
            {
                title: "W3C CSS Validator",
                url: "https://jigsaw.w3.org/css-validator/"
            },
            {
                title: "CSS Tricks",
                url: "https://css-tricks.com/"
            },
        ]
    },
    {
        category: "JavaScript",
        text: "JavaScript er et scriptspråk basert på EcmaScript. JavaScript kjører direkte i nettleseren, og brukes ofte til å manipulere HTML og CSS i webgrensnesnitt.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/js/"
            },
            {
                title: "MDN Web Docs",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            },
            {
                title: "How to read JavaScript Documentation",
                url: "https://www.youtube.com/watch?v=O3iR-CIufKM"
            },
        ]
    },
    {
        category: "React",
        text: "React er et rammeverk bygget i JavaScript. React bruker komponenter og states for å lage en levende frontend.",
        sources: [
            {
                title: "React documentation",
                url: "https://reactjs.org/docs/getting-started.html"
            },
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/REACT/DEFAULT.ASP"
            },
            {
                title: "How to read JavaScript Documentation",
                url: "https://www.youtube.com/watch?v=O3iR-CIufKM"
            },
        ]
    },
    {
        category: "Sanity and headless CMS",
        text: "Sanity er et headless CMS som står for innholdsadministrasjon. Innhold hentes inn i applikasjoner via GROQ-spørringer.",
        sources: [
            {
                title: "Sanity documentation",
                url: "https://www.sanity.io/docs"
            },
            {
                title: "OnCrawl: a beginners guide to headless CMS",
                url: "https://www.oncrawl.com/technical-seo/beginners-guide-headless-cms/"
            },
            {
                title: "Section.io: Getting started with Sanity CMS",
                url: "https://www.section.io/engineering-education/getting-started-with-sanity-cms/"
            },
        ]
    },
]

const HTMLInfo = resources.filter((html) => html.category === "HTML")

const CSSInfo = resources.filter((css) => css.category === "CSS")

const javascriptInfo = resources.filter((javascript) => javascript.category === "JavaScript")

const ReactInfo = resources.filter((react) => react.category === "React")

const SHCMSInfo = resources.filter((shcms) => shcms.category === "Sanity and headless CMS")

const main = document.getElementById("main")
const knpHTML = document.getElementById("knpHTML")
const knpCSS = document.getElementById("knpCSS")
const knpJScript = document.getElementById("knpJScript")
const knpReact = document.getElementById("knpReact")
const knpSHCMS = document.getElementById("knpSHCMS")

knpHTML.classList.add("active");

function HTMLmap(){
    HTMLInfo.map((html) => {
        let links =``;
        html.sources.map((link) => {
            links += `<li><a target="blank" href="${link.url}">${link.title}</a></li>`;
        });
        main.innerHTML = `<h2>${html.category}</h2>
        <p>${html.text}</p>
        <ul>
        ${links}
        </ul>`
    })

    knpHTML.classList.add("active");

    knpCSS.classList.remove("active");
    knpJScript.classList.remove("active");
    knpReact.classList.remove("active");
    knpSHCMS.classList.remove("active");
}

function CSSmap(){
    CSSInfo.map((css) => {
        let links =``;
        css.sources.map((link) => {
            links += `<li><a target="blank" href="${link.url}">${link.title}</a></li>`;
        });
        main.innerHTML = `<h2>${css.category}</h2>
        <p>${css.text}</p>
        <ul>
        ${links}
        </ul>`
    })

    knpCSS.classList.add("active");

    knpHTML.classList.remove("active");
    knpJScript.classList.remove("active");
    knpReact.classList.remove("active");
    knpSHCMS.classList.remove("active");
}

function JavaScriptmap(){
    javascriptInfo.map((javascript) => {
        let links =``;
        javascript.sources.map((link) => {
            links += `<li><a target="blank" href="${link.url}">${link.title}</a></li>`;
        });
        main.innerHTML = `<h2>${javascript.category}</h2>
        <p>${javascript.text}</p>
        <ul>
        ${links}
        </ul>`
    })

    knpJScript.classList.add("active");

    knpHTML.classList.remove("active");
    knpCSS.classList.remove("active");
    knpReact.classList.remove("active");
    knpSHCMS.classList.remove("active");
}

function Reactmap(){
    ReactInfo.map((react) => {
        let links =``;
        react.sources.map((link) => {
            links += `<li><a target="blank" href="${link.url}">${link.title}</a></li>`;
        });
        main.innerHTML = `<h2>${react.category}</h2>
        <p>${react.text}</p>
        <ul>
        ${links}
        </ul>`
    })

    knpReact.classList.add("active");

    knpHTML.classList.remove("active");
    knpCSS.classList.remove("active");
    knpJScript.classList.remove("active");
    knpSHCMS.classList.remove("active");
}

function SHCMSmap(){
    SHCMSInfo.map((shcms) => {
        let links =``;
        shcms.sources.map((link) => {
            links += `<li><a target="blank" href="${link.url}">${link.title}</a></li>`;
        });
        main.innerHTML = `<h2>${shcms.category}</h2>
        <p>${shcms.text}</p>
        <ul>
        ${links}
        </ul>`
    })

    knpSHCMS.classList.add("active");

    knpHTML.classList.remove("active");
    knpCSS.classList.remove("active");
    knpJScript.classList.remove("active");
    knpReact.classList.remove("active");
}

HTMLmap()
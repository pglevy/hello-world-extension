const article = document.querySelector("article");

if (article) {
    const addButton = document.createElement("button");
    addButton.textContent = "Create Gist";

    const codeSnippet = article.querySelector("pre");

    codeSnippet.insertAdjacentElement("afterend", addButton)
}
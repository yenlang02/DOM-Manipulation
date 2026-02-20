// Yen Lang
// Week 5: DOM Manipulation
// CIS 4004
// February 19, 2026


function showFilter() {
    const filterForm = document.getElementById("filterContent");
    const newForm = document.getElementById("newContent");
  
    // hide other menu
    newForm.style.display = "none";
  
    // filter menu
    if (filterForm.style.display === "block") {
      filterForm.style.display = "none";
    } else {
      filterForm.style.display = "block";
    }
}
  
function showAddNew() {
    const filterForm = document.getElementById("filterContent");
    const newForm = document.getElementById("newContent");
  
    // hide other menu
    filterForm.style.display = "none";
  
    // add new article form
    newForm.style.display = (newForm.style.display === "flex") ? "none" : "flex";
}
  
function filterArticles() {
    const showOpinion = document.getElementById("opinionCheckbox").checked;
    const showRecipe = document.getElementById("recipeCheckbox").checked;
    const showUpdate = document.getElementById("updateCheckbox").checked;
  
    const articles = document.querySelectorAll("#articleList article");
  
    articles.forEach(article => {
      if (article.classList.contains("opinion")) {
        article.style.display = showOpinion ? "" : "none";
      } else if (article.classList.contains("recipe")) {
        article.style.display = showRecipe ? "" : "none";
      } else if (article.classList.contains("update")) {
        article.style.display = showUpdate ? "" : "none";
      }
    });
}
  
function addNewArticle() {
    const titleEl = document.getElementById("inputHeader");
    const textEl = document.getElementById("inputArticle");
  
    const title = titleEl.value.trim();
    const text = textEl.value.trim();
  
    const typeRadio = document.querySelector('input[name="articleType"]:checked');
    if (!title || !text || !typeRadio) {
      alert("Please enter a Title, select a Type, and enter Text.");
      return;
    }
  
    const type = typeRadio.value; // "opinion", "recipe", "update"
  
    // create the article element with correct class
    const article = document.createElement("article");
    article.classList.add(type);
  
    // marker
    const marker = document.createElement("span");
    marker.classList.add("marker");
    marker.textContent = (type === "update") ? "Update" : capitalize(type);
  
    // title
    const h2 = document.createElement("h2");
    h2.textContent = title;
  
    // body
    const pText = document.createElement("p");
    pText.textContent = text;
  
    // optional "Read more..."
    const pLink = document.createElement("p");
    const a = document.createElement("a");
    a.href = "moreDetails.html";
    a.textContent = "Read more...";
    pLink.appendChild(a);
  
    // assemble
    article.appendChild(marker);
    article.appendChild(h2);
    article.appendChild(pText);
    article.appendChild(pLink);
  
    // add to list
    document.getElementById("articleList").appendChild(article);
  
    // clear inputs
    titleEl.value = "";
    textEl.value = "";
    typeRadio.checked = false;
  
    // apply current filters to the new article too
    filterArticles();
}
  
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
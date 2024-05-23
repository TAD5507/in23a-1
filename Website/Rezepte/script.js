// Suchfunktion

const searchInput = document.getElementById("search")
if (searchInput instanceof HTMLInputElement) {
  searchInput.addEventListener("input", function() {
    console.log("SearchInput")

    let search = this.value.toLowerCase()

    let h1Elements = document.querySelectorAll(
      "div#rezept-liste-hauptteil > article h1"
    )
    h1Elements.forEach(item => hideNonMatchingElements1(item, search))
  })
}

function hideNonMatchingElements1(item, search) {
  const article = item.closest("article") 

  if (item.textContent) {
    let itemName = item.textContent.toLowerCase()
    if (itemName.includes(search) || search === "") {
      article.classList.remove("hidden")
    } else {
      article.classList.add("hidden")
    }

    console.log("In function", article)
  }
}

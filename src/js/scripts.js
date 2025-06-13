// Function to load HTML content dynamically
const loadPageContent = (pageId, pageUrl) => {
  fetch(pageUrl)
    .then((response) => response.text())
    .then((html) => {
      document.getElementById(pageId).innerHTML = html;
    })
    .catch((error) => {
      console.error("Error loading page content:", error);
    });
};

// When the page is loaded, load content for each page
window.addEventListener("DOMContentLoaded", () => {
  loadPageContent("page1", "pages/ideas-page.html");
  loadPageContent("page2", "pages/ai-page.html");
  loadPageContent("page3", "pages/ideas-page2.html");
});

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
  loadPageContent("ideas", "pages/ideas-page.html");
  loadPageContent("ai", "pages/ai-page.html");
  loadPageContent("feedback", "pages/feedback.html");
  loadPageContent("connect", "pages/connect-page.html");
});

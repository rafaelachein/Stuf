// Sample wiki pages with Markdown content
const pages = {
    'home': `# Welcome to Stuf Wiki

This is a **markdown** wiki that converts to HTML!

## Features
- Write in Markdown
- Auto-converts to HTML
- Sidebar navigation

> This is a blockquote example
`,
    'getting-started': `# Getting Started

## Installation

1. Clone the repo
2. Open \`index.html\`
3. Start writing!

\`\`\`javascript
console.log('Your code here');
\`\`\`
`,
    'advanced': `# Advanced Topics

### Code Example

Here's some inline \`code\` and a block:

\`\`\`python
def hello():
    print("Hello, World!")
\`\`\`
`
};

// Initialize the wiki
function initWiki() {
    populateNav();
    loadPage('home');
}

// Populate navigation menu
function populateNav() {
    const navList = document.getElementById('nav-list');
    Object.keys(pages).forEach(key => {
        const li = document.createElement('li');
        const link = document.createElement('a');
        link.href = '#';
        link.textContent = key.charAt(0).toUpperCase() + key.slice(1);
        link.dataset.page = key;
        link.addEventListener('click', (e) => {
            e.preventDefault();
            loadPage(key);
        });
        li.appendChild(link);
        navList.appendChild(li);
    });
}

// Load and render a page
function loadPage(pageName) {
    const content = pages[pageName];
    const pageContent = document.getElementById('page-content');
    
    // Convert Markdown to HTML using marked.js
    pageContent.innerHTML = marked.parse(content);
    
    // Update active nav link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.classList.remove('active');
        if (link.dataset.page === pageName) {
            link.classList.add('active');
        }
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', initWiki);
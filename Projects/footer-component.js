
class KenFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer style="
        text-align: center;
        padding: 10px;
        font-size: 0.85rem;
        color: #666;
        margin-top: 30px;
      ">
        🔒 Created by 
        <a href="https://yourportfolio.com" target="_blank" style="color: #3498db; text-decoration: none;">
          Kenneth Agyei
        </a> © 2025 |
        <a href="https://github.com/yourusername" target="_blank" style="color: #333; margin-left: 8px;">
          <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/github.svg" alt="GitHub" width="16" style="vertical-align: middle;" />
        </a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" style="color: #0077b5; margin-left: 8px;">
          <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg" alt="LinkedIn" width="16" style="vertical-align: middle;" />
        </a>
      </footer>
    `;
  }
}
customElements.define('ken-footer', KenFooter);

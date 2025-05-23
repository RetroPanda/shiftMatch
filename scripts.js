document.addEventListener('DOMContentLoaded', function() {
    const footerHTML = `
        <footer class="site-footer">
            <div class="footer-content">
                <div class="copyright">
                    © ShiftMatch |
                </div>
                <div class="footer-links">
                    <a href="/terms">Terms of Use</a> |
                    <a href="/access-manual">Access to Information Manual</a> |
                    <a href="/privacy">Privacy Statement</a> |
                    <a href="/cookie-policy">Cookie Policy</a>
                </div>
                <div class="contact-link">
                    <a href="/contact">Contact <i class="fa-solid fa-envelope"></i></a>
                </div>
            </div>
        </footer>
    `;
    document.body.insertAdjacentHTML('beforeend', footerHTML);
}); 
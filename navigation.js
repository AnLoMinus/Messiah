// פונקציה לזיהוי המיקום הנוכחי והתאמת הנתיבים
function getAdjustedPaths() {
  // בודק אם אנחנו בעמוד הראשי על ידי בדיקת הנתיב
  const isMainPage = window.location.pathname.includes("./");

  return {
    home: isMainPage ? "./index.html" : "../index.html",
    moses: isMainPage
      ? "./משה רבנו - המדריך השלם/index.html"
      : "../משה רבנו - המדריך השלם/index.html",
    david: isMainPage
      ? "./משיח בן דוד - המדריך השלם/index.html"
      : "../משיח בן דוד - המדריך השלם/index.html",
    joseph: isMainPage
      ? "./משיח בן יוסף - המדריך השלם/index.html"
      : "../משיח בן יוסף - המדריך השלם/index.html",
    mosesGuide: isMainPage
      ? "./משה רבנו - המדריך השלם/print.html"
      : "../משה רבנו - המדריך השלם/print.html",
    davidGuide: isMainPage
      ? "./משיח בן דוד - המדריך השלם/print.html"
      : "../משיח בן דוד - המדריך השלם/print.html",
    josephGuide: isMainPage
      ? "./משיח בן יוסף - המדריך השלם/print.html"
      : "../משיח בן יוסף - המדריך השלם/print.html",
    mosesSteps: isMainPage
      ? "./משה רבנו - המדריך השלם/practical_steps.html"
      : "../משה רבנו - המדריך השלם/practical_steps.html",
    davidSteps: isMainPage
      ? "./משיח בן דוד - המדריך השלם/practical_steps.html"
      : "../משיח בן דוד - המדריך השלם/practical_steps.html",
    josephSteps: isMainPage
      ? "./משיח בן יוסף - המדריך השלם/practical_steps.html"
      : "../משיח בן יוסף - המדריך השלם/practical_steps.html",
  };
}

// יצירת אלמנט התפריט
function createNavigation() {
  // בודק אם אנחנו בדף הראשי
  const isMainPage = window.location.pathname.includes("./");
  if (isMainPage) {
    return; // אם אנחנו בדף הראשי, לא מציגים את התפריט
  }

  const footer = document.createElement("footer");
  footer.className = "site-footer";

  // קבלת הנתיבים המותאמים
  const paths = getAdjustedPaths();

  footer.innerHTML = `
        <div class="footer-container">
            <div class="footer-content">
                <div class="footer-brand">
                    <h5 class="mb-3">המדריך השלם למשיח</h5>
                    <p class="mb-0">מדריך מקיף המתאר את תפקידיהם של שלושת המשיחים בתהליך הגאולה 🕊️</p>
                </div>
                <div class="messiah-sections">
                    <div class="messiah-section">
                        <h6 class="section-title">משה רבנו</h6>
                        <div class="section-links">
                            <a href="${paths.moses}" class="nav-link moses-link">
                                <i class="fas fa-book-reader"></i>
                                דף הבית
                            </a>
                            <a href="${paths.mosesGuide}" class="guide-link moses-guide">
                                <i class="fas fa-book"></i>
                                המדריך
                            </a>
                            <a href="${paths.mosesSteps}" class="guide-link moses-steps">
                                <i class="fas fa-list-check"></i>
                                צעדים מעשיים
                            </a>
                        </div>
                    </div>
                    <div class="messiah-section">
                        <h6 class="section-title">משיח בן דוד</h6>
                        <div class="section-links">
                            <a href="${paths.david}" class="nav-link david-link">
                                <i class="fas fa-crown"></i>
                                דף הבית
                            </a>
                            <a href="${paths.davidGuide}" class="guide-link david-guide">
                                <i class="fas fa-book"></i>
                                המדריך
                            </a>
                            <a href="${paths.davidSteps}" class="guide-link david-steps">
                                <i class="fas fa-list-check"></i>
                                צעדים מעשיים
                            </a>
                        </div>
                    </div>
                    <div class="messiah-section">
                        <h6 class="section-title">משיח בן יוסף</h6>
                        <div class="section-links">
                            <a href="${paths.joseph}" class="nav-link joseph-link">
                                <i class="fas fa-sword-alt"></i>
                                דף הבית
                            </a>
                            <a href="${paths.josephGuide}" class="guide-link joseph-guide">
                                <i class="fas fa-book"></i>
                                המדריך
                            </a>
                            <a href="${paths.josephSteps}" class="guide-link joseph-steps">
                                <i class="fas fa-list-check"></i>
                                צעדים מעשיים
                            </a>
                        </div>
                    </div>
                </div>
                <div class="footer-links">
                    <a href="${paths.home}" class="nav-link home-link">
                        <i class="fas fa-home"></i>
                        דף ראשי
                    </a>
                </div>
                <div class="footer-bottom">
                    <hr class="divider">
                    <div class="footer-info">
                        <small class="copyright">© 2024 כל הזכויות שמורות</small>
                        <a href="https://github.com/AnLoMinus/Messiah/" target="_blank" class="github-link">
                            <i class="fab fa-github"></i>
                            בקר במאגר ב-GitHub
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `;

  // הוספת סגנונות CSS
  const style = document.createElement("style");
  style.textContent = `
        .site-footer {
            background: linear-gradient(180deg, rgba(33, 33, 33, 0.95), rgba(33, 33, 33, 0.98));
            color: white;
            padding: 2rem 0;
            margin-top: 4rem;
            box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.2);
            backdrop-filter: blur(10px);
        }

        .footer-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 1rem;
        }

        .footer-content {
            display: flex;
            flex-direction: column;
            gap: 2rem;
        }

        .footer-brand {
            text-align: center;
        }

        .footer-brand h5 {
            font-size: 1.2rem;
            margin-bottom: 0.5rem;
        }

        .footer-brand p {
            font-size: 0.9rem;
            opacity: 0.8;
        }

        .messiah-sections {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
            margin: 1rem 0;
        }

        .messiah-section {
            background: rgba(255, 255, 255, 0.05);
            border-radius: 15px;
            padding: 1.5rem;
            text-align: center;
        }

        .section-title {
            font-size: 1.1rem;
            margin-bottom: 1rem;
            color: #fff;
            font-weight: 600;
        }

        .section-links {
            display: flex;
            flex-direction: column;
            gap: 0.8rem;
        }

        .nav-link, .guide-link {
            color: white;
            text-decoration: none;
            padding: 0.5rem 1rem;
            border-radius: 50px;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            font-size: 0.9rem;
            opacity: 0.9;
            border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .nav-link i, .guide-link i {
            font-size: 1.1em;
        }

        .nav-link:hover, .guide-link:hover {
            opacity: 1;
            transform: translateY(-2px);
        }

        .home-link {
            background: linear-gradient(135deg, #4169E1, #1E90FF);
        }

        .moses-link, .moses-guide, .moses-steps {
            background: linear-gradient(135deg, #FFD700, #FFA500);
        }

        .david-link, .david-guide, .david-steps {
            background: linear-gradient(135deg, #4169E1, #1E90FF);
        }

        .joseph-link, .joseph-guide, .joseph-steps {
            background: linear-gradient(135deg, #228B22, #32CD32);
        }

        .footer-links {
            display: flex;
            justify-content: center;
            margin-top: 1rem;
        }

        .divider {
            border-color: rgba(255, 255, 255, 0.1);
            margin: 1rem 0;
        }

        .footer-info {
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 0.85rem;
        }

        .copyright {
            opacity: 0.7;
        }

        .github-link {
            color: white;
            text-decoration: none;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            opacity: 0.7;
            transition: opacity 0.3s ease;
        }

        .github-link:hover {
            opacity: 1;
        }

        @media (max-width: 768px) {
            .messiah-sections {
                grid-template-columns: 1fr;
            }

            .section-links {
                flex-direction: column;
            }

            .footer-info {
                flex-direction: column;
                gap: 1rem;
                text-align: center;
            }
        }
    `;

  document.head.appendChild(style);
  document.body.appendChild(footer);
}

// הפעלת הפונקציה כשהדף נטען
document.addEventListener("DOMContentLoaded", createNavigation);

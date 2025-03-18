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
                <div class="footer-links">
                    <a href="${paths.home}" class="nav-link home-link">
                        <i class="fas fa-home"></i>
                        דף ראשי
                    </a>
                    <a href="${paths.moses}" class="nav-link moses-link">
                        <i class="fas fa-book-reader"></i>
                        משה רבנו
                    </a>
                    <a href="${paths.david}" class="nav-link david-link">
                        <i class="fas fa-crown"></i>
                        משיח בן דוד
                    </a>
                    <a href="${paths.joseph}" class="nav-link joseph-link">
                        <i class="fas fa-sword-alt"></i>
                        משיח בן יוסף
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

        .footer-links {
            display: flex;
            justify-content: center;
            gap: 1rem;
            flex-wrap: wrap;
        }

        .nav-link {
            color: white;
            text-decoration: none;
            padding: 0.5rem 1rem;
            border-radius: 50px;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            font-size: 0.9rem;
            opacity: 0.9;
            border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .nav-link i {
            font-size: 1.1em;
        }

        .nav-link:hover {
            opacity: 1;
            transform: translateY(-2px);
        }

        .home-link {
            background: linear-gradient(135deg, #4169E1, #1E90FF);
        }

        .moses-link:hover {
            background: linear-gradient(135deg, #FFD700, #FFA500);
        }

        .david-link:hover {
            background: linear-gradient(135deg, #4169E1, #1E90FF);
        }

        .joseph-link:hover {
            background: linear-gradient(135deg, #228B22, #32CD32);
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
            .footer-links {
                flex-direction: column;
                align-items: stretch;
            }

            .nav-link {
                justify-content: center;
            }

            .footer-info {
                flex-direction: column;
                gap: 1rem;
                text-align: center;
            }
        }
    `;

  // הוספת האלמנטים לדף
  document.head.appendChild(style);
  document.body.appendChild(footer);
}

// הפעלת הפונקציה כשהדף נטען
document.addEventListener("DOMContentLoaded", createNavigation);

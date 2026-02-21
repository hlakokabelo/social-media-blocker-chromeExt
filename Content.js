const generateHtml = (host) => {
  return `
    <div class="page">
               <div class="stamp">Access Denied</div>
               <div class="four-o-four">
                     4<span>0</span>4
               </div>

              <h1 class="headline">${host} doesn't exist.<br>Your future does.</h1>
              <p class="sub">blocked by your better self</p>

              <div class="divider"><span class="divider-icon">✦</span></div>

              <div class="quote-box">
                  <p class="quote-text" id="quoteText">An investment in knowledge pays the best interest.</p>
                  <p class="quote-author" id="quoteAuthor">— Benjamin Franklin</p>
              </div>

        <div class="countdown-wrap">
             <div class="countdown-label">Time you are still not using</div>
             <div class="countdown" id="timer">00:00</div>
        </div>
    </div>
`;
};

const getRandomQuote = () => {
  // Rotating quotes
  const quotes = [
    {
      text: "An investment in knowledge pays the best interest.",
      author: "Benjamin Franklin",
    },
    {
      text: "The more that you read, the more things you will know.",
      author: "Dr. Seuss",
    },
    {
      text: "Live as if you were to die tomorrow. Learn as if you were to live forever.",
      author: "Mahatma Gandhi",
    },
    {
      text: "Knowledge is power. Information is liberating.",
      author: "Kofi Annan",
    },
    {
      text: "The beautiful thing about learning is nobody can take it from you.",
      author: "B.B. King",
    },
    {
      text: "You are always a student, never a master. You have to keep moving forward.",
      author: "Conrad Hall",
    },
  ];
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  return quote;
};

const generateStyling = () => {
  return ` <style>
            *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --cream: #f5f0e8;
    --ink: #1a1408;
    --amber: #e8a020;
    --rust: #c84b2f;
    --sage: #4a6741;
  }

  body {
    background: var(--cream);
    color: var(--ink);
    font-family: 'DM Mono', monospace;
    min-height: 100vh;
    display: grid;
    place-items: center;
    overflow: hidden;
    cursor: default;
  }

  /* Grain texture overlay */
  body::before {
    content: '';
    position: fixed;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
    pointer-events: none;
    z-index: 100;
    opacity: 0.5;
  }

  /* Decorative ruled lines */
  body::after {
    content: '';
    position: fixed;
    inset: 0;
    background-image: repeating-linear-gradient(
      0deg,
      transparent,
      transparent 39px,
      rgba(26,20,8,0.06) 39px,
      rgba(26,20,8,0.06) 40px
    );
    pointer-events: none;
  }

  .page {
    position: relative;
    text-align: center;
    padding: 40px 24px;
    animation: arrive 0.8s cubic-bezier(0.16, 1, 0.3, 1) both;
  }

  @keyframes arrive {
    from { opacity: 0; transform: translateY(24px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  /* Big stamp */
  .stamp {
    display: inline-block;
    border: 4px solid var(--rust);
    border-radius: 6px;
    padding: 6px 20px;
    font-size: 11px;
    letter-spacing: 6px;
    text-transform: uppercase;
    color: var(--rust);
    transform: rotate(-2deg);
    margin-bottom: 32px;
    position: relative;
    animation: stampIn 0.5s 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) both;
  }

  .stamp::before {
    content: '';
    position: absolute;
    inset: 3px;
    border: 1px solid var(--rust);
    border-radius: 3px;
    opacity: 0.4;
  }

  @keyframes stampIn {
    from { opacity: 0; transform: rotate(-2deg) scale(1.4); }
    to   { opacity: 1; transform: rotate(-2deg) scale(1); }
  }

  /* 404 */
  .four-o-four {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: clamp(90px, 20vw, 160px);
    font-weight: 900;
    font-style: italic;
    line-height: 0.9;
    color: var(--ink);
    letter-spacing: -4px;
    animation: fadeUp 0.6s 0.1s ease both;
    position: relative;
  }

  .four-o-four span {
    color: var(--amber);
    display: inline-block;
    animation: wobble 3s 1.2s ease-in-out infinite;
  }

  @keyframes wobble {
    0%, 100% { transform: rotate(0deg); }
    25% { transform: rotate(-3deg); }
    75% { transform: rotate(3deg); }
  }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(16px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  .headline {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: clamp(20px, 4vw, 30px);
    font-weight: 900;
    line-height: 1.2;
    max-width: 480px;
    margin: 16px auto 8px;
    animation: fadeUp 0.6s 0.2s ease both;
  }

  .sub {
    font-size: 12px;
    letter-spacing: 1px;
    color: rgba(26,20,8,0.45);
    animation: fadeUp 0.6s 0.3s ease both;
    margin-bottom: 40px;
  }

  /* Divider */
  .divider {
    display: flex;
    align-items: center;
    gap: 12px;
    max-width: 360px;
    margin: 0 auto 32px;
    animation: fadeUp 0.6s 0.35s ease both;
  }
  .divider::before, .divider::after {
    content: '';
    flex: 1;
    height: 1px;
    background: rgba(26,20,8,0.2);
  }
  .divider-icon { font-size: 16px; }

  /* Motivational quote */
  .quote-box {
    background: var(--ink);
    color: var(--cream);
    border-radius: 4px;
    padding: 24px 28px;
    max-width: 400px;
    margin: 0 auto 36px;
    text-align: left;
    position: relative;
    animation: fadeUp 0.6s 0.4s ease both;
  }

  .quote-box::before {
    content: '"';
    font-family: 'Playfair Display', serif;
    font-size: 80px;
    line-height: 0.6;
    color: var(--amber);
    position: absolute;
    top: 16px;
    left: 16px;
    opacity: 0.4;
  }

  .quote-text {
    font-family: 'Playfair Display', serif;
    font-style: italic;
    font-size: 15px;
    line-height: 1.7;
    padding-left: 20px;
    margin-bottom: 12px;
    position: relative;
    z-index: 1;
  }

  .quote-author {
    font-size: 10px;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: var(--amber);
    padding-left: 20px;
  }

  /* Countdown */
  .countdown-wrap {
    animation: fadeUp 0.6s 0.45s ease both;
    margin-bottom: 32px;
  }

  .countdown-label {
    font-size: 10px;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: rgba(26,20,8,0.4);
    margin-bottom: 8px;
  }

  .countdown {
    font-size: 28px;
    letter-spacing: 2px;
    color: var(--sage);
    font-weight: 500;
  }

.blocked-url {
    display: inline-block;
    background: rgba(200,75,47,0.08);
    border: 1px solid rgba(200,75,47,0.2);
    border-radius: 4px;
    padding: 6px 16px;
    font-size: 13px;
    color: var(--rust);
    letter-spacing: 1px;
    text-decoration: line-through;
    text-decoration-color: var(--rust);
    animation: fadeUp 0.6s 0.55s ease both;
    margin-bottom: 32px;
    display: block;
    max-width: 340px;
    margin: 0 auto 32px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  } </style>`;
};

const getScripts = () => {
  // Timer counting up — "time saved from scrolling"
  let seconds = 0;
  setInterval(() => {
    seconds++;
    const m = String(Math.floor(seconds / 60)).padStart(2, "0");
    const s = String(seconds % 60).padStart(2, "0");
    document.getElementById("timer").textContent = `${m}:${s}`;
  }, 1000);
};

const sites = [
  "Instagram.com",
  "TikTok.com",
  "YouTube.com",
  "Facebook.com",
  "X.com",
  "Twitter.com",
  "Reddit.com",
  "Snapchat.com",
  "LinkedIn.com",
  "Pinterest.com",
  "Web.WhatsApp.com",
  "Web.Telegram.org",
  "Discord.com",
  "Twitch.tv",
  "Threads.net",
  "BeReal.com",
];
const host = window.location.hostname;
const blockSite = sites
  .find((site) => {
    if (host.toLowerCase().includes(site.toLowerCase())) return site;
  })
  ?.split(".")[0];
  
if (blockSite) {
  document.head.innerHTML = generateStyling();
  document.body.innerHTML = generateHtml(blockSite);
  document.scripts = getScripts();
  const quote = getRandomQuote();
  document.getElementById("quoteText").textContent = quote.text;
  document.getElementById("quoteAuthor").textContent = "— " + quote.author;
}

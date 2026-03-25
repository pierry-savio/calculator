# 🧮 Calculator.js

A lightweight calculator built with vanilla HTML, CSS and JavaScript — no frameworks, no dependencies.

🔗 **[Live Demo](https://calculatorjs-pierry.netlify.app)**

---

## ✨ Features

- Basic arithmetic operations: `+`, `-`, `*`, `/`
- Percentage support (`%`)
- Parenthesis toggling — opens `(` and closes `)` automatically
- Decimal input (`,`)
- Erase last character (`E` button)
- Clear display (`C` button)
- Live result preview while typing
- Result revealed on `=` with an animated show/hide transition between display and result

---

## 🗂️ Project Structure

```
calculator/
├── index.html   # Markup and button bindings
├── style.css    # Layout, grid, colors and button styles
└── script.js    # Calculator logic
```

---

## 🧠 How It Works

### Display & Result
The calculator has two elements:
- `#display` — the input field showing the current expression
- `#result` — a `<p>` tag showing the evaluated result prefixed with `=`

Their CSS classes (`display-show` / `display-hide` and `result-show` / `result-hide`) are swapped on each interaction to create a smooth focus transition between typing mode and result mode.

### Input Logic (`addOnDisplay`)
- **Parentheses** — a boolean flag `openParenthesis` tracks whether to insert `(` or `)` next.
- **Operators** — a boolean flag `addedOperation` prevents two consecutive operators from being added.
- Every input triggers `calculate()` for a live result preview.

### Evaluation
Results are computed with `eval()` directly on the display string, which keeps the logic simple for a project of this scope.

---

## 🚀 Running Locally

No build step needed — just open the file in a browser:

```bash
git clone https://github.com/pierry-savio/calculator-js
cd calculator-js
open index.html
```

---

## 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| HTML5 | Structure and button event bindings |
| CSS3 | Layout (CSS Grid), transitions, theming |
| JavaScript (ES6) | Calculator logic, DOM manipulation |
| Google Fonts | Roboto Mono typeface |
| Netlify | Deployment |

---

## 👤 Author

**@pierry-savio**

const display = document.querySelector('.display');
const keys = document.querySelectorAll('.key');
const equalDisplay = document.querySelector('.equal-display');
const ans = document.querySelector('.ans');
const clearBtn = document.querySelector('.clear-btn');
const equalBtn = document.querySelector('.equal-btn');

// ✅ Safe expression evaluator that returns partial valid result
function safeEval(expr) {
    // Allow only numbers, operators, parentheses, spaces
    if (!/^[0-9+\-*/().\s]+$/.test(expr)) return "";

    let validExpr = expr.trim();

    while (validExpr) {
        try {
            const result = new Function(`return ${validExpr}`)();
            if (result === Infinity || result === -Infinity) return "Math Error";
            return result;
        } catch {
            // Try evaluating shorter version
            validExpr = validExpr.slice(0, -1);
        }
    }

    return "";
}

// 🔘 Handle clicks on calculator buttons
keys.forEach((key) => {
    key.addEventListener('click', () => {
        const value = key.value;
        const lastChar = display.value.slice(-1);
        const operators = "+-*/.";

        if (value === "Ans") {
            display.value += ans.value || "0";
            equalDisplay.value = safeEval(display.value);
            return;
        }

        // Prevent multiple operators in a row
        if (operators.includes(lastChar) && operators.includes(value)) return;

        // Prevent starting with an operator
        if (display.value === "" && operators.includes(value)) return;

        display.value += value;
        equalDisplay.value = safeEval(display.value);
    });
});

// ✅ Equal button pressed
equalBtn.addEventListener('click', () => {
    const result = safeEval(display.value);
    equalDisplay.value = result;
    ans.value = result;
});

// 🧹 Clear everything
clearBtn.addEventListener('click', () => {
    display.value = "";
    equalDisplay.value = "";
    ans.value = "";
});

// ⌨️ Keyboard Support
document.addEventListener("keydown", (e) => {
    const operators = "+-*/.";

    if ("0123456789".includes(e.key) || operators.includes(e.key)) {
        const lastChar = display.value.slice(-1);

        // Prevent double operators
        if (operators.includes(lastChar) && operators.includes(e.key)) return;

        // Prevent starting with operator
        if (display.value === "" && operators.includes(e.key)) return;

        display.value += e.key;
        equalDisplay.value = safeEval(display.value);
    } else if (e.key === "Enter") {
        const result = safeEval(display.value);
        equalDisplay.value = result;
        ans.value = result;
    } else if (e.key === "Backspace") {
        display.value = display.value.slice(0, -1);
        equalDisplay.value = safeEval(display.value);
    }
});

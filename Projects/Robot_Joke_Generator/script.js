
const chat = document.getElementById("_chat");
const jokeBtn = document.getElementById("jokeBtn");

generateJoke();
jokeBtn.addEventListener("click", generateJoke);

document.addEventListener("keydown", (e) => {
            if (e.key.toLowerCase() === 'j' && !jokeBtn.disabled) {
                generateJoke();
            }
        });
        
        

 async function generateJoke() {
    jokeBtn.disabled = true;
    const heE = "100px";
    // Scroll to bottom
            chat.scrollTop = chat.scrollHeight + Number(heE);
    const message = createMessageElement("Hey Robot tell me a joke?");
    appendMessage(message);
    const joke = createMessageElement();
    setElementContent(joke, '<i class="fa-solid fa elipsis></i>');
    appendMessage(joke);

    const res = await fetch("https://icanhazdadjoke.com", {
        headers: {
            Accept: "application/json",
        },
    })

    if (res.ok) {
        const data = await res.json();
        console.log(data);
        setElementContent(joke, data.joke);
        jokeBtn.disabled = false;
    }
}


function createMessageElement(content) {
    const element = document.createElement("div");
    element.classList.add("message");
    if (content) {
        element.classList.add("response");
        setElementContent(element, content);
    } else {
        element.classList.add("joke");
    }
    return element;
}
function setElementContent(element, content) {
    element.innerHTML = content;
}
function appendMessage(element) {
    chat.appendChild(element);
}
const resultElement = document.getElementById("result");
let recognition;
let svg = document.querySelector("svg");


function startConverting(){
    if ('webkitSpeechRecognition' in window) {
        recognition = new webkitSpeechRecognition();
        setupRecognition(recognition);
        recognition.start();
        resultElement.innerHTML = finalTranscript + interTranscript;
    }
}

function setupRecognition(recognition){
    recognition.continous = true;
    recognition.interimResults = true;
    recognition.lang = 'en_US';
    recognition.onresult = function(event) {
        //ProcessResult()
        const{finalTranscript , interTranscript } = 
        processResult(event.results);
        resultElement.innerHTML = finalTranscript + interTranscript;
        
    }
}

function processResult(results){
    let finalTranscript ='';
    let interTranscript = '';
    for (let i = 0; i < results.length; i++) {
        let transcript = results[i][0].transcript;
        transcript.replace("\n", "<br>");
    if (results[i].isFinal) {
        finalTranscript += transcript;
    } else {
        interTranscript +=transcript;
    }
    }
    return {finalTranscript, interTranscript}
}

function stopConverting(){
    
}
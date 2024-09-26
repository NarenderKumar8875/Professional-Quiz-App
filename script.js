// home page Script

const StartNow = document.querySelector('#btn');
const container = document.querySelector('.container');
const questionContainer = document.querySelector('.question-container');



StartNow.addEventListener('click', () => {
    container.classList.add('home')
    questionContainer.classList.remove('home')
    timerCount()
})


// Add Some Questions---------------------------------->
const questions = [

    {
        question: "What does CPU stand for?",
        answers: ["Central Processing Unit", "Computer Personal Unit", "Central Program Unit", "Computer Processing Unit"],
        correct: "Central Processing Unit"
    },
    {
        question: "What is the main function of the ALU?",
        answers: ["Store data", "Perform arithmetic operations", "Control memory", "Manage input/output"],
        correct: "Perform arithmetic operations"
    },
    {
        question: "Which of the following is an operating system?",
        answers: ["Microsoft Word", "Linux", "Adobe Photoshop", "Google Chrome"],
        correct: "Linux"
    },
    {
        question: "What does RAM stand for?",
        answers: ["Read Access Memory", "Random Access Memory", "Read and Memory", "Rapid Access Memory"],
        correct: "Random Access Memory"
    },
    {
        question: "What is a GPU used for?",
        answers: ["General computing", "Graphics rendering", "Data storage", "Networking"],
        correct: "Graphics rendering"
    },
    {
        question: "What is the purpose of an operating system?",
        answers: ["Run applications", "Manage hardware", "Store files", "All of the above"],
        correct: "All of the above"
    },
    {
        question: "What is the full form of HTTP?",
        answers: ["HyperText Transfer Protocol", "HyperText Transmission Protocol", "HyperTransfer Text Protocol", "HyperText Transport Protocol"],
        correct: "HyperText Transfer Protocol"
    },
    {
        question: "Which device is used to connect a computer to the internet?",
        answers: ["Router", "Switch", "Printer", "Monitor"],
        correct: "Router"
    },
    {
        question: "What is the primary purpose of a firewall?",
        answers: ["Speed up internet", "Protect from unauthorized access", "Backup data", "Store files"],
        correct: "Protect from unauthorized access"
    },
    {
        question: "What does the acronym BIOS stand for?",
        answers: ["Basic Input Output System", "Binary Input Output System", "Basic Integrated Operating System", "Binary Integrated Operating System"],
        correct: "Basic Input Output System"
    },
    {
        question: "Which of the following is a type of malware?",
        answers: ["Antivirus", "Spyware", "Firewall", "Browser"],
        correct: "Spyware"
    },
    {
        question: "What is the main purpose of a web browser?",
        answers: ["Manage files", "Create documents", "Access web pages", "Edit images"],
        correct: "Access web pages"
    },
    {
        question: "What does USB stand for?",
        answers: ["Universal Serial Bus", "Unified Standard Bus", "Universal System Bus", "Universal Serial Battery"],
        correct: "Universal Serial Bus"
    },
    {
        question: "Which programming language is known as the backbone of web development?",
        answers: ["Java", "C++", "HTML", "Python"],
        correct: "HTML"
    },
    {
        question: "What does DNS stand for?",
        answers: ["Domain Name System", "Domain Network System", "Data Network System", "Data Name System"],
        correct: "Domain Name System"
    },
    {
        question: "What is the purpose of an IP address?",
        answers: ["Identify devices on a network", "Store data", "Run applications", "Protect data"],
        correct: "Identify devices on a network"
    },
    {
        question: "Which of the following is an example of an input device?",
        answers: ["Monitor", "Keyboard", "Printer", "Speaker"],
        correct: "Keyboard"
    },
    {
        question: "What is cloud computing?",
        answers: ["Storing data on local drives", "Storing data on remote servers", "Using USB drives", "Using external hard drives"],
        correct: "Storing data on remote servers"
    },
    {
        question: "Which of the following is a computer network?",
        answers: ["LAN", "WAN", "MAN", "All of the above"],
        correct: "All of the above"
    },
    {
        question: "What is the function of the operating system?",
        answers: ["Manage computer hardware", "Run applications", "Provide user interface", "All of the above"],
        correct: "All of the above"
    },
    {
        question: "What is the use of antivirus software?",
        answers: ["Backup files", "Scan for malware", "Create documents", "Edit images"],
        correct: "Scan for malware"
    },
    {
        question: "What is the function of RAM in a computer?",
        answers: ["Permanent storage", "Temporary storage", "Network connection", "Power supply"],
        correct: "Temporary storage"
    },
    {
        question: "Which of the following is not a programming language?",
        answers: ["Python", "Java", "HTML", "C#"],
        correct: "HTML"
    },
    {
        question: "What does GUI stand for?",
        answers: ["Graphical User Interface", "Graphical Unified Interface", "General User Interface", "Global User Interface"],
        correct: "Graphical User Interface"
    },
    {
        question: "Which protocol is used for sending email?",
        answers: ["HTTP", "FTP", "SMTP", "DNS"],
        correct: "SMTP"
    },
    {
        question: "What does the term 'bug' refer to in programming?",
        answers: ["An error", "A feature", "A programming language", "A software update"],
        correct: "An error"
    },
    {
        question: "What is phishing?",
        answers: ["A method of data recovery", "An online scam to steal information", "A type of computer virus", "A web development technique"],
        correct: "An online scam to steal information"
    },
    {
        question: "Which of the following is a web server?",
        answers: ["Apache", "Photoshop", "Excel", "Word"],
        correct: "Apache"
    },
    {
        question: "What is a URL?",
        answers: ["Uniform Resource Locator", "Universal Resource Locator", "Uniform Resource Link", "Universal Resource Link"],
        correct: "Uniform Resource Locator"
    },
    {
        question: "Which of the following is not an operating system?",
        answers: ["Windows", "Linux", "Android", "Microsoft Word"],
        correct: "Microsoft Word"
    },
    {
        question: "What does it mean to 'boot' a computer?",
        answers: ["Turn it off", "Start it up", "Run a program", "Shut it down"],
        correct: "Start it up"
    },
    {
        question: "Which company developed the Windows operating system?",
        answers: ["Apple", "Microsoft", "IBM", "Oracle"],
        correct: "Microsoft"
    },
    {
        question: "What is an example of a storage device?",
        answers: ["CPU", "RAM", "Hard drive", "Monitor"],
        correct: "Hard drive"
    },
    {
        question: "What is a VPN?",
        answers: ["Virtual Private Network", "Virtual Public Network", "Visual Private Network", "Visual Public Network"],
        correct: "Virtual Private Network"
    },
    {
        question: "Which of the following is a type of database?",
        answers: ["MySQL", "HTML", "CSS", "Java"],
        correct: "MySQL"
    },
    {
        question: "What is a spreadsheet program?",
        answers: ["Word", "Excel", "PowerPoint", "Access"],
        correct: "Excel"
    },
    {
        question: "Which of the following is a markup language?",
        answers: ["Python", "JavaScript", "HTML", "Java"],
        correct: "HTML"
    },
    {
        question: "What does the term 'cache' refer to in computing?",
        answers: ["Temporary storage", "Permanent storage", "Data backup", "Network storage"],
        correct: "Temporary storage"
    },
    {
        question: "Which of the following is a computer programming paradigm?",
        answers: ["Procedural", "Functional", "Object-oriented", "All of the above"],
        correct: "All of the above"
    },
    {
        question: "What does SSD stand for?",
        answers: ["Solid State Drive", "Super Speed Drive", "Single State Drive", "Solid Storage Device"],
        correct: "Solid State Drive"
    },
    {
        question: "What is the primary function of a router?",
        answers: ["Store data", "Connect different networks", "Manage applications", "Protect data"],
        correct: "Connect different networks"
    }


];


let index = 0;
let score = 0;
let clearTimer;
let timerCountValue = 30;

// question shufling--------------->
function shuffleArray() {
    for (let i = questions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [questions[i], questions[j]] = [questions[j], questions[i]];
    }
    return questions
}
shuffleArray()[index];

//  Displaying Question-------------------------------->

let questionArea = document.querySelector('.question');
let p = document.createElement('p');

p.innerText = questions[index].question;
questionArea.append(p)

// Displaying options------------------------------->

let optionsArea = document.querySelector('.options');

let ul = document.createElement('ul');

questions[index].answers.forEach((ans, i) => {
    let li = document.createElement('li');
    ul.append(li);
    li.append(ans)
})
optionsArea.append(ul)


// Next Question And options Code-------------------------------------->

const nextQuestion = document.querySelector('.next-logo h3');
const questionCounter = document.querySelector('.qcounter div h2');
const resultPage = document.querySelector('.resul-container');
const showResulr = document.querySelector('.inner-layer h2');
const resulrNumber = document.querySelector('.result-number h2');
const comment = document.querySelector('.comment h3');
const outerLayer = document.querySelector('.outer-layer');
const rightAudio = document.querySelector('.right-audio')
const wrongAudio = document.querySelector('.wrong-audio')
const homeScore = document.querySelector('.home-score h3')
const timer = document.querySelector('.timer div h2')


questionCounter.innerHTML = `${index + 1}/${questions.length - 31}`
showResulr.innerHTML = `${score}/${questions.length - 31}`
resulrNumber.innerHTML = `Your Score Is- ${score}/${questions.length - 31}`

// Next question listner------------------------------------>
nextQuestion.addEventListener('click', () => {
    clearInterval(clearTimer)
    timerCountValue = 30;

    optionsArea.style.pointerEvents = "visiblePainted";

    resulrNumber.innerHTML = `Your Score Is- ${score}/${questions.length - 31}`

    if (index <= questions.length - 32) {
        index++
    }
    if (index === questions.length - 31) {
        questionContainer.classList.add('home')
        resultPage.classList.remove('home')
    }

    //Next question Code------------------------------->
    questionArea.innerHTML = '';

    let p = document.createElement('p');
    p.innerText = questions[index].question;
    questionArea.append(p)

    //Next Options Code------------------------------------>

    ul.innerHTML = '';
    questions[index].answers.forEach((ans, i) => {
        let li = document.createElement('li');
        ul.append(li);
        li.append(ans)
    })
    optionsArea.append(ul)

    // question counter code-------------------->

    questionCounter.innerHTML = `${index + 1}/${questions.length - 31}`

    timerCount()
})

// Time COunter--------------------------------------------->

function timerCount() {
    clearTimer = setInterval(() => {
        timerCountValue--
        timer.innerText = `${timerCountValue} Sec`

        if (timerCountValue === 0) {
            clearInterval(clearTimer)
            timerCountValue = 30;

            optionsArea.style.pointerEvents = "visiblePainted";

            resulrNumber.innerHTML = `Your Score Is- ${score}/${questions.length - 31}`

            if (index <= questions.length - 32) {
                index++
            }
            if (index === questions.length - 31) {
                questionContainer.classList.add('home')
                resultPage.classList.remove('home')
            }

            //Next question Code------------------------------------------>
            questionArea.innerHTML = '';

            let p = document.createElement('p');
            p.innerText = questions[index].question;
            questionArea.append(p)

            //Next Options Code---------------------------------------------->
            ul.innerHTML = '';
            questions[index].answers.forEach((ans, i) => {
                let li = document.createElement('li');
                ul.append(li);
                li.append(ans)
            })
            optionsArea.append(ul)

            // question counter code-------------------------------------->
            questionCounter.innerHTML = `${index + 1}/${questions.length - 31}`

            timerCount()
        }

        // background changing----------------------------------------------->
        if (timerCountValue <= 10) {
            questionContainer.style.background = 'tomato';
        } else {
            questionContainer.style.background = '#CCE2C2';
        }

    }, 1000);
}




// answe cheking listner--------------------------->
optionsArea.addEventListener('click', (e) => {

    let correct = questions[index].correct;

    if (e.target.tagName === 'LI') {


        if (e.target.innerText === correct) {
            score++
            rightAudio.play()
            e.target.classList.add('right')
            optionsArea.style.pointerEvents = "none";
        } else {
            wrongAudio.play()
            e.target.classList.add('wrong')
            optionsArea.style.pointerEvents = "none";
        }

        if (e.target.className === 'wrong') {
            let span = document.createElement('span')
            span.innerHTML = `<i class="fa-regular fa-circle-xmark"</i>`
            e.target.append(span)
        }

        Array.from(ul.children).forEach((ans, i) => {
            if (ans.innerText === correct) {
                ans.classList.add('right')
                let span = document.createElement('span')
                span.innerHTML = `<i class="fa-regular fa-circle-check"></i>`
                ans.append(span)
            }
        })
    }

    // outerLayer updater progress bar updater--------------------------------------------->
    score === 1 ? outerLayer.classList.add('r1') : '';
    score === 2 ? outerLayer.classList.add('r2') : '';
    score === 3 ? outerLayer.classList.add('r3') : '';
    score === 4 ? outerLayer.classList.add('r4') : '';
    score === 5 ? outerLayer.classList.add('r5') : '';
    score === 6 ? outerLayer.classList.add('r6') : '';
    score === 7 ? outerLayer.classList.add('r7') : '';
    score === 8 ? outerLayer.classList.add('r8') : '';
    score === 9 ? outerLayer.classList.add('r9') : '';
    score === 10 ? outerLayer.classList.add('r10') : '';

    // comment low marks------------------------------------------------------->
    score < 4 ? comment.innerText = `very Bad...` : '';
    score > 3 ? comment.innerText = `very low score` : '';
    score > 7 ? comment.innerText = `good but need more practice` : '';
    score >= 10 ? comment.innerText = `Exelent...!` : '';

    showResulr.innerHTML = `${score}/${questions.length - 31}`

    // showScore on home page---------------------------------------------->
    homeScore.innerText = `Your Score Is- ${score}`
    saveData()

})



// sound mute and unmute------------------------------------>

const speakerLogo = document.querySelector('.question-logo i');

speakerLogo.addEventListener('click', () => {
    speakerLogo.classList.toggle('fa-volume-xmark')

    if (speakerLogo.className === 'fa-solid fa-volume-high fa-volume-xmark') {
        rightAudio.muted = true
        wrongAudio.muted = true
    } else {
        rightAudio.muted = false
        wrongAudio.muted = false

    }
})


// Restart app------------------------------------------------>
const restartBtn = document.querySelector('#restart');

restartBtn.addEventListener('click', () => {
    clearInterval(clearTimer)
    timerCountValue = 30;
    score = 0;
    index = 0;
    // question counter code-------------------->
    questionCounter.innerHTML = `${index + 1}/${questions.length - 31}`
    container.classList.remove('home');
    questionContainer.classList.add('home')
    resultPage.classList.add('home')
})


//  local storage save data--------------------------------->

function saveData() {
    localStorage.setItem('data', homeScore.innerText)
}
function showData() {
    homeScore.innerText = localStorage.getItem('data');
    if (homeScore.innerText === 'undefined') {
        homeScore.innerText = `lets Start`
    }
}
showData()
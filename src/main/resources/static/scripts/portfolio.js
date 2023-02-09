const aside = document.querySelector('#aside');
const content = aside.querySelectorAll('.content');

const contentContainer = document.querySelector('.content-container');

for (let i = 0; i < content.length; i++) {
    content[i].addEventListener('click', () => {
        for (let j = 0; j < content.length; j++) {
            content[j].style.backgroundColor = 'rgb(61, 63, 65)'
        }
        content[i].style.backgroundColor = 'rgb(61, 110, 195)';
        contentContainer.addEventListener('click', () => {
            for (let j = 0; j < content.length; j++) {
                content[j].style.backgroundColor = 'rgb(61, 63, 65)'
            }
            content[i].style.backgroundColor = 'rgb(21, 40, 60)';
        })
    })
}


const tabs = document.querySelectorAll('.tab');
const headerTabs = document.querySelectorAll('[rel="headerTab"]');
const section = document.querySelectorAll('.section');
const moveTab = document.querySelectorAll('.move-tab');

for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', () => {
        for (let j = 0; j < tabs.length; j++) {
            tabs[j].classList.remove('on');
        }
        tabs[i].classList.add('on');

        for (let j = 0; j < headerTabs.length; j++) {
            headerTabs[j].classList.remove('on');
        }
        headerTabs[i].classList.add('on');

        for (let j = 0; j < section.length; j++) {
            section[j].classList.remove('on');
        }
        section[i].classList.add('on');
    });
}

for (let i = 0; i < moveTab.length; i++) {
    moveTab[i].addEventListener('click', () => {
        for (let j = 0; j < content.length; j++) {
            content[j].style.backgroundColor = 'rgb(61, 63, 65)'
        }
        content[i].style.backgroundColor = 'rgb(21, 40, 60)';

        for (let j = 0; j < tabs.length; j++) {
            tabs[j].classList.remove('on');
        }
        tabs[i + 1].classList.add('on');

        for (let j = 0; j < headerTabs.length; j++) {
            headerTabs[j].classList.remove('on');
        }
        headerTabs[i + 1].classList.add('on');

        for (let j = 0; j < section.length; j++) {
            section[j].classList.remove('on');
        }
        section[i + 1].classList.add('on');
    });
}

const contentFifth = document.querySelectorAll('.content.fifth');

for (let i = 0; i < contentFifth.length; i++) {
    contentFifth[i].addEventListener('dblclick', () => {
        for (let j = 0; j < tabs.length; j++) {
            tabs[j].classList.remove('on');
        }
        tabs[i].classList.add('on');

        for (let j = 0; j < headerTabs.length; j++) {
            headerTabs[j].classList.remove('on');
        }
        headerTabs[i].classList.add('on');

        for (let j = 0; j < section.length; j++) {
            section[j].classList.remove('on');
        }
        section[i].classList.add('on');
    });
}

contentFifth[2].addEventListener('dblclick', () => {
    runBtn.classList.remove('on');
    stopBtn.classList.remove('on');
    skillsRunBtn.classList.add('on');
    skillsStopBtn.classList.remove('on');
    skillsResultArea.classList.remove('on');
})

const skillsRunBtn = document.querySelector('.run-btn.skills');
const skillsStopBtn = document.querySelector('.stop-btn.skills');

tabs[0].addEventListener('click', () => {
    skillsRunBtn.classList.remove('on');
    skillsStopBtn.classList.remove('on');
    runBtn.classList.add('on');
    stopBtn.classList.remove('on');
})

tabs[2].addEventListener('click', () => {
    runBtn.classList.remove('on');
    stopBtn.classList.remove('on');
    skillsRunBtn.classList.add('on');
    skillsStopBtn.classList.remove('on');
    skillsResultArea.classList.remove('on');
});

const skillTypes = document.querySelectorAll('.skill-type');
const techs = document.querySelectorAll('.tech');

function skillType() {
    for (let skillType1 of skillTypes) {
        skillType1.classList.add('on');
    }
}

function techOn() {
    for (let tech of techs) {
        tech.classList.add('on');
    }
}

skillsRunBtn.addEventListener('click', () => {
    skillsStopBtn.classList.add('on');
    skillsRunBtn.classList.remove('on');
    skillsResultArea.classList.add('on');
    footerRun.classList.add('on');
    setTimeout(skillType, 1000);
    setTimeout(techOn, 2000);
})


function ko() {
    return resultTextKo.classList.add('on');
}

const runBtn = document.querySelector('.run-btn.home');
const stopBtn = document.querySelector('.stop-btn.home');
const resultArea = document.querySelector('.result-area');
const resultTextKo = document.querySelector('.ko');
const footerRun = document.querySelector('.footer-run');

runBtn.addEventListener('click', () => {
    setTimeout(typing, 500);
    resultArea.classList.add('on');
    runBtn.style.animation = 'none';
    setTimeout(ko, 16500);
    document.querySelector('.text').style.animation = 'none';
    runBtn.classList.remove('on');
    stopBtn.classList.add('on');
    footerRun.classList.add('on');
})

const closeBtn = resultArea.querySelector('.title');

closeBtn.addEventListener('click', () => {
    resultText.innerHTML = '';
    resultTextKo.classList.remove('on');
    resultArea.classList.remove('on');
    runBtn.style.animation = 'blink-effect 1s step-end infinite';
    document.querySelector('.text').style.animation = 'blink-effect 1s step-end infinite';
    runBtn.classList.add('on');
    stopBtn.classList.remove('on');
    footerRun.classList.remove('on');
});

const resultText = document.querySelector('.result-text');
const letters = ["Hi 👋", " I'm Myung, the Web BackEnd Developer.", "<br>", "<br>", "I'm a Potential & Passionate Developer.", "<br>", "<br>", "Plz enjoy my works and if you fancy it, contact me anytime :)"]
const speed = 75;
const typing = async () => {
    for (let i = 0; i < letters.length; i++) {
        if (letters[i] === '<br>') {
            resultText.innerHTML += '<br>';
        } else {
            const letter = letters[i].split("");
            while (letter.length) {
                await wait(speed);
                resultText.innerHTML += letter.shift();
            }
        }
        await wait(500);
    }
}

function wait(ms) {
    return new Promise(res => setTimeout(res, ms))
}

const skillFront = document.querySelector('.skill-front-text');
const skillBack = document.querySelector('.skill-back-text');
const frontEnd = document.querySelector('.front-end');
const backEnd = document.querySelector('.back-end');

skillFront.addEventListener('click', () => {
    skillBack.classList.remove('on');
    skillFront.classList.add('on');
    backEnd.classList.remove('on');
    frontEnd.classList.add('on');
});

skillBack.addEventListener('click', () => {
    skillBack.classList.add('on');
    skillFront.classList.remove('on');
    backEnd.classList.add('on');
    frontEnd.classList.remove('on');
});

const skillsSection = document.querySelector('.section.skills')
const skillsCloseBtn = document.querySelector('.close-btn');
const skillsResultArea = skillsSection.querySelector('.result-area');

skillsCloseBtn.addEventListener('click', () => {
    skillsResultArea.classList.remove('on');
    skillsRunBtn.classList.add('on');
    skillsStopBtn.classList.remove('on');
    footerRun.classList.remove('on');
});


const btn = document.getElementById('button');

document.getElementById('form')
    .addEventListener('submit', function (event) {
        event.preventDefault();

        btn.value = 'Sending...';

        const serviceID = 'default_service';
        const templateID = 'template_pi72gib';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.value = 'Send Email';
                alert('이메일 전송이 완료되었습니다!');
            }, (err) => {
                btn.value = 'Send Email';
                alert(JSON.stringify(err));
            });
    });

const contentFirst = aside.querySelector('.first');
const contentSecond = aside.querySelector('.second');
const contentThird = aside.querySelector('.third');
const contentForth = aside.querySelector('.forth');

contentFirst.querySelector('.arrow').addEventListener('click', () => {
    contentSecond.classList.toggle('on');
    for (let elementNodeListOfElement of contentFirst.querySelectorAll('ion-icon')) {
        elementNodeListOfElement.classList.toggle('off');
    }
    contentSecond.querySelectorAll('ion-icon')[0].classList.remove('off');
    contentSecond.querySelectorAll('ion-icon')[1].classList.add('off');
    contentThird.classList.remove('on');
    contentForth.classList.remove('on');
    for (let contentFifthElement of contentFifth) {
        contentFifthElement.classList.remove('on');
    }
});

contentSecond.querySelector('.arrow').addEventListener('click', () => {
    contentThird.classList.toggle('on');
    contentForth.classList.remove('on');
    for (let elementNodeListOfElement of contentSecond.querySelectorAll('ion-icon')) {
        elementNodeListOfElement.classList.toggle('off');
    }
    contentThird.querySelectorAll('ion-icon')[0].classList.remove('off');
    contentThird.querySelectorAll('ion-icon')[1].classList.add('off');
    for (let contentFifthElement of contentFifth) {
        contentFifthElement.classList.remove('on');
    }
});

contentThird.querySelector('.arrow').addEventListener('click', () => {
    contentForth.classList.toggle('on');
    for (let elementNodeListOfElement of contentThird.querySelectorAll('ion-icon')) {
        elementNodeListOfElement.classList.toggle('off');
    }
    for (let contentFifthElement of contentFifth) {
        contentFifthElement.classList.remove('on');
    }
    contentForth.querySelectorAll('ion-icon')[0].classList.remove('off');
    contentForth.querySelectorAll('ion-icon')[1].classList.add('off');
});

contentForth.querySelector('.arrow').addEventListener('click', () => {
    for (let elementNodeListOfElement of contentForth.querySelectorAll('ion-icon')) {
        elementNodeListOfElement.classList.toggle('off');
    }
    for (let contentFifthElement of contentFifth) {
        contentFifthElement.classList.toggle('on');
    }
});



























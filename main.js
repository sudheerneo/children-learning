$(document).ready(() => {
    window.localStorage.setItem("activeState", "incative"); //reset state
    $(document).keyup((e) => {
        new Command().changeColors(); //change colors when press any key
        const pressedKey = e.key.toLowerCase();
        pressedKey ? new Command(pressedKey) : console.log("key not assigned ");
    });
    checkCompatibility();
});

const checkCompatibility = () => {
    new Command().changeColors();
    window.innerHeight < window.innerWidth
        ? false
        : ($("#display").html(
              `<div class="d-flex justify-content-center align-items-center vh-100 flex-column text-center container">
                <h1>Device not supported</h1>
                <p>Use landscape mode in bigscreens and only try with keyboard events. Touch events not supported.</p>
            </div>`
          ),
          $(".navbar").hide());
};

class Command {
    constructor(req) {
        const activeState = window.localStorage.getItem("activeState");

        req === "n" && this.numbers();
        req === "a" && this.abcs();
        req === "h" && this.navbarToggle();
        req === "r" &&
            (window.localStorage.setItem("activeState", "incative"),
            location.reload());
        req === " " &&
            (activeState === "numBlock"
                ? this.guesNumbrsGame()
                : activeState === "abcBlock"
                ? this.changeAbcs()
                : console.log("plese choose any game to play"));
    }

    navbarToggle = () => {
        $(".navbar").toggle();
    };

    randomNmmbr = (max, min) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };

    randomColor = () => {
        return `rgb(
                        ${this.randomNmmbr(256, 1)},
                        ${this.randomNmmbr(256, 1)},
                        ${this.randomNmmbr(256, 1)}
                    )`; // ex: rgb(222, 154, 57);
    };
    guesNumbrsGame = () => {
        $("#display").html(`
            <div class="contaniner numberGame">
                ${this.randomNmmbr(100, 1)}
            </div>
        `);
    };
    gueslettersGame = () => {
        $("#display").html(`
            <div class="contaniner numberGame">
                ${this.randomNmmbr(100, 1)}
            </div>
        `);
    };
    numbers = () => {
        window.localStorage.setItem("activeState", "numBlock");
        $("#display").html(`
           <div class="d-flex flex-wrap align-items-center justify-content-center">
                <div class="d-flex flex-wrap justify-content-center" id="num">
                    ${(() => {
                        let html = "";
                        for (let i = 1; i <= 105; i++) {
                            html += `<div class="numbrsList m-1 p-3 text-center" style="background: ${this.randomColor()}; color: ${this.randomColor()}">${i} </div>`;
                        }
                        return html;
                    })()}
                </div>
            </div>

        `);
    };
    abcs = () => {
        window.localStorage.setItem("activeState", "abcBlock");
        $("#display").html(`
           <div class="  d-flex flex-wrap justify-content-center">
                <div class="d-flex flex-wrap" id="num">
                    ${(() => {
                        let html = "";
                        for (let i = 65; i <= 90; i++) {
                            html += `<div class="numbrsList m-1 p-3 text-center" style="background: ${this.randomColor()}; color: ${this.randomColor()}">${String.fromCharCode(
                                i
                            )} </div>`;
                        }
                        return html;
                    })()}
                </div>
                <div class="d-flex flex-wrap mt-5" id="num">
                    ${(() => {
                        let html = "";
                        for (let i = 65; i <= 90; i++) {
                            html += `<div class="numbrsList m-1 p-3 text-center" style="background: ${this.randomColor()}; color: ${this.randomColor()}">${String.fromCharCode(
                                i
                            ).toLowerCase()} </div>`;
                        }
                        return html;
                    })()}
                </div>
            </div>
        `);
    };
    changeAbcs = () => {
        const words = contextData.words;
        $("#display").html(`
            <div class="contaniner numberGame">
                ${words[this.randomNmmbr(25, 0)]}
            </div>
        `);
    };

    changeColors = () => {
        document.body.style.backgroundColor = this.randomColor();
        document.body.style.color = this.randomColor();
        $(".navbtns").css({
            background: this.randomColor(),
            color: this.randomColor(),
        });
        $(".abcsDiv").css({
            background: this.randomColor(),
            color: this.randomColor(),
        });
        $(".numberDiv").css({
            background: this.randomColor(),
            color: this.randomColor(),
        });
        $(".navbar").css({
            background: this.randomColor(),
            color: this.randomColor(),
        });
    };
}

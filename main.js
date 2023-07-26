$(document).ready(() => {
    window.localStorage.setItem("activeState", "incative"); //reset state
    $(document).keyup((e) => {
        goFullscreen();
        const pressedKey = e.key.toLowerCase();
        pressedKey ? new Command(pressedKey) : console.log("key not assigned ");
    });
    checkCompatibility();
});

const goFullscreen = () => {
    const body = document.documentElement;
    body.requestFullScreen
        ? body.requestFullscreen()
        : body.webkitRequestFullscreen
        ? body.webkitRequestFullscreen()
        : body.msRequestFullscreen
        ? body.msRequestFullscreen()
        : body.mozRequestFullscreen
        ? body.mozRequestFullscreen()
        : 0;
};

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
        this.changeColors(); //change colors whhen key pressed
        const activeState = window.localStorage.getItem("activeState");

        req === "n" && this.numbers();
        req === "a" && this.abcs();
        req === "t" && this.aaa();
        req === "h" && this.haaa();
        req === "f" && this.footerToggle();
        req === "r" &&
            (window.localStorage.setItem("activeState", "incative"),
            location.reload());
        req === " " &&
            (activeState === "numBlock"
                ? this.guesNumbrsGame()
                : activeState === "abcBlock"
                ? this.changeAbcs()
                : activeState === "aaaBlock"
                ? this.changeAaa()
                : activeState === "haaaBlock"
                ? this.changeHaaa()
                : 0);
    }

    footerToggle = () => {
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
                ${this.randomNmmbr(200, 100)}
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

    /////////////////////////////////////////////////////////////////////////////////////////////////////

    aaa = () => {
        window.localStorage.setItem("activeState", "aaaBlock");
        const telLetters = contextData.telLetters;
        // const brTagsNeeded = ["అః", "ఙ", "ఞ", "ణ", "న", "మ"];

        // write in line
        const drawline = (telLetters, condition, randomColor) => {
            console.log("line draw");
            return `
                    <div class="d-flex flex-wrap mt-1" id="num">
                        ${telLetters
                            .map((letter, index) => {
                                let item = condition(index)
                                    ? `<div class="numbrsList m-1 p-3 text-center" style="background: ${randomColor()}; color: ${randomColor()}">${letter}</div>`
                                    : "";

                                return item;
                            })
                            .join("")}
                    </div>
            `;
        };
        $("#display").html(`
            <div class="  d-flex flex-wrap justify-content-center">
            ${drawline(telLetters, (index) => index <= 15, this.randomColor)} 
             ${drawline(
                 telLetters,
                 (index) => index >= 16 && index <= 20,
                 this.randomColor
             )} 
              ${drawline(
                  telLetters,
                  (index) => index >= 21 && index <= 25,
                  this.randomColor
              )}
              ${drawline(
                  telLetters,
                  (index) => index >= 26 && index <= 30,
                  this.randomColor
              )} 
              ${drawline(
                  telLetters,
                  (index) => index >= 31 && index <= 35,
                  this.randomColor
              )}
              ${drawline(telLetters, (index) => index >= 36, this.randomColor)}

             </div>
       
        `);
    };
    changeAaa = () => {
        const words = contextData.telLetters;
        $("#display").html(`
            <div class="contaniner numberGame">
                ${words[this.randomNmmbr(51, 0)]}
            </div>
        `);
    };
    haaa = () => {
        window.localStorage.setItem("activeState", "haaaBlock");
        const telLetters = contextData.hinLetters;
        // const brTagsNeeded = ["అః", "ఙ", "ఞ", "ణ", "న", "మ"];

        // write in line
        const drawline = (telLetters, condition, randomColor) => {
            console.log("line draw");
            return `
                    <div class="d-flex flex-wrap mt-1" id="num">
                        ${telLetters
                            .map((letter, index) => {
                                let item = condition(index)
                                    ? `<div class="numbrsList m-1 p-3 text-center" style="background: ${randomColor()}; color: ${randomColor()}">${letter}</div>`
                                    : "";

                                return item;
                            })
                            .join("")}
                    </div>
            `;
        };
        $("#display").html(`
            <div class="  d-flex flex-wrap justify-content-center">
            ${drawline(telLetters, (index) => index <= 11, this.randomColor)} 
             ${drawline(
                 telLetters,
                 (index) => index >= 12 && index <= 16,
                 this.randomColor
             )} 
              ${drawline(
                  telLetters,
                  (index) => index >= 17 && index <= 21,
                  this.randomColor
              )}
              ${drawline(
                  telLetters,
                  (index) => index >= 22 && index <= 26,
                  this.randomColor
              )} 
              ${drawline(
                  telLetters,
                  (index) => index >= 27 && index <= 31,
                  this.randomColor
              )}
              ${drawline(
                  telLetters,
                  (index) => index >= 32 && index <= 36,
                  this.randomColor
              )}
              ${drawline(telLetters, (index) => index >= 37, this.randomColor)}

             </div>
       
        `);
    };
    changeHaaa = () => {
        const words = contextData.hinLetters;
        $("#display").html(`
            <div class="contaniner numberGame">
                ${words[this.randomNmmbr(51, 0)]}
            </div>
        `);
    };

    /////////////////////////////////////////////////////////////////////////////////////////////////////////
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
        $(".aaaDiv").css({
            background: this.randomColor(),
            color: this.randomColor(),
        });
        $(".haaaDiv").css({
            background: this.randomColor(),
            color: this.randomColor(),
        });
        $(".navbar").css({
            background: this.randomColor(),
            color: this.randomColor(),
        });
    };
}

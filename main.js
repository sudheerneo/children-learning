const display = document.getElementById("display");
document.body.onkeyup = (e) => {
    // a = 65  enter = 13 spacebar = 32 n = 78
    e.keyCode === 78 && new Start("nmbrs");
    e.keyCode === 65 && new Start("abcs");
    (e.keyCode === 32 || e.keyCode === 13) && new Start();
};
class Start {
    constructor(command) {
        command === "nmbrs" && (this.changeNmbrs(), this.changeColors());
        command === "abcs" && (this.changeAbcs(), this.changeColors());
    }

    randomNmmbr = (max, min) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };

    randomColor = () => {
        return `rgb(
                        ${this.randomNmmbr(256, 1)},
                        ${this.randomNmmbr(256, 1)},
                        ${this.randomNmmbr(256, 1)}
                    )`; // ex rgb(222, 154, 57);
    };
    changeNmbrs = () => {
        display.innerText = this.randomNmmbr(100, 1);
    };
    changeAbcs = () => {
        const bigCase = [
            "APPLE",
            "BALL",
            "CAT",
            "DOG",
            "ELEPHANT",
            "FISH",
            "GOAT",
            "HOUSE",
            "INDIA",
            "JAGUAR",
            "KITE",
            "LION",
            "MANGO",
            "NEST",
            "OWL",
            "PARROT",
            "QUEEN",
            "RABBIT",
            "SUN",
            "TRAIN",
            "UMBRELLA",
            "VAN",
            "WATCH",
            "XYLOPHONE",
            "YAK",
            "ZEBRA",
        ];
        display.innerText = bigCase[this.randomNmmbr(25, 0)].toLowerCase();
    };

    changeColors = () => {
        document.body.style.backgroundColor = this.randomColor();
        document.body.style.color = this.randomColor();
    };
}

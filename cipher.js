document.onreadystatechange = function () {
    function runFunction(input) {
        const alphabet = [
            "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
            "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
        ];
        let inputToArray = input.split("");

        function encryptArray(inputToArray) {
            let shiftedInputArray = [];

            function shiftLetters(item) {
                let currentLetterIndex = alphabet.indexOf(item);
                let shiftedLetterIndex = ((currentLetterIndex + 23) % 26);
                let shiftedLetter = alphabet[shiftedLetterIndex];
                shiftedInputArray.push(shiftedLetter);
            }
            inputToArray.forEach(shiftLetters);
            let shiftedInput = shiftedInputArray.join("");
            document.getElementById("output").innerHTML = shiftedInput;
        }

        function validateArray(inputToArray) {
            validItems = 0;
            function validateCharacter(item) {
                if (alphabet.includes(item) === true) {
                    validItems += 1;
                }
            }
            inputToArray.forEach(validateCharacter);
            if (validItems === inputToArray.length) {
                encryptArray(inputToArray);
                "invalid input";
            } else {
                document.getElementById("output").innerHTML = "Error: " +
                "invalid input.";
            }
        }
        validateArray(inputToArray);

    }
    if (document.readyState === 'complete') {
        document.addEventListener("keyup", function (event) {
            if (event.key === "Enter") {
                let input = document.getElementById("input").value;
                runFunction(input);
            }
        });
    }
};
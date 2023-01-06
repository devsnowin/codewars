function smash(words) {
    let sentence = ""

    words.forEach((word, i) => {
        if (i === words.length - 1) sentence += word
        else sentence += `${word} `
    });

    return sentence
};

//  Alternative
const smash = function (words) {
    return words.join(" ");
};

console.log(smash(['hello', 'world', 'this', 'is', 'great']));
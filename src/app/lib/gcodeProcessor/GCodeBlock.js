
class GCodeBlock {
    words = null;

    pairs = null;

    flatPairs = null;

    line = ''

    constructor(words, line) {
        this.line = line;
        this.words = words;
        this.toPairs();
    }

    toPairs() {
        const result = {};
        const flatResult = {};
        for (let word of this.words) {
            let letter = word[0];
            let value = word[1];
            flatResult[letter] = value;
            if (letter === 'G' || letter === 'L') {
                result[`${letter}${value}`] = true;
            } else {
                result[letter] = value;
            }
        }
        this.pairs = result;
        this.flatPairs = flatResult;
    }

    asString() {
        return this.line;
    }

    has(word) {
        const result = word in this.pairs;
        return (result);
    }

    hasLetter(letter) {
        return (letter in this.flatPairs);
    }

    get(word) {
        if (word in this.pairs) {
            return this.pairs[word];
        }
        return null;
    }

    getLetter(letter) {
        if (letter in this.flatPairs) {
            return this.flatPairs[letter];
        }
        return null;
    }

    getAxes() {
        const axes = [];
        if (this.has('X')) {
            axes.push('X');
        }
        if (this.has('Y')) {
            axes.push('Y');
        }
        if (this.has('Z')) {
            axes.push('Z');
        }
        return axes;
    }

    isSimpleMotion() {
        return this.has('G0') || this.has('G1');
    }
}

export default GCodeBlock;

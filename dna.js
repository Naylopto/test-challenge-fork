function testDNA(sequence) {
    let basePair = ["A", "T", "C", "G"];
    let newseq = "";
    for (let i = 0; i < sequence.length; i++) {
        if (basePair.includes(sequence[i])) {
            newseq += sequence[i];
        }
    }
    return newseq;
}
module.exports = testDNA;

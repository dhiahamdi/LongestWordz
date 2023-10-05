function findLongestWord(sentence) {

    const cleanSentence = sentence.replace(/[^a-z\s]/g, '');
    const words = cleanSentence.split(/\s+/);

    let longestWord = "";
    let maxVowels = 0;

    words.forEach(word => {
        const vowelsCount = word.match(/[aeiou]/g)?.length || 0;

        if (word.length > longestWord.length || (word.length === longestWord.length && vowelsCount > maxVowels)) {
            longestWord = word;
            maxVowels = vowelsCount;
        }
    });

    return longestWord;
}

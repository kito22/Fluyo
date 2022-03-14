interface WordItem {
  original_word: string;
  translated_word: string;
}

interface QuestionItem {
  sentence_original: string;
  sentence_to_translate: string;
  word_to_learn_original: string;
  word_to_learn_translated: string;
  words: WordItem[];
  answers: string[];
}

const questionExample: QuestionItem = {
  sentence_original: 'The house is small.',
  sentence_to_translate: 'Das Hause ist klein.',
  word_to_learn_original: 'house',
  word_to_learn_translated: 'Hause',
  words: [
    {
      original_word: 'The',
      translated_word: 'Das',
    },
    {
      original_word: 'house',
      translated_word: 'Hause',
    },
    {
      original_word: 'is',
      translated_word: 'ist',
    },
    {
      original_word: 'small',
      translated_word: 'klein',
    },
  ],
  answers: ['folgen', 'Schaf', 'Bereiden', 'Hause'],
};

export { questionExample };

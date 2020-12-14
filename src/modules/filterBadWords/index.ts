import {badWordsEnv} from "./badWords";

const Filter = require('bad-words');

const filter = new Filter();

filter.addWords(...badWordsEnv);

export const filterBadWords = (text: string) => {
    return filter.clean(text);
}
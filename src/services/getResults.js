import { getBooks } from './getBooks';

export const getResults = async (title) => {
    let books = await getBooks();
    let results = books.filter(e => e.title.toUpperCase().includes(title.toUpperCase()));
    return await results;
}
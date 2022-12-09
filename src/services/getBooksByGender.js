import {getBooks} from '../services/getBooks';

export const getBooksByGender = async (gender)=>{
    const books = await getBooks(),
    results = await books.filter(e=> e.gender == gender);
    return results;
}
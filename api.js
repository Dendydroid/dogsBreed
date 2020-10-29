const API_URL = `https://dog.ceo/api/`;

const METHODS = {
    LIST_ALL: "breeds/list/all",
};

async function getAll()
{
    let response = await fetch(API_URL + METHODS.LIST_ALL);

    response = await response.json();

    console.log(response)
}



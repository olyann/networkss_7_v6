import fetch from 'node-fetch';

// API get characters url
const ANAPIOFICEANDFIRE_CHARACTERS_ID = "https://anapioficeandfire.com/api/characters/:id"

// Generating random number from 0 to max
const generateRandomNumber = (max = 100) => Math.floor(Math.random() * max)

const getCharacterInfo = async () => {
    // Use \n to show nex line from new line
    console.log("Welcome to the Get Character Info API!\n");
    console.log("Generating random id...");

    // Generate random id from range (1, 100)
    const randomId = generateRandomNumber(100);
    console.log(`Your id is ${randomId}\n`);

    // Insert id into url
    const charactersIdUrl = ANAPIOFICEANDFIRE_CHARACTERS_ID.replace( ":id", randomId.toString() );


    // Use try...catch to prevent error break app
    try {
        // Retrieving data
        const response = await fetch(charactersIdUrl);

        // Parsing data from json to object
        const responseJson = await response.json();

        // Using console.group to group data
        console.group("Character info:");

        // Printing data
        console.log(`Name: ${responseJson.name || "Unknown"}`);
        console.log(`Gender: ${responseJson.gender || "Unknown"}`);
        console.log(`Culture: ${responseJson.culture || "Unknown"}`);

        console.groupEnd()
    } catch (error) {
        // Catching error or showing default one, if there is no error message
        console.log(error?.message || "There is an error, we are working on this! Please, try again later.");
    }
}

// Call main function
void getCharacterInfo()

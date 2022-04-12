import { createStore } from "redux";


const initialState = {
    personajes: [ {
        "id":1,
        "name": "Harry Potter",
        "species": "human",
        "gender": "male",
        "house": "Gryffindor",
        "dateOfBirth": "31-07-1980",
        "yearOfBirth": 1980,
        "ancestry": "half-blood",
        "eyeColour": "green",
        "hairColour": "black",
        "wand": {
            "wood": "holly",
            "core": "phoenix feather",
            "length": 11
        },
        "patronus": "stag",
        "hogwartsStudent": true,
        "hogwartsStaff": false,
        "actor": "Daniel Radcliffe",
        "alive": true,
        "image": "http://hp-api.herokuapp.com/images/harry.jpg"
    },
    {
        "id":2,
        "name": "Hermione Granger",
        "species": "human",
        "gender": "female",
        "house": "Gryffindor",
        "dateOfBirth": "19-09-1979",
        "yearOfBirth": 1979,
        "ancestry": "muggleborn",
        "eyeColour": "brown",
        "hairColour": "brown",
        "wand": {
            "wood": "vine",
            "core": "dragon heartstring",
            "length": ""
        },
        "patronus": "otter",
        "hogwartsStudent": true,
        "hogwartsStaff": false,
        "actor": "Emma Watson",
        "alive": true,
        "image": "http://hp-api.herokuapp.com/images/hermione.jpeg"
    },
    {
        "id":3,
        "name": "Ron Weasley",
        "species": "human",
        "gender": "male",
        "house": "Gryffindor",
        "dateOfBirth": "01-03-1980",
        "yearOfBirth": 1980,
        "ancestry": "pure-blood",
        "eyeColour": "blue",
        "hairColour": "red",
        "wand": {
            "wood": "willow",
            "core": "unicorn tail-hair",
            "length": 14
        },
        "patronus": "Jack Russell terrier",
        "hogwartsStudent": true,
        "hogwartsStaff": false,
        "actor": "Rupert Grint",
        "alive": true,
        "image": "http://hp-api.herokuapp.com/images/ron.jpg"
    },
    {
        "id":4,
        "name": "Neville Longbottom",
        "species": "human",
        "gender": "male",
        "house": "Gryffindor",
        "dateOfBirth": "30-07-1980",
        "yearOfBirth": 1980,
        "ancestry": "pure-blood",
        "eyeColour": "",
        "hairColour": "blonde",
        "wand": {
            "wood": "cherry",
            "core": "unicorn tail-hair",
            "length": 13
        },
        "patronus": "",
        "hogwartsStudent": true,
        "hogwartsStaff": false,
        "actor": "Matthew Lewis",
        "alive": true,
        "image": "http://hp-api.herokuapp.com/images/neville.jpg"
    },
    {
        "id":5,
        "name": "Ginny Weasley",
        "species": "human",
        "gender": "female",
        "house": "Gryffindor",
        "dateOfBirth": "11-08-1981",
        "yearOfBirth": 1981,
        "ancestry": "pure-blood",
        "eyeColour": "brown",
        "hairColour": "red",
        "wand": {
            "wood": "yew",
            "core": "",
            "length": ""
        },
        "patronus": "horse",
        "hogwartsStudent": true,
        "hogwartsStaff": false,
        "actor": "Bonnie Wright",
        "alive": true,
        "image": "http://hp-api.herokuapp.com/images/ginny.jpg"
    },
    {
        "id":6,
        "name": "Sirius Black",
        "species": "human",
        "gender": "male",
        "house": "Gryffindor",
        "dateOfBirth": "03-11-1959",
        "yearOfBirth": 1959,
        "ancestry": "pure-blood",
        "eyeColour": "grey",
        "hairColour": "black",
        "wand": {
            "wood": "",
            "core": "",
            "length": ""
        },
        "patronus": "hare",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "Gary Oldman",
        "alive": false,
        "image": "http://hp-api.herokuapp.com/images/sirius.JPG"
    },
    { 
        "id":7,
        "name": "Arthur Weasley",
        "species": "human",
        "gender": "male",
        "house": "Gryffindor",
        "dateOfBirth": "06-02-1950",
        "yearOfBirth": 1950,
        "ancestry": "pure-blood",
        "eyeColour": "blue",
        "hairColour": "red",
        "wand": {
            "wood": "",
            "core": "",
            "length": ""
        },
        "patronus": "weasel",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "Mark Williams",
        "alive": true,
        "image": "http://hp-api.herokuapp.com/images/arthur.jpg"
    },
    {
        "id":8,
        "name": "Draco Malfoy",
        "species": "human",
        "gender": "male",
        "house": "Slytherin",
        "dateOfBirth": "05-06-1980",
        "yearOfBirth": 1980,
        "ancestry": "pure-blood",
        "eyeColour": "grey",
        "hairColour": "blonde",
        "wand": {
            "wood": "hawthorn",
            "core": "unicorn tail-hair",
            "length": 10
        },
        "patronus": "",
        "hogwartsStudent": true,
        "hogwartsStaff": false,
        "actor": "Tom Felton",
        "alive": true,
        "image": "http://hp-api.herokuapp.com/images/draco.jpg"
    },
    {
        "id":9,
        "name": "Cedric Diggory",
        "species": "human",
        "gender": "male",
        "house": "Hufflepuff",
        "dateOfBirth": "",
        "yearOfBirth": 1977,
        "ancestry": "",
        "eyeColour": "grey",
        "hairColour": "brown",
        "wand": {
            "wood": "ash",
            "core": "unicorn hair",
            "length": 12.25
        },
        "patronus": "",
        "hogwartsStudent": true,
        "hogwartsStaff": false,
        "actor": "Robert Pattinson",
        "alive": false,
        "image": "http://hp-api.herokuapp.com/images/cedric.png"
    },
    {
        "id":10,
        "name": "Cho Chang",
        "species": "human",
        "gender": "female",
        "house": "Ravenclaw",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "ancestry": "",
        "eyeColour": "brown",
        "hairColour": "black",
        "wand": {
            "wood": "",
            "core": "",
            "length": ""
        },
        "patronus": "swan",
        "hogwartsStudent": true,
        "hogwartsStaff": false,
        "actor": "Katie Leung",
        "alive": true,
        "image": "http://hp-api.herokuapp.com/images/cho.jpg"
    },
    {
        "id":11,
        "name": "Luna Lovegood",
        "species": "human",
        "gender": "female",
        "house": "Ravenclaw",
        "dateOfBirth": "13-02-1981",
        "yearOfBirth": 1981,
        "ancestry": "",
        "eyeColour": "grey",
        "hairColour": "blonde",
        "wand": {
            "wood": "",
            "core": "",
            "length": ""
        },
        "patronus": "hare",
        "hogwartsStudent": true,
        "hogwartsStaff": false,
        "actor": "Evanna Lynch",
        "alive": true,
        "image": "http://hp-api.herokuapp.com/images/luna.jpg"
    },
    {
        "id":12,
        "name": "Vincent Crabbe",
        "species": "human",
        "gender": "male",
        "house": "Slytherin",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "ancestry": "pure-blood",
        "eyeColour": "black",
        "hairColour": "black",
        "wand": {
            "wood": "",
            "core": "",
            "length": ""
        },
        "patronus": "",
        "hogwartsStudent": true,
        "hogwartsStaff": false,
        "actor": "Jamie Waylett",
        "alive": false,
        "image": "http://hp-api.herokuapp.com/images/crabbe.jpg"
    },
    {
        "id":13,
        "name": "Gregory Goyle",
        "species": "human",
        "gender": "male",
        "house": "Slytherin",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "ancestry": "pure-blood",
        "eyeColour": "",
        "hairColour": "brown",
        "wand": {
            "wood": "",
            "core": "",
            "length": ""
        },
        "patronus": "",
        "hogwartsStudent": true,
        "hogwartsStaff": false,
        "actor": "Josh Herdman",
        "alive": true,
        "image": "http://hp-api.herokuapp.com/images/goyle.jpg"
    }, 
    {
        "id":14,
        "name": "Argus Filch",
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "ancestry": "squib",
        "eyeColour": "",
        "hairColour": "grey",
        "wand": {
            "wood": "",
            "core": "",
            "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": true,
        "actor": "David Bradley",
        "alive": true,
        "image": "http://hp-api.herokuapp.com/images/filch.jpg"
    },
    {
        "id":15,
        "name": "Severus Snape",
        "species": "human",
        "gender": "male",
        "house": "Slytherin",
        "dateOfBirth": "09-01-1960",
        "yearOfBirth": 1960,
        "ancestry": "half-blood",
        "eyeColour": "black",
        "hairColour": "black",
        "wand": {
            "wood": "",
            "core": "",
            "length": ""
        },
        "patronus": "doe",
        "hogwartsStudent": false,
        "hogwartsStaff": true,
        "actor": "Alan Rickman",
        "alive": false,
        "image": "http://hp-api.herokuapp.com/images/snape.jpg"
    },
    {
        "id":16,
        "name": "Rubeus Hagrid",
        "species": "half-giant",
        "gender": "male",
        "house": "Gryffindor",
        "dateOfBirth": "06-12-1928",
        "yearOfBirth": 1928,
        "ancestry": "half-blood",
        "eyeColour": "black",
        "hairColour": "black",
        "wand": {
            "wood": "oak",
            "core": "",
            "length": 16
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": true,
        "actor": "Robbie Coltrane",
        "alive": true,
        "image": "http://hp-api.herokuapp.com/images/hagrid.png"
    },
    {
        "id":17,
        "name": "Remus Lupin",
        "species": "werewolf",
        "gender": "male",
        "house": "Gryffindor",
        "dateOfBirth": "10-03-1960",
        "yearOfBirth": 1960,
        "ancestry": "half-blood",
        "eyeColour": "green",
        "hairColour": "brown",
        "wand": {
            "wood": "cypress",
            "core": "unicorn tail-hair",
            "length": 10.25
        },
        "patronus": "wolf",
        "hogwartsStudent": false,
        "hogwartsStaff": true,
        "actor": "David Thewlis",
        "alive": false,
        "image": "http://hp-api.herokuapp.com/images/lupin.jpg"
    },
    {
        "id":18,
        "name": "Horace Slughorn",
        "species": "human",
        "gender": "male",
        "house": "Slytherin",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "ancestry": "pure-blood",
        "eyeColour": "green",
        "hairColour": "blonde",
        "wand": {
            "wood": "cedar",
            "core": "dragon heartstring",
            "length": 10.25
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": true,
        "actor": "Jim Broadbent",
        "alive": true,
        "image": "http://hp-api.herokuapp.com/images/slughorn.JPG"
    },
    {
        "id":19,
        "name": "Dolores Umbridge",
        "species": "human",
        "gender": "female",
        "house": "Slytherin",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "ancestry": "half-blood",
        "eyeColour": "brown",
        "hairColour": "grey",
        "wand": {
            "wood": "birch",
            "core": "dragon heartstring",
            "length": 8
        },
        "patronus": "persian cat",
        "hogwartsStudent": false,
        "hogwartsStaff": true,
        "actor": "Imelda Staunton",
        "alive": true,
        "image": "http://hp-api.herokuapp.com/images/umbridge.jpg"
    },
    {
        "id":20,
        "name": 
	    "Minerva McGonagall",
        "species": "human",
        "gender": "female",
        "house": "Gryffindor",
        "dateOfBirth": "04-10-1925",
        "yearOfBirth": 1925,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "black",
        "wand": {
            "wood": "",
            "core": "",
            "length": ""
        },
        "patronus": "tabby cat",
        "hogwartsStudent": false,
        "hogwartsStaff": true,
        "actor": "Dame Maggie Smith",
        "alive": true,
        "image": "http://hp-api.herokuapp.com/images/mcgonagall.jpg"
    }
    ],
    estudiantes: [],
    staff: []
   
}

// funcion reductora
const reducerPersonajes = (state = initialState, action) => {
    console.log(action);

    if(action.type === "AGREGAR_ESTUDIANTE"){
        return {
            ...state,
            estudiantes: state.estudiantes.concat(action.personaje),
            personajes: state.personajes.filter(p => p.id !== action.personaje.id)
        }
    }
    
    if ( action.type === "AGREGAR_STAFF" ) {
        return {
            ...state,
            staff: state.staff.concat(action.personaje),
            personajes: state.personajes.filter(p => p.id !== action.personaje.id)
        }
    }

    if ( action.type === "QUITAR_ESTUDIANTE") {
        return {
            ...state,
            estudiantes: state.estudiantes.filter(p =>p.id !== action.personaje.id),
            personajes: state.personajes.concat(action.personaje)
        }
        }
      
        if ( action.type === "QUITAR_STAFF") {
            return {
                ...state,
                staff: state.staff.filter(p => p.id !== action.personaje.id),
                personajes: state.personajes.concat(action.personaje)
            }
        }
    

    return state
}

 

export default createStore(reducerPersonajes)
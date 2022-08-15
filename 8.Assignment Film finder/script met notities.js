const addMoviesToDom = (moviesLst)=>{
    const movieOverview = document.getElementById('movie-overview')
    //verwijderen child elements from parent UL, dus alle li's eruit.
    movieOverview.innerHTML = '';
    const movieMap = moviesLst.map((item)=>{
        //Nieuw List element aanmaken
        const newLi = document.createElement('li'); 
        // Onderstaand is om titel te tonen.
        // newLi.innerHTML = item.Title;
        
        // IMG element aanmaken + Het toevoegen van de poster.
        const imgTag = document.createElement('img');
        imgTag.src = item.Poster;
        
        // A element aanmaken
        const aTag = document.createElement('a');

        //Children appenden
        newLi.appendChild(aTag);
        aTag.appendChild(imgTag);

        // A element + toevoeging van href en link + IMDB ID
        aTag.href = "https://imdb.com/title/" + item.imdbID;
        return newLi
    
    })
    //console.log('RVV-1', movieMap[0], movieOverview);
    
    //forEach op movieMap voor toevoeging van alle children aan de movieOverview
    movieMap.forEach(li => {
        movieOverview.appendChild(li);
    });
}

//functie met alle radiobuttons en een koppeling aan de eventlistener, change in dit geval
//handeleOnChangeEvent word aangeroepen bij een change oftewel wisseling van buttons.
const addEventListeners = () =>{
const radioBtns = document.getElementsByName('film-filter');

radioBtns.forEach((button)=>{
    button.addEventListener('change', handleOnChangeEvent);

}) 
}

//functie om te zoeken op een woord in de filmtitel. .search toegepast https://www.w3schools.com/jsref/jsref_search.asp
//Is dit gelijk of meer dan 0, push dit dan naar lege array filteredMovies
const filterMovies = (wordInMovie) =>{
    let filteredMovies=[];

    movies.forEach((movie)=>{
        if (movie.Title.search(wordInMovie) >= 0) {
            
            filteredMovies.push(movie);
            //console.log(movie.Title);  
        }
                
    })

    //console.log(filteredMovies);
    return filteredMovies;
};

// functie om te checken of het jaartal van de film gelijk of hoger dan 2014 is.
const filterLatestMovies =()=>{
    let filteredMovies=[];
    movies.forEach((movie)=>{
        if (movie.Year >= 2014){
        filteredMovies.push(movie);
        //console.log(movie.Year);

        } 
    })
    return filteredMovies;
};

// functie met een switch welke kijkt wat er gebeurt.
// event.target.value = event, er gaat iets plaatsvinden. target = waar je op klikt. 
// value = hetgene wat specifiek bedoeld word waar op geklikt word. value is ook te vinden in de HTML bij de radiobuttons.
const handleOnChangeEvent=(event)=>{
    //console.log(event.target);

    switch (event.target.value) {
        case "latest":
            addMoviesToDom(filterLatestMovies(movies));
            //console.log('latest movies');
            break;
    
            case "princess-movies":
            addMoviesToDom(filterMovies("Princess"));
            //console.log('princess movies');
            break;
    
            case "xmen-movies":
            addMoviesToDom(filterMovies("X-Men"));
            //console.log('xmen-movies');
            break;
    
            case "avengers-movies":
            addMoviesToDom(filterMovies("Avengers"));
            //console.log('avengers movies');
            break;
    
            case "batman-movies":
                addMoviesToDom(filterMovies("Batman"));
            //console.log('batman movies');
            break;
 
        default:
    }
}


//aanroepen en direct laten uitvoeren functies.
addEventListeners();
addMoviesToDom(movies);




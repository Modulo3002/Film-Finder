const addMoviesToDom = (moviesLst)=>{
    const movieOverview = document.getElementById('movie-overview')
    //verwijderen child elements from parent UL, dus alle li's eruit.
    movieOverview.innerHTML = '';
    const movieMap = moviesLst.map((item)=>{
        
        const newLi = document.createElement('li'); 
        //newLi.innerHTML = item.Title;
        
        const imgTag = document.createElement('img');
        imgTag.src = item.Poster;
        
        const aTag = document.createElement('a');

        newLi.appendChild(aTag);
        aTag.appendChild(imgTag);

        aTag.href = "https://imdb.com/title/" + item.imdbID;
        return newLi
    
    })
    //console.log('RVV-1', movieMap[0], movieOverview);
    
    movieMap.forEach(li => {
        movieOverview.appendChild(li);
    });
}


const addEventListeners = () =>{
const radioBtns = document.getElementsByName('film-filter');

radioBtns.forEach((button)=>{
    button.addEventListener('change', handleOnChangeEvent);

}) 
}

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


addEventListeners();
addMoviesToDom(movies);




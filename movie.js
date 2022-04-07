class movie {
    constructor(title, studio, rating = "PG") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
        console.log(`The title of the movie is "${this.title}", the studio that made the movie is "${this.studio}" and the rating is "${this.rating}"`);
    }
    getPG(movies, ratings) {
        let arr = [];
        for (let i = 0; i < movies.length; i++) {
            if (ratings[i] == "PG") {
                arr.push(movies[i]);
            }
        }
        return arr;
    }
}


// a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.
const movie_a = new movie("JAI BHIM", "2D Entertainment", "PG13");

// b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.
const movie_b = new movie("JAI BHIM", "2D Entertainment");

// c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.
let pgMovies = movie_b.getPG(["A", "B", "C", "D", "E"], ["PG", "R", "PG", "PG13", "PG"])
console.log(pgMovies);

// d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG13”
const movie_d = new movie('Casino Royale', 'Eon Productions', 'PG13');
class movie {

    constructor(title, studio, rating = 'PG') {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
    Title() {
        console.log(`The title of the movie is "${this.title}"`);
    }
    Studio() {
        console.log(`The studio that made this movie "${this.title}" is "${this.studio}"`);
    }
    Rating() {
        console.log(`The rating of the movie "${this.title}" is - "${this.rating}"`);
    }
}
class movieNew extends movie1 {

    getPG() {
        console.log(`only PG rating movies is "${this.title}" rating is"${this.rating}"`)
    }
}
let movies = new movieNew("JAI BHIM", "2D Entertainment", "PG13");
movies.Title();
movies.Studio();
movies.Rating();
movies.getPG();


//d) Write a piece of code that creates an instance of the class Movie
//with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”
class movieName {
    constructor(title, studio, rating = 'PG') {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
}
let movie = new movieName('Casino Royale', 'Eon Productions', 'PG13');
console.log(movie)
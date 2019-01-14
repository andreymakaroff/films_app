import { create } from 'apisauce'
import { Config } from 'App/Config'

/**
 * This is an example of a service that connects to a 3rd party API.
 *
 * Feel free to remove this example from your application.
 */

const fakeData = [
  {
    title: 'The Shawshank Redemption',
    year: '1994',
    releaseDate: '19941014',
    directors: [{ name: 'Frank Darabont', id: 'nm0001104' }],
    writers: [
      { name: 'Stephen King', id: 'nm0000175' },
      { name: 'Frank Darabont', id: 'nm0001104' },
    ],
    runtime: '142 min',
    urlPoster:
      'https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg',
    countries: ['USA'],
    languages: ['English'],
    genres: ['Drama'],
    plot:
      "Chronicles the experiences of a formerly successful banker as a prisoner in the gloomy jailhouse of Shawshank after being found guilty of a crime he did not commit. The film portrays the man's unique way of dealing with his new, torturous life; along the way he befriends a number of fellow prisoners, most notably a wise long-term inmate named Red.",
    simplePlot:
      'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
    idIMDB: 'tt0111161',
    urlIMDB: 'http://www.imdb.com/title/tt0111161',
    rating: '9.3',
    metascore: '80',
    rated: 'R',
    votes: '2,039,034',
    type: 'Movie',
    ranking: 1,
  },
  {
    title: 'The Godfather',
    year: '1972',
    releaseDate: '19720324',
    directors: [{ name: 'Francis Ford Coppola', id: 'nm0000338' }],
    writers: [
      { name: 'Mario Puzo', id: 'nm0701374' },
      { name: 'Francis Ford Coppola', id: 'nm0000338' },
    ],
    runtime: '175 min',
    urlPoster:
      'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY268_CR3,0,182,268_AL_.jpg',
    countries: ['USA'],
    languages: ['English', 'Italian', 'Latin'],
    genres: ['Crime', 'Drama'],
    plot:
      'When the aging head of a famous crime family decides to transfer his position to one of his subalterns, a series of unfortunate events start happening to the family, and a war begins between all the well-known families leading to insolence, deportation, murder and revenge, and ends with the favorable successor being finally chosen.',
    simplePlot:
      'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
    idIMDB: 'tt0068646',
    urlIMDB: 'http://www.imdb.com/title/tt0068646',
    rating: '9.2',
    metascore: '100',
    rated: 'R',
    votes: '1,398,472',
    type: 'Movie',
    ranking: 2,
  },
  {
    title: 'The Godfather: Part II',
    year: '1974',
    releaseDate: '19741220',
    directors: [{ name: 'Francis Ford Coppola', id: 'nm0000338' }],
    writers: [
      { name: 'Francis Ford Coppola', id: 'nm0000338' },
      { name: 'Mario Puzo', id: 'nm0701374' },
    ],
    runtime: '202 min',
    urlPoster:
      'https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY268_CR3,0,182,268_AL_.jpg',
    countries: ['USA'],
    languages: ['English', 'Italian', 'Spanish', 'Latin', 'Sicilian'],
    genres: ['Crime', 'Drama'],
    plot:
      'The continuing saga of the Corleone crime family tells the story of a young Vito Corleone growing up in Sicily and in 1910s New York; and follows Michael Corleone in the 1950s as he attempts to expand the family business into Las Vegas, Hollywood and Cuba.',
    simplePlot:
      'The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.',
    idIMDB: 'tt0071562',
    urlIMDB: 'http://www.imdb.com/title/tt0071562',
    rating: '9.0',
    metascore: '90',
    rated: 'R',
    votes: '969,354',
    type: 'Movie',
    ranking: 3,
  },
  {
    title: 'The Dark Knight',
    year: '2008',
    releaseDate: '20080718',
    directors: [{ name: 'Christopher Nolan', id: 'nm0634240' }],
    writers: [
      { name: 'Jonathan Nolan', id: 'nm0634300' },
      { name: 'Christopher Nolan', id: 'nm0634240' },
    ],
    runtime: '152 min',
    urlPoster:
      'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg',
    countries: ['USA', 'UK'],
    languages: ['English', 'Mandarin'],
    genres: ['Action', 'Crime', 'Drama', 'Thriller'],
    plot:
      'Set within a year after the events of Batman Begins, Batman, Lieutenant James Gordon, and new district attorney Harvey Dent successfully begin to round up the criminals that plague Gotham City until a mysterious and sadistic criminal mastermind known only as the Joker appears in Gotham, creating a new wave of chaos. Batman\'s struggle against the Joker becomes deeply personal, forcing him to "confront everything he believes" and improve his technology to stop him. A love triangle develops between Bruce Wayne, Dent and Rachel Dawes.',
    simplePlot:
      'When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
    idIMDB: 'tt0468569',
    urlIMDB: 'http://www.imdb.com/title/tt0468569',
    rating: '9.0',
    metascore: '84',
    rated: 'PG-13',
    votes: '2,006,760',
    type: 'Movie',
    ranking: 4,
  },
  {
    title: '12 Angry Men',
    year: '1957',
    releaseDate: '19570410',
    directors: [{ name: 'Sidney Lumet', id: 'nm0001486' }],
    writers: [
      { name: 'Reginald Rose', id: 'nm0741627' },
      { name: 'Reginald Rose', id: 'nm0741627' },
    ],
    runtime: '96 min',
    urlPoster:
      'https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_UX182_CR0,0,182,268_AL_.jpg',
    countries: ['USA'],
    languages: ['English'],
    genres: ['Drama'],
    plot:
      "The defense and the prosecution have rested and the jury is filing into the jury room to decide if a young man is guilty or innocent of murdering his father. What begins as an open-and-shut case of murder soon becomes a detective story that presents a succession of clues creating doubt, and a mini-drama of each of the jurors' prejudices and preconceptions about the trial, the accused, and each other. Based on the play, all of the action takes place on the stage of the jury room.",
    simplePlot:
      'A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.',
    idIMDB: 'tt0050083',
    urlIMDB: 'http://www.imdb.com/title/tt0050083',
    rating: '8.9',
    metascore: '96',
    rated: 'Not Rated',
    votes: '573,935',
    type: 'Movie',
    ranking: 5,
  },
  {
    title: "Schindler's List",
    year: '1993',
    releaseDate: '19940204',
    directors: [{ name: 'Steven Spielberg', id: 'nm0000229' }],
    writers: [
      { name: 'Thomas Keneally', id: 'nm0447745' },
      { name: 'Steven Zaillian', id: 'nm0001873' },
    ],
    runtime: '195 min',
    urlPoster:
      'https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg',
    countries: ['USA'],
    languages: ['English', 'Hebrew', 'German', 'Polish'],
    genres: ['Biography', 'Drama', 'History'],
    plot:
      'Oskar Schindler is a vainglorious and greedy German businessman who becomes an unlikely humanitarian amid the barbaric German Nazi reign when he feels compelled to turn his factory into a refuge for Jews. Based on the true story of Oskar Schindler who managed to save about 1100 Jews from being gassed at the Auschwitz concentration camp, it is a testament to the good in all of us.',
    simplePlot:
      'In German-occupied Poland during World War II, Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazi Germans.',
    idIMDB: 'tt0108052',
    urlIMDB: 'http://www.imdb.com/title/tt0108052',
    rating: '8.9',
    metascore: '93',
    rated: 'R',
    votes: '1,054,761',
    type: 'Movie',
    ranking: 6,
  },
  {
    title: 'The Lord of the Rings: The Return of the King',
    year: '2003',
    releaseDate: '20031217',
    directors: [{ name: 'Peter Jackson', id: 'nm0001392' }],
    writers: [{ name: 'J.R.R. Tolkien', id: 'nm0866058' }, { name: 'Fran Walsh', id: 'nm0909638' }],
    runtime: '201 min',
    urlPoster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg',
    countries: ['New Zealand', 'USA'],
    languages: ['English', 'Quenya', 'Old English', 'Sindarin'],
    genres: ['Adventure', 'Drama', 'Fantasy'],
    plot:
      'The final confrontation between the forces of good and evil fighting for control of the future of Middle-earth. Hobbits: Frodo and Sam reach Mordor in their quest to destroy the "one ring", while Aragorn leads the forces of good against Sauron\'s evil army at the stone city of Minas Tirith.',
    simplePlot:
      "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
    idIMDB: 'tt0167260',
    urlIMDB: 'http://www.imdb.com/title/tt0167260',
    rating: '8.9',
    metascore: '94',
    rated: 'PG-13',
    votes: '1,452,239',
    type: 'Movie',
    ranking: 7,
  },
  {
    title: 'Pulp Fiction',
    year: '1994',
    releaseDate: '19941014',
    directors: [{ name: 'Quentin Tarantino', id: 'nm0000233' }],
    writers: [
      { name: 'Quentin Tarantino', id: 'nm0000233' },
      { name: 'Roger Avary', id: 'nm0000812' },
    ],
    runtime: '154 min',
    urlPoster:
      'https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY268_CR1,0,182,268_AL_.jpg',
    countries: ['USA'],
    languages: ['English', 'Spanish', 'French'],
    genres: ['Crime', 'Drama'],
    plot:
      'Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.',
    simplePlot:
      "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    idIMDB: 'tt0110912',
    urlIMDB: 'http://www.imdb.com/title/tt0110912',
    rating: '8.9',
    metascore: '94',
    rated: 'R',
    votes: '1,593,049',
    type: 'Movie',
    ranking: 8,
  },
  {
    title: 'The Good, the Bad and the Ugly',
    originalTitle: 'Il buono, il brutto, il cattivo',
    year: '1966',
    releaseDate: '19671229',
    directors: [{ name: 'Sergio Leone', id: 'nm0001466' }],
    writers: [
      { name: 'Luciano Vincenzoni', id: 'nm0898812' },
      { name: 'Sergio Leone', id: 'nm0001466' },
    ],
    runtime: '178 min',
    urlPoster:
      'https://m.media-amazon.com/images/M/MV5BOTQ5NDI3MTI4MF5BMl5BanBnXkFtZTgwNDQ4ODE5MDE@._V1_UX182_CR0,0,182,268_AL_.jpg',
    countries: ['Italy', 'Spain', 'West Germany'],
    languages: ['Italian', 'English'],
    genres: ['Western'],
    plot:
      "Blondie (The Good) is a professional gunslinger who is out trying to earn a few dollars. Angel Eyes (The Bad) is a hit man who always commits to a task and sees it through, as long as he is paid to do so. And Tuco (The Ugly) is a wanted outlaw trying to take care of his own hide. Tuco and Blondie share a partnership together making money off Tuco's bounty, but when Blondie unties the partnership, Tuco tries to hunt down Blondie. When Blondie and Tuco come across a horse carriage loaded with dead bodies, they soon learn from the only survivor (Bill Carson) that he and a few other men have buried a stash of gold in a cemetery. Unfortunately Carson dies and Tuco only finds out the name of the cemetery, while Blondie finds out the name on the grave. Now the two must keep each other alive in order to find the gold. Angel Eyes (who had been looking for Bill Carson) discovers that Tuco and Blondie met with Carson and knows they know the location of the gold. All he needs is for the two to ...",
    simplePlot:
      'A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery.',
    idIMDB: 'tt0060196',
    urlIMDB: 'http://www.imdb.com/title/tt0060196',
    rating: '8.9',
    metascore: '90',
    rated: 'R',
    votes: '605,249',
    type: 'Movie',
    ranking: 9,
  },
  {
    title: 'Fight Club',
    year: '1999',
    releaseDate: '19991015',
    directors: [{ name: 'David Fincher', id: 'nm0000399' }],
    writers: [{ name: 'Chuck Palahniuk', id: 'nm0657333' }, { name: 'Jim Uhls', id: 'nm0880243' }],
    runtime: '139 min',
    urlPoster:
      'https://m.media-amazon.com/images/M/MV5BMjJmYTNkNmItYjYyZC00MGUxLWJhNWMtZDY4Nzc1MDAwMzU5XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg',
    countries: ['USA', 'Germany'],
    languages: ['English'],
    genres: ['Drama'],
    plot:
      "A nameless first person narrator (Edward Norton) attends support groups in attempt to subdue his emotional state and relieve his insomniac state. When he meets Marla (Helena Bonham Carter), another fake attendee of support groups, his life seems to become a little more bearable. However when he associates himself with Tyler (Brad Pitt) he is dragged into an underground fight club and soap making scheme. Together the two men spiral out of control and engage in competitive rivalry for love and power. When the narrator is exposed to the hidden agenda of Tyler's fight club, he must accept the awful truth that Tyler may not be who he says he is.",
    simplePlot:
      'An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.',
    idIMDB: 'tt0137523',
    urlIMDB: 'http://www.imdb.com/title/tt0137523',
    rating: '8.8',
    metascore: '66',
    rated: 'R',
    votes: '1,632,023',
    type: 'Movie',
    ranking: 10,
  },
  {
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    year: '2001',
    releaseDate: '20011219',
    directors: [{ name: 'Peter Jackson', id: 'nm0001392' }],
    writers: [{ name: 'J.R.R. Tolkien', id: 'nm0866058' }, { name: 'Fran Walsh', id: 'nm0909638' }],
    runtime: '178 min',
    urlPoster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_UX182_CR0,0,182,268_AL_.jpg',
    countries: ['New Zealand', 'USA'],
    languages: ['English', 'Sindarin'],
    genres: ['Adventure', 'Drama', 'Fantasy'],
    plot:
      'An ancient Ring thought lost for centuries has been found, and through a strange twist in fate has been given to a small Hobbit named Frodo. When Gandalf discovers the Ring is in fact the One Ring of the Dark Lord Sauron, Frodo must make an epic quest to the Cracks of Doom in order to destroy it! However he does not go alone. He is joined by Gandalf, Legolas the elf, Gimli the Dwarf, Aragorn, Boromir and his three Hobbit friends Merry, Pippin and Samwise. Through mountains, snow, darkness, forests, rivers and plains, facing evil and danger at every corner the Fellowship of the Ring must go. Their quest to destroy the One Ring is the only hope for the end of the Dark Lords reign!',
    simplePlot:
      'A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.',
    idIMDB: 'tt0120737',
    urlIMDB: 'http://www.imdb.com/title/tt0120737',
    rating: '8.8',
    metascore: '92',
    rated: 'PG-13',
    votes: '1,468,895',
    type: 'Movie',
    ranking: 11,
  },
  {
    title: 'Forrest Gump',
    year: '1994',
    releaseDate: '19940706',
    directors: [{ name: 'Robert Zemeckis', id: 'nm0000709' }],
    writers: [{ name: 'Winston Groom', id: 'nm0343165' }, { name: 'Eric Roth', id: 'nm0744839' }],
    runtime: '142 min',
    urlPoster:
      'https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UY268_CR1,0,182,268_AL_.jpg',
    countries: ['USA'],
    languages: ['English'],
    genres: ['Drama', 'Romance'],
    plot:
      "Forrest Gump is a simple man with a low I.Q. but good intentions. He is running through childhood with his best and only friend Jenny. His 'mama' teaches him the ways of life and leaves him to choose his destiny. Forrest joins the army for service in Vietnam, finding new friends called Dan and Bubba, he wins medals, creates a famous shrimp fishing fleet, inspires people to jog, starts a ping-pong craze, creates the smiley, writes bumper stickers and songs, donates to people and meets the president several times. However, this is all irrelevant to Forrest who can only think of his childhood sweetheart Jenny Curran, who has messed up her life. Although in the end all he wants to prove is that anyone can love anyone.",
    simplePlot:
      'The presidencies of Kennedy and Johnson, Vietnam, Watergate, and other history unfold through the perspective of an Alabama man with an IQ of 75.',
    idIMDB: 'tt0109830',
    urlIMDB: 'http://www.imdb.com/title/tt0109830',
    rating: '8.8',
    metascore: '82',
    rated: 'PG-13',
    votes: '1,558,128',
    type: 'Movie',
    ranking: 12,
  },
  {
    title: 'Star Wars: Episode V - The Empire Strikes Back',
    year: '1980',
    releaseDate: '19800620',
    directors: [{ name: 'Irvin Kershner', id: 'nm0449984' }],
    writers: [
      { name: 'Leigh Brackett', id: 'nm0102824' },
      { name: 'Lawrence Kasdan', id: 'nm0001410' },
    ],
    runtime: '124 min',
    urlPoster:
      'https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg',
    countries: ['USA'],
    languages: ['English'],
    genres: ['Action', 'Adventure', 'Fantasy', 'Sci-Fi'],
    plot:
      "Luke Skywalker, Han Solo, Princess Leia and Chewbacca face attack by the Imperial forces and its AT-AT walkers on the ice planet Hoth. While Han and Leia escape in the Millennium Falcon, Luke travels to Dagobah in search of Yoda. Only with the Jedi Master's help will Luke survive when the Dark Side of the Force beckons him into the ultimate duel with Darth Vader.",
    simplePlot:
      'After the rebels are brutally overpowered by the Empire on the ice planet Hoth, Luke Skywalker begins Jedi training with Yoda, while his friends are pursued by Darth Vader.',
    idIMDB: 'tt0080684',
    urlIMDB: 'http://www.imdb.com/title/tt0080684',
    rating: '8.8',
    metascore: '82',
    rated: 'PG',
    votes: '1,024,108',
    type: 'Movie',
    ranking: 13,
  },
  {
    title: 'Inception',
    year: '2010',
    releaseDate: '20100716',
    directors: [{ name: 'Christopher Nolan', id: 'nm0634240' }],
    writers: [{ name: 'Christopher Nolan', id: 'nm0634240' }],
    runtime: '148 min',
    urlPoster:
      'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg',
    countries: ['USA', 'UK'],
    languages: ['English', 'Japanese', 'French'],
    genres: ['Action', 'Adventure', 'Sci-Fi', 'Thriller'],
    plot:
      "Dom Cobb is a skilled thief, the absolute best in the dangerous art of extraction, stealing valuable secrets from deep within the subconscious during the dream state, when the mind is at its most vulnerable. Cobb's rare ability has made him a coveted player in this treacherous new world of corporate espionage, but it has also made him an international fugitive and cost him everything he has ever loved. Now Cobb is being offered a chance at redemption. One last job could give him his life back but only if he can accomplish the impossible - inception. Instead of the perfect heist, Cobb and his team of specialists have to pull off the reverse: their task is not to steal an idea but to plant one. If they succeed, it could be the perfect crime. But no amount of careful planning or expertise can prepare the team for the dangerous enemy that seems to predict their every move. An enemy that only Cobb could have seen coming.",
    simplePlot:
      'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.',
    idIMDB: 'tt1375666',
    urlIMDB: 'http://www.imdb.com/title/tt1375666',
    rating: '8.8',
    metascore: '74',
    rated: 'PG-13',
    votes: '1,786,209',
    type: 'Movie',
    ranking: 14,
  },
  {
    title: 'The Lord of the Rings: The Two Towers',
    year: '2002',
    releaseDate: '20021218',
    directors: [{ name: 'Peter Jackson', id: 'nm0001392' }],
    writers: [{ name: 'J.R.R. Tolkien', id: 'nm0866058' }, { name: 'Fran Walsh', id: 'nm0909638' }],
    runtime: '179 min',
    urlPoster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY268_CR0,0,182,268_AL_.jpg',
    countries: ['New Zealand', 'USA'],
    languages: ['English', 'Sindarin', 'Old English'],
    genres: ['Adventure', 'Drama', 'Fantasy'],
    plot:
      "The continuing quest of Frodo and the Fellowship to destroy the One Ring. Frodo and Sam discover they are being followed by the mysterious Gollum. Aragorn, the Elf archer Legolas and Gimli the Dwarf encounter the besieged Rohan kingdom, whose once great King Theoden has fallen under Saruman's deadly spell.",
    simplePlot:
      "While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Sauron's new ally, Saruman, and his hordes of Isengard.",
    idIMDB: 'tt0167261',
    urlIMDB: 'http://www.imdb.com/title/tt0167261',
    rating: '8.7',
    metascore: '87',
    rated: 'PG-13',
    votes: '1,313,053',
    type: 'Movie',
    ranking: 15,
  },
  {
    title: "One Flew Over the Cuckoo's Nest",
    year: '1975',
    releaseDate: '19751119',
    directors: [{ name: 'Milos Forman', id: 'nm0001232' }],
    writers: [
      { name: 'Lawrence Hauben', id: 'nm0369142' },
      { name: 'Bo Goldman', id: 'nm0325743' },
    ],
    runtime: '133 min',
    urlPoster:
      'https://m.media-amazon.com/images/M/MV5BZjA0OWVhOTAtYWQxNi00YzNhLWI4ZjYtNjFjZTEyYjJlNDVlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg',
    countries: ['USA'],
    languages: ['English'],
    genres: ['Drama'],
    plot:
      'McMurphy has a criminal past and has once again gotten himself into trouble and is sentenced by the court. To escape labor duties in prison, McMurphy pleads insanity and is sent to a ward for the mentally unstable. Once here, McMurphy both endures and stands witness to the abuse and degradation of the oppressive Nurse Ratched, who gains superiority and power through the flaws of the other inmates. McMurphy and the other inmates band together to make a rebellious stance against the atrocious Nurse.',
    simplePlot:
      'A criminal pleads insanity after getting into trouble again and once in the mental institution rebels against the oppressive nurse and rallies up the scared patients.',
    idIMDB: 'tt0073486',
    urlIMDB: 'http://www.imdb.com/title/tt0073486',
    rating: '8.7',
    metascore: '80',
    rated: 'R',
    votes: '809,912',
    type: 'Movie',
    ranking: 16,
  },
  {
    title: 'Goodfellas',
    year: '1990',
    releaseDate: '19900921',
    directors: [{ name: 'Martin Scorsese', id: 'nm0000217' }],
    writers: [
      { name: 'Nicholas Pileggi', id: 'nm0683380' },
      { name: 'Nicholas Pileggi', id: 'nm0683380' },
    ],
    runtime: '146 min',
    urlPoster:
      'https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg',
    countries: ['USA'],
    languages: ['English', 'Italian'],
    genres: ['Crime', 'Drama'],
    plot:
      "Henry Hill might be a small time gangster, who may have taken part in a robbery with Jimmy Conway and Tommy De Vito, two other gangsters who might have set their sights a bit higher. His two partners could kill off everyone else involved in the robbery, and slowly start to think about climbing up through the hierarchy of the Mob. Henry, however, might be badly affected by his partners' success, but will he consider stooping low enough to bring about the downfall of Jimmy and Tommy?",
    simplePlot:
      'The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito in the Italian-American crime syndicate.',
    idIMDB: 'tt0099685',
    urlIMDB: 'http://www.imdb.com/title/tt0099685',
    rating: '8.7',
    metascore: '89',
    rated: 'R',
    votes: '879,745',
    type: 'Movie',
    ranking: 17,
  },
  {
    title: 'The Matrix',
    year: '1999',
    releaseDate: '19990331',
    directors: [
      { name: 'Lana Wachowski', id: 'nm0905154' },
      { name: 'Lilly Wachowski', id: 'nm0905152' },
    ],
    writers: [
      { name: 'Lilly Wachowski', id: 'nm0905152' },
      { name: 'Lana Wachowski', id: 'nm0905154' },
    ],
    runtime: '136 min',
    urlPoster:
      'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg',
    countries: ['USA'],
    languages: ['English'],
    genres: ['Action', 'Sci-Fi'],
    plot:
      "Thomas A. Anderson is a man living two lives. By day he is an average computer programmer and by night a hacker known as Neo. Neo has always questioned his reality, but the truth is far beyond his imagination. Neo finds himself targeted by the police when he is contacted by Morpheus, a legendary computer hacker branded a terrorist by the government. Morpheus awakens Neo to the real world, a ravaged wasteland where most of humanity have been captured by a race of machines that live off of the humans' body heat and electrochemical energy and who imprison their minds within an artificial reality known as the Matrix. As a rebel against the machines, Neo must return to the Matrix and confront the agents: super-powerful computer programs devoted to snuffing out Neo and the entire human rebellion.",
    simplePlot:
      'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
    idIMDB: 'tt0133093',
    urlIMDB: 'http://www.imdb.com/title/tt0133093',
    rating: '8.7',
    metascore: '73',
    rated: 'R',
    votes: '1,464,043',
    type: 'Movie',
    ranking: 18,
  },
  {
    title: 'Seven Samurai',
    originalTitle: 'Shichinin no samurai',
    year: '1954',
    releaseDate: '19561119',
    directors: [{ name: 'Akira Kurosawa', id: 'nm0000041' }],
    writers: [
      { name: 'Akira Kurosawa', id: 'nm0000041' },
      { name: 'Shinobu Hashimoto', id: 'nm0368074' },
    ],
    runtime: '207 min',
    urlPoster:
      'https://m.media-amazon.com/images/M/MV5BMTRjZTc3NjItMDJiMC00MTNmLTlkYjEtN2ZiZWU4YmI1OGI4XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY268_CR4,0,182,268_AL_.jpg',
    countries: ['Japan'],
    languages: ['Japanese'],
    genres: ['Adventure', 'Drama'],
    plot:
      "A veteran samurai, who has fallen on hard times, answers a village's request for protection from bandits. He gathers 6 other samurai to help him, and they teach the townspeople how to defend themselves, and they supply the samurai with three small meals a day. The film culminates in a giant battle when 40 bandits attack the village.",
    simplePlot:
      'A poor village under attack by bandits recruits seven unemployed samurai to help them defend themselves.',
    idIMDB: 'tt0047478',
    urlIMDB: 'http://www.imdb.com/title/tt0047478',
    rating: '8.7',
    metascore: '98',
    rated: 'Not Rated',
    votes: '275,981',
    type: 'Movie',
    ranking: 19,
  },
  {
    title: 'Se7en',
    year: '1995',
    releaseDate: '19950922',
    directors: [{ name: 'David Fincher', id: 'nm0000399' }],
    writers: [{ name: 'Andrew Kevin Walker', id: 'nm0001825' }],
    runtime: '127 min',
    urlPoster:
      'https://m.media-amazon.com/images/M/MV5BOTUwODM5MTctZjczMi00OTk4LTg3NWUtNmVhMTAzNTNjYjcyXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg',
    countries: ['USA'],
    languages: ['English'],
    genres: ['Crime', 'Drama', 'Mystery', 'Thriller'],
    plot:
      "A film about two homicide detectives' (Morgan Freeman and Brad Pitt) desperate hunt for a serial killer who justifies his crimes as absolution for the world's ignorance of the Seven Deadly Sins. The movie takes us from the tortured remains of one victim to the next as the sociopathic \"John Doe\" (Kevin Spacey) sermonizes to Detectives Somerset and Mills -- one sin at a time. The sin of Gluttony comes first and the murderer's terrible capacity is graphically demonstrated in the dark and subdued tones characteristic of film noir. The seasoned and cultured but jaded Somerset researches the Seven Deadly Sins in an effort to understand the killer's modus operandi while the bright but green and impulsive Detective Mills (Pitt) scoffs at his efforts to get inside the mind of a killer...",
    simplePlot:
      'Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives.',
    idIMDB: 'tt0114369',
    urlIMDB: 'http://www.imdb.com/title/tt0114369',
    rating: '8.6',
    metascore: '65',
    rated: 'R',
    votes: '1,248,523',
    type: 'Movie',
    ranking: 20,
  },
]

const token = '2408fb43-c3cc-403e-a813-5536cda3a8eb'
const url =
  'https://www.myapifilms.com/imdb/top?start=1&end=20&token=2408fb43-c3cc-403e-a813-5536cda3a8eb&format=json&data=1'
const loremFilmApiClient = create({
  /**
   * Import the config from the App/Config/index.js file
   */
  baseURL: Config.API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

function fetchFilms() {
  // return loremUserApiClient.get('?page=1&results=20').then((response) => {
  //   if (response.ok) {
  //     return response.data.results
  //   }
  //   return null
  // })

  // FilmsIMDB_Service -- it is too SLOW!!!

  return fakeData
}

export const FilmsIMDB_Service = {
  fetchFilms,
}

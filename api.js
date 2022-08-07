const Member = (name, dob, bands, position) => {
    this.name;
    this.dob;
    this.age = getAge(this.dob);
    this.bands;
    this.instruments;
    this.getAge = () => {
        // calculate difference in months between current date and dob
        let monthDiff =  Date.now() - this.dob.getTime();
        // convert
        let ageDate = new Date(monthDiff);
        let year = ageDate.getUTCFullYear();
        let age = Math.abs(year - 1970)
        return age
    }
}

const Album = (name, cover, label, producer, releaseDate, studio, trackList) => {
    this.name;
    this.cover;
    this.releaseDate;
    this.producer;
    this.studio;
    this.trackList;
}

const ten = new Album(
    'Ten',
    'img/ten.webp',
    'Epic',
    `Brendan O'Brien`,
    'August 27, 1991',
    [
    'London Bridge'
    ],
    'tracks' = {
        1 : 'Once',
        2 : 'Even Flow',
        3 : 'Alive',
        4 : 'Why Go',
        5 : 'Black',
        6 : 'Jeremy',
        7 : 'Oceans',
        8 : 'Porch',
        9 : 'Garden',
        10: 'Deep',
        11: 'Release'
    })

const vs = new Album(
    'Vs.',
    'img/vs.webp',
    'Epic',
    `Brendan O'Brien`,
    'October 19, 1993',
    [
        'The Site',
        'Potatohead'
    ],    
    'tracks' = {
        1 : 'Go',
        2 : 'Animal',
        3 : 'Daughter',
        4 : 'Glorified G',
        5 : 'Dissident',
        6 : 'W.M.A.',
        7 : 'Blood',
        8 : 'Rearviewmirror',
        9 : 'Rats',
        10: 'Elderly Woman Behind the Counter in a Small Town',
        11: 'Leash',
        12: 'Indifference'
    })

const vitalogy = new Album(
    'Vitalogy',
    'img/vitalogy.webp',
    'Epic',
    `Brendan O'Brien`,
    'November 22, 1994',
    [
        'Bad Animals',
        'Doppler',
        'Southern Tracks',
        'Kingsway'
    ],    
    'tracks' = {
        1 : 'Last Exit',
        2 : 'Spin the Black Circle',
        3 : 'Not for You',
        4 : 'Tremor Christ',
        5 : 'Nothingman',
        6 : 'Whipping',
        7 : 'Pry, To',
        8 : 'Corduroy',
        9 : 'Bugs',
        10: `Satan's Bed`,
        11: 'Better Man',
        12: 'Aye Davanita',
        13: 'Immortality',
        14: `Hey Foxymophandlemama, That's Me`
    })

const noCode = new Album(
    'No Code',
    'img/nocode.webp',
    'Epic',
    `Brendan O'Brien`,
    'August 27, 1996',
    [
        'CRC',
        'Litho',
        'Kingsway'
    ],    
    'tracks' = {
        1 : 'Sometimes',
        2 : 'Hail, Hail',
        3 : 'Who You Are',
        4 : 'In My Tree',
        5 : 'Smile',
        6 : 'Off He Goes',
        7 : 'Habit',
        8 : 'Red Mosquito',
        9 : 'Lukin',
        10: `Present Tense`,
        11: 'Mankind',
        12: `I'm Open`,
        13: 'Around the Bend'
    })

const yield = new Album(
    'Yeild',
    'img/yeild.webp',
    'Epic',
    `Brendan O'Brien`,
    'February 3, 1998',
    [
        'Bad Animals',
        'Doppler',
        'Litho',
        'Souther Tracks'
    ],    
    'tracks' = {
        1 : 'Brain of J.',
        2 : 'Faithful',
        3 : 'No Way',
        4 : 'Given to Fly',
        5 : 'Wishlist',
        6 : 'Pilate',
        7 : 'Do the Evolution',
        8 : 'The Color Red',
        9 : 'MFC',
        10: 'Low Light',
        11: 'In Hiding',
        12: 'Push Me, Pull Me',
        13: 'All Those Yesterdays'
    })

const binaural = new Album(
    'Binaural',
    'img/binaural.webp',
    'Epic',
    'Tchad Blake',
    'May 16, 2000',
    [
        'Litho'
    ],    
    'tracks' = {
        1 : 'Breakerfall',
        2 : `God's Dice`,
        3 : 'Evacuation',
        4 : 'Light Years',
        5 : 'Nothing as It Seems',
        6 : 'Thin Air',
        7 : 'Insignificance',
        8 : 'Of the Girl',
        9 : 'Grievance',
        10: 'Rival',
        11: 'Sleight of Hand',
        12: 'Soon Forget',
        13: 'Parting Ways'
    })

const riotAct = new Album(
    'Riot Act',
    'img/riotact.webp',
    'Epic',
    'Adam Kasper',
    'November 12, 2002',
    [
        'Space',
        'X'
    ],    
    'tracks' = {
        1 : `Can't Keep`,
        2 : 'Save You',
        3 : 'Love Boat Captain',
        4 : 'Cropduster',
        5 : 'Ghost',
        6 : 'I Am Mine',
        7 : 'Thumbing My Way',
        8 : 'You Are',
        9 : 'Get Right',
        10: 'Green Disease',
        11: 'Help Help',
        12: 'Bu$hleaguer',
        13: '1/2 Full',
        14: 'Arc',
        15: 'All or None'
    })

const pearljam = new Album(
    'Pearl Jam',
    'img/pearljam.webp',
    'J',
    'Adam Kasper',
    'May 2, 2006',
    [
        'X'
    ],    
    'tracks' = {
        1 : 'Life Wasted',
        2 : 'World Wide Suicide',
        3 : 'Comatose',
        4 : 'Severed Hand',
        5 : 'Marker in the Sand',
        6 : 'Parachutes',
        7 : 'Unemployable',
        8 : 'Big Wave',
        9 : 'Gone',
        10: 'Wasted Reprise',
        11: 'Army Reserve',
        12: 'Come Back',
        13: 'Inside Job'
    })

const backspacer = new Album(
    'Backspacer',
    'img/backspacer.webp',
    'Monkeywrench',
    `Brendan O'Brien`,
    'September 20, 2009',
    [
        'Doppler',
        'Henson',
        'Southern Tracks'
    ],    
    'tracks' = {
        1 : 'Gonna See My Friend',
        2 : 'Got Some',
        3 : 'The Fixer',
        4 : 'Johnny Guitar',
        5 : 'Just Breathe',
        6 : 'Amongst the Waves',
        7 : 'Unthought Known',
        8 : 'Supersonic',
        9 : 'Speed of Sound',
        10: 'Force of Nature',
        11: 'The End'
    })

const lightningBolt = new Album(
    'Lightning Bolt',
    'img/lightningbolt.webp',
    [
        'Monkeywrench',
        'Republic'
    ],
    `Brendan O'Brien`,
    'October 15, 2013',
    [
        'Henson',
        'Litho',
        'X'
    ],    
    'tracks' = {
        1 : 'Getaway',
        2 : 'Mind Your Manners',
        3 : `My Father's Son`,
        4 : 'Sirens',
        5 : 'Lightning Bolt',
        6 : 'Infallible',
        7 : 'Pendulum',
        8 : 'Swallowed Whole',
        9 : 'Let the Records Play',
        10: 'Sleeping by Myself',
        11: 'Yellow Moon',
        12: 'Future Days'
    })

const gigaton = new Album(
    'Gigaton',
    'img/gigaton.webp',
    'Monkeywrench',
    'Josh Evans',
    'March 27, 2020',
    [
        'Monkeywrench',
        'Republic'
    ],    
    'tracks' = {
        1 : 'Who Ever Said',
        2 : 'Superblood Wolfmoon',
        3 : 'Dance of the Clairvoyants',
        4 : 'Quick Escape',
        5 : 'Alright',
        6 : `Seven O'Clock`,
        7 : 'Never Destination',
        8 : 'Take the Long Way',
        9 : 'Buckle Up',
        10: 'Comes Then Goes',
        11: 'Retrograde',
        12: 'River Cross'
    })

const eddie = new Member(
    'Eddie Vedder',
    'December 23, 1964',
    [
        'Bad Radio',
        'Indian Style',
        'Pearl Jam',
        'Surf and Destroy and the Butts',
        'Temple of the Dog'
    ],
    [
        'Guitar',
        'Lead Vocals',
        'Ukulele'
    ]);

const mike = new Member(
    'Mike McCready',
    'April 5, 1966',
    [
        'Levee Walkers',
        'Mad Season',
        'Mother Love Bone',
        'Pearl Jam',
        'The Rockfords',
        'Walking Papers'
    ],
    [
        'Bass',
        'Lead Guitar',
        'Vocals'
    ]);

const stone = new Member(
    'Stone Gossard',
    'July 20, 1966',
    [
        'Brad',
        'Green River',
        'Mother Love Bone',
        'Pearl Jam',
        'Temple of the Dog'
    ],
    [
        'Bass',
        'Drums',
        'Guitar',
        'Piano',
        'Vocals'
    ]);

const jeff = new Member(
    'Jeff Ament',
    'March 10, 1963',
    [
        'Green River',
        'Mother Love Bone',
        'Pearl Jam',
        'RNDM',
        'Temple of the Dog',
        'Three Fish',
        'Tres Mts.'
    ],
    [
        'Bass',
        'Chapman Stick',
        'Double Bass',
        'Drums',
        'Guitar',
        'Keyboard',
        'Vocals'
    ]);

const mattC = new Member(
    'Matt Cameron',
    'November 28, 1962',
    [
        'Hater',
        'Pearl Jam',
        'Nighttime Boogie Association',
        'Skin Yard',
        'Sound Garden',
        'Temple of the Dog',
        'Wellwater Conspiracy'
    ],
    [
        'Drums',
        'Guitar',
        'Mellotron',
        'Synthesizer',
        'Vocals'
    ]);
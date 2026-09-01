// ================================================================
// DATA FILE — the only file you edit to change what Red Block
// Catcher teaches. Swap this out for a different subject and the
// engine (index.html) runs it unchanged.
//
// Each word needs the CORRECT spelling plus a few plausible wrong
// spellings ("decoys"). During a round, tiles carrying the correct
// spelling and tiles carrying decoys both fall — catch the correct
// one enough times, and dodge (or eat the life-cost of) the decoys.
// ================================================================
window.RBB_DATA = {
  meta: {
    title: "Red Block Catcher",
    clueLabel: "What it means",
    answerNoun: "word",
    pointsPerCatch: 10,
    catchesNeeded: 3,     // correct catches needed to finish a word
    startLives: 3
  },
  levels: [
    { words: [
      { word:"friend", partOfSpeech:"noun",
        definition:"a person you like and trust",
        sentence:"She is my best friend.",
        decoys:["freind","frend","friand"] },
      { word:"believe", partOfSpeech:"verb",
        definition:"to feel sure that something is true",
        sentence:"I believe you can do it.",
        decoys:["beleive","belive","beleave"] },
      { word:"because", partOfSpeech:"conjunction",
        definition:"for the reason that",
        sentence:"We stayed inside because it was raining.",
        decoys:["becuase","becouse","becaus"] },
      { word:"people", partOfSpeech:"noun",
        definition:"more than one person",
        sentence:"Many people came to the party.",
        decoys:["poeple","peaple","peple"] },
      { word:"animal", partOfSpeech:"noun",
        definition:"a living creature that is not a plant",
        sentence:"The lion is a wild animal.",
        decoys:["aminal","anamal","animle"] }
    ]},
    { words: [
      { word:"beautiful", partOfSpeech:"adjective",
        definition:"very pretty or pleasing to look at",
        sentence:"The sunset was beautiful.",
        decoys:["beatiful","beutiful","beautifull"] },
      { word:"favorite", partOfSpeech:"adjective",
        definition:"liked more than any other",
        sentence:"Pizza is my favorite food.",
        decoys:["favrite","faverite","favorate"] },
      { word:"different", partOfSpeech:"adjective",
        definition:"not the same as another",
        sentence:"Each snowflake is different.",
        decoys:["diffrent","differant","diferent"] },
      { word:"important", partOfSpeech:"adjective",
        definition:"having great value or meaning",
        sentence:"Sleep is important for your health.",
        decoys:["importent","importint","imporant"] },
      { word:"remember", partOfSpeech:"verb",
        definition:"to keep something in your memory",
        sentence:"Please remember to bring your book.",
        decoys:["remeber","rember","remmber"] }
    ]},
    { words: [
      { word:"neighbor", partOfSpeech:"noun",
        definition:"someone who lives near you",
        sentence:"Our neighbor waved hello.",
        decoys:["nieghbor","naighbor","neighber"] },
      { word:"calendar", partOfSpeech:"noun",
        definition:"a chart that shows the days, weeks, and months",
        sentence:"We marked the trip on the calendar.",
        decoys:["calender","calandar","callendar"] },
      { word:"vegetable", partOfSpeech:"noun",
        definition:"a plant food like carrots or broccoli",
        sentence:"Broccoli is a healthy vegetable.",
        decoys:["vegtable","vegetible","veggetable"] },
      { word:"mysterious", partOfSpeech:"adjective",
        definition:"strange and hard to explain",
        sentence:"A mysterious light appeared in the sky.",
        decoys:["misterious","mysterius","mistereous"] },
      { word:"necessary", partOfSpeech:"adjective",
        definition:"needed; required",
        sentence:"Water is necessary for life.",
        decoys:["neccessary","necessery","nessecary"] }
    ]},
    { words: [
      { word:"separate", partOfSpeech:"verb",
        definition:"to keep apart or divided",
        sentence:"Please separate the red blocks from the blue ones.",
        decoys:["seperate","separrate","seperete"] },
      { word:"definitely", partOfSpeech:"adverb",
        definition:"without doubt; certainly",
        sentence:"We are definitely going to the park.",
        decoys:["definately","definatly","definetly"] },
      { word:"embarrass", partOfSpeech:"verb",
        definition:"to make someone feel shy or foolish",
        sentence:"Don't embarrass your little brother.",
        decoys:["embarass","embaress","imbarrass"] },
      { word:"occurrence", partOfSpeech:"noun",
        definition:"something that happens; an event",
        sentence:"A shooting star is a rare occurrence.",
        decoys:["occurence","occurrance","ocurrence"] },
      { word:"rhythm", partOfSpeech:"noun",
        definition:"a regular repeated pattern of sound or movement",
        sentence:"Clap along to the rhythm of the song.",
        decoys:["rythm","rhythem","rythem"] }
    ]}
  ]
};

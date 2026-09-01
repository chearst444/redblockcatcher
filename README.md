# Red Block Catcher

A browser vocabulary game starring the same friendly red block as
[Red Block Builder](https://github.com/chearst444/redblockbuilder).
Read a clue, then catch the **correctly spelled** word as it falls —
watch out for misspelled decoys mixed in.

Open `index.html` in a browser (or serve the folder) to play. No
build step, no dependencies.

## How to play

- A clue (definition + part of speech) is shown for a hidden word —
  the spelling itself isn't given, that's what you're catching.
- Words fall from the top. Move the red block with the ◀ ▶ buttons
  or the arrow keys to catch them.
- Catch the **correct spelling** 3 times to finish the word and move
  on. Catching a **misspelled decoy costs a life** (❤️❤️❤️ to start).
  Letting either kind fall past is free — no penalty for a miss.
- Run out of lives and the game restarts from the beginning after a
  friendly pause.

## Reusable, data-driven design

Like Spelling Stack in the builder repo, **all subject content lives
in one file, `catcher_words.js`** — the word, its part of speech,
definition, an example sentence, and a handful of misspelled decoys,
grouped into levels. `index.html` is a general-purpose "catch the
correct spelling, avoid the decoys" engine with no subject-specific
logic in it. Point it at a different data file (any list of
`{word, definition, decoys}` entries) and it plays a different
subject unchanged.

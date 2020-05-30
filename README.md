# wordsReader
![GitHub Releases](https://img.shields.io/github/downloads/PaulSmith220/wordsReader/v1.1.0_stable/total)
![GitHub](https://img.shields.io/github/license/PaulSmith220/wordsReader)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/PaulSmith220/wordsReader)
![GitHub issues](https://img.shields.io/github/issues/PaulSmith220/wordsReader)
![GitHub pull requests](https://img.shields.io/github/issues-pr/PaulSmith220/wordsReader)


An electron app that allows you to learn words by listening to original and translation with a correct pronunciation.

[🗄Download latest version (1.3.0)](https://github.com/PaulSmith220/wordsReader/releases/download/1.3.0/wordsReader-1.3.0.dmg)

![screenshot](screenshot.png)

## Usage
#### Loading words and choosing languages
1) Start from creating a text file with your words delimited by " - " symbol.
E.g "myWords.txt" with the following content:
```
to pick up - подбирать
to draw - рисовать
nightmare - кошмар
```
2) Open the app, click "Load words" button and select your file.
3) Now choose correct voices for your 2 languages on the top left in the "Voices" select-boxes. By default the app is using English -> Russian translations.
If you can't find the voice-pack for you language, please install it in "System Preferences" -> "Accessibility" -> "Speech" -> "System voice" of your Mac.
Your choice of file and voices will be saved and used next time you run the app.

#### Reading
The app allows you to run auto-reading mode or read words by selecting them manually. It remembers your last position and starts from it next time you start the app.

- To read a single word - just click on it.
- To read a sequence, select your desired starting line and click the "play" button. Click it again to stop at any time.

You can swap the direction of translation at any time - just click the swap button (to the left of "Play"). You can do it on-air during the sequence reading.

You can also choose from voice packs installed on your Mac to read different languages with different voices. You can install more languages & voice packs in "System Preferences" -> "Accessibility" -> "Speech" -> "System voice"

import React, { Component } from 'react'

class Translator extends Component {
    constructor(props) {
        super(props)
        this.state = {
          phrase: "",
          phraseTranslated:"",
        }
      }
    
      myPigLatinCodeHere = () => {
        let userInput = this.state.phrase.split(" ")
          console.log("userInput:", userInput)
    
        let translatedWordsArray = userInput.map(currentWord => {
        console.log("currentWord:", currentWord)
    
          let vowelsArray = currentWord.split("").filter((vowel) => {
            return vowel === "a" || vowel === "e" || vowel === "i" || vowel === "o" || vowel === "u"
          })
          console.log("vowelsArray:", vowelsArray)
    
          let sometimeY="y";
    
      
            let translation = (str) => {
              let currentWord = "";
            
            if (vowelsArray.indexOf(str[0]) > -1){
              currentWord = str + "way";
              return currentWord;
            } else if (currentWord.split("")[0] === sometimeY) {
              let vowel = str.indexOf(currentWord[1]);
              currentWord = str.substring(vowel) + str.substring(0,vowel) + "ay";
              return currentWord;
            } else if (str.slice(0,2) === "qu") {
              return str.slice(2) + str.slice(0,2) + "ay";
            } else{
              let firstMatch = str.match(/[aeiou]/g) || 0;
              let vowel = str.indexOf(firstMatch[0]);
              currentWord = str.substring(vowel) + str.substring(0, vowel) + "ay";
              return currentWord;
            }
          };
          console.log("translation", translation(""));
          console.log("userInput", translation(this.state.phrase));
          console.log("input translation", translation(this.state.phraseTranslated));
          return translation(currentWord)
        });
    
        let translatedWords = translatedWordsArray.join(" ")
        console.log("translatedWords:", translatedWords)
    
        this.setState({phraseTranslated: translatedWords})
      }
    
      restartGame = () => {
      
        this.setState({
          phrase: "alpha through yummy squeal queen fry",
          phraseTranslated: "This is where your translated sentence will appear."
        })
      }
    
      setUpPreventDefault = (e) => {
        e.preventDefault()
        this.myPigLatinCodeHere()
      }
    
      handleInput = (e) => {
        this.setState({phrase: e.target.value})
      }
    
  render() {
    return (
        <>
            <div className="inputArea">
            <h4>Enter phrase to be translated:</h4>
            {/* user input field - every DOM event that happens in the input will call the handleChange method and update state */}
            <input
                type="text"
                className="userInput"
                onChange={this.handleInput}
                value={this.state.phrase}
            />
            <br />
            {/* button that called the setUpPreventDefault method which calls the myPigLatinCodeHere method */}
            <button onClick={this.setUpPreventDefault}>Submit</button>
            <button onClick={this.restartGame}>Clear</button>
            </div>
            <div className="translation">
            <p className="latin">{this.state.phraseTranslated}</p>
            </div>
        </>
    )
  }
}

export default Translator
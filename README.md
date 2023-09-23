# Random-Paragraphs-generator

[Generate Lorem Ipsum](https://thriving-croquembouche-5e0c23.netlify.app/)

![Capture](https://github.com/IMAD-Majid/Random-Paragraphs-generator/assets/137281672/dc55d8c0-61e9-476d-ab55-e950b737b992)


# exe
  <style>
    * {
      font-family:sans-serif;
      color:white;
      background-color:black;
    }
    body{
      margin-top:4em;
    }
    button{
      padding:0.5em;
      border:2px solid grey;
      margin:2em 0;
    }
    footer{
      margin-top:12em;
    }
    a{
      display:block;
      color:grey;
      font-size:12px;
    }
  </style>
  <center>
  <div>
  <!--
  number of paragraphs
  number of sentences in a paragraph
    a comma between sentences
    a dot after 3-5 sentences
  number of words in a sentence
  number of letters in a word
    40% vowel, 60% consonant
  -->
  <table>
    <tr>
      <th>Paragraphs</th>
      <td>min <input min="0" max="128" id="pn" type="number"></td>
      <td>max <input min="0" max="128" id="pm" type="number"></td>
    </tr>
    <tr>
      <th>Sentences</th>
      <td>min <input min="0" max="128" id="sn" type="number"></td>
      <td>max <input min="0" max="128" id="sm" type="number"></td>
    </tr>
    <tr>
      <th>Words</th>
      <td>min <input min="0" max="128" id="wn" type="number"></td>
      <td>max <input min="0" max="128" id="wm" type="number"></td>
    </tr>
    <tr>
      <th>Letters</th>
      <td>min <input min="0" max="128" id="ln" type="number"></td>
      <td>max <input min="0" max="128" id="lm" type="number"></td>
    </tr>
  </table>
  </div>
  <button onclick="generate()">Generate</button>
  <div>
    <textarea id="output" readonly rows="20" cols="80"></textarea>
  </div>
  <footer>
    <a href="https://github.com/IMAD-Majid/Placeholder-Text-generator">Source</a>
    <a href="https://github.com/IMAD-Majid">by @IMAD-Majid</a>
  </footer>
<script src="main.js">
  
</script>

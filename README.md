# Flashcard-Generator - Triantafellu
Week 6 Homework Thursday Assignment

# Requirements
The npm modules required for this project are npm 'require' and npm 'inquirer' both have been provided for each application and can be found in the node modules folders.

# Purpose:
This app was designed to provide a flashcard system that could be read through the command line.  It pulls from either a Questions.js or QuestionsCloze.js file both of which have questions inside.  There are three essential options
- First option: Run.js
    - This file includes both the BasicCard and the ClozeCard files in one, its initial prompt asks the user which card system they would like to use
    - After selecting either the BasicCard or the ClozeCard follow the command prompts 

- Second option: BasicCard.js (in the BasicCard folder)
    - This file includes only the BasicCard setup
    - Meaning that it has option for the front of the card or the back of the card

- Third Option: ClozeCard.js (in the ClozeCard folder)
    - This file includes only the ClozeCard setup
    - Meaning:
        - It provides the question in close form
        - It provides the option to view the answer
        - It provides the option to view the full text

# Usage:
- First option: Run.js
    - First command prompt: Select either Basic or Cloze Card
        - Select: Basic
            - Next command prompt will be to choose which side of the card you wish to view
                - Front = question
                - Back = answer
            - If Front is selected a question will be provided, followed by an section for the user to input their answer
                - Entering the correct answer will show a confirmation
                - Entering the incorrect answer will provide a prompt to try again
            - If Back is selected the answer will be shown.
        - Select: Cloze
            - Next command prompt will be to choose one of three options
                - If question is selected a question will be provided, followed by an section for the user to input their answer
                    - Entering the correct answer will show a confirmation
                    - Entering the incorrect answer will provide a prompt to try again
                - If Answer is selected the answer will be shown.
                - If FullText is selected the question will be shown with the answer.

- Second option: Basic.js (in the BasicCard Folder)
    - This is the same as the above with no option for cloze cards.
    
    
- Third option: Cloze.js (in the ClozeCard Folder)
    - This is the same as the above with no option for basic cards.
    
# Future Development:
- Future development ideas include:
    - Run.js will pull from two separate .js files which house the basic and cloze card functions
    - Providing more questions and randomizing them.

# Author:
- Matt Triantafellu
- UCF Coding BootCamp Summer 2017
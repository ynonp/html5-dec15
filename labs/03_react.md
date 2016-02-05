# React Dynamic UI Lab

## The Task: Part 1

In the following lab we'll implement a dynamic widget based UI. The UI should provide:

1. A sidebar for selcting current "widget"
2. A button for creating a new "widget"
3. A main panel for the active "widget"

A widget can be any React component from a predefined list of supported widgets. It should provide a "name" property to show on the sidebar. 

When a user first clicks on the "New Widget" button a new blank widget is created. The blank widget is a form with inputs for "Widget Type" and "Widget Name" and a "Save" button. When the user clicks on "Save" the blank widget changes to the required widget type.

Supported Widget Types:

1. ClicksCounter - A widget showing a button and some text counting button clicks
2. SyncTextBoxes - A widget showing several input boxes, all showing the same text
(changing text in one box affects all of the boxes).
3. TimeConverter - A widget for converting time units (seconds/minutes/hours)
4. SimpleText - A widget for showing simple text

## The Task: Part 2

Modify the code you wrote in Part 1 to use Flux architecture.

## Starter

You can start with the start files here:
https://github.com/ynonp/html5-dec15/tree/master/14_starter_lab

## Bonuses

1. Add TicTacToe widget
2. Maintain widget's states between transitions (start to play a game of TicTacToe, then move to another widget and go back to TicTacToe should maintain its previous state).
3. Allow widgets to acceps parameters when created: When selecting a widget type in the blank widget form, the form should present "settings" specific to the selected widget type, which will be passed to it as properties when it is saved.
4. Add collaboration support (using socket.io)


## Technicals

In order to compile react code you can perform the following steps:

1. from "start" menu open "Node Command Prompt"
2. cd to the project directory
3. Only *once* per project: type `npm install`
4. Run `node node_modules\webpack\bin\webpack -d -w` to have webpack bundle your files and watch for changes




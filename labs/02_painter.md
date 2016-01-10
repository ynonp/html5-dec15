# Painter Lab

## DESCRIPTION - Part 1

In this lab we'll implement a collaborative painter program. The program should show a canvas on screen and let a user paint with mouse cursor.

Clicking on the canvas paints a point in that location, and dragging the mouse draws a line.

User should be able to clear screen using a "clear" button.

## Bonuses - Part 1

1. Allow user to select color
2. Allow user to save / restore photo
3. Allow user to draw "shapes" (selecting a shape from a sidebar)
4. Allow user to create new "shapes"
5. Allow multiple canvas

## Part 2 - Collaboration

Use the attached server.js file to add collaboration to the painter app:

1. Add socket.io script using:

        <script src="/socket.io/socket.io.js"></script>

2. Create initial connection from client javascript:

        var socket = io.connect('http://localhost:3100');

3. Send events to server using:

        var data = { x: 10, y: 20 };
        socket.emit('data', data);

The data in the above code is just an example. Use whatever data you need to send

4. Handle incoming server events:

        socket.on('data', function(data) {
            // now data is the object received from server
        });



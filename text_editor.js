var canvas = document.getElementById("myCanvas");
        var ctx = canvas.getContent("2d");
        var isDrawing = false;
        var textX, textY;
        var text = "";

        canvas.addEventListener("mousedown", function(e) {
            isDrawing = true;
            textX = e.offsetX;
            textY = e.offsetY;
        });

        canvas.addEventListener("mousemove", function() {
            isDrawing = false;
        });

        function setText() {
            text = document.getElementById("textInput").value;
        }

        function drawText() {
            ctx.clearRect(0,0, canvas.width, canvas.height);
            ctx.font = "20px Arial";
            ctx.fillStyle = "black";
            ctx.fillText(text, textX, textY);
        }
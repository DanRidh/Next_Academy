let input = document.getElementById("postInput");
let countLabel = document.getElementById("maxCount");

let randomIndex = (n) => Math.floor(Math.random() * n);


//textarea doesnt allow more than 180 characters, set maxlegnth as 280 in html
let limit = 180;
let inputLimit = (e) => {
    e.preventDefault();
    countLabel.innerText = limit - input.value.length;
}
input.addEventListener("keyup", inputLimit, false);


let tilts = ["left", "right", "normal"];
let colors = ["purple", "pink", "green"];
//template to generate new notes
let generateNote = (text, created, id) => {
    let randomColor = colors[randomIndex(colors.length)];
    let randomTilt = tilts[randomIndex(tilts.length)];
    return `
    <div class="col-md-3 d-flex align-items-stretch">
        <div class="card text-center m-3 pt-4 ${randomColor} ${randomTilt}">
            <div class="card-body overflow-auto" style="font-size: 20px;">
                <p>${text}</p>
            </div>
            <div class="card-footer text-muted">
            ${moment(created).format('MMMM D, YYYY - h:mmA')}
            </div>
            <button id="${id}" class="removeNote">X</button>
        </div>
    </div>    
    `
}


//displays all notes from API on page
$.ajax({
    method: 'get',
    url: 'https://next-message-board.herokuapp.com/messages',
    success: function(messages) {
        $('#boardRow').html('');
        messages.forEach(msg => {
        let randomColor = colors[randomIndex(colors.length)];
        let randomTilt = tilts[randomIndex(tilts.length)];
        $('#boardRow').append(`
        <div class="col-md-3 d-flex align-items-stretch">
            <div class="card text-center m-3 pt-4 ${randomColor} ${randomTilt}">
                <div class="card-body overflow-auto" style="font-size: 20px;">
                    <p>${msg.text}</p>
                </div>
                <div class="card-footer text-muted">
                ${moment(msg.created_at).format('MMMM D, YYYY - h:mmA')}
                </div>
                <button id="${msg.id}" class="removeNote">X</button>
            </div>
        </div>    
        `)
      })
    },
    beforeSend: function() {
        $('#boardRow').html(`<img src="https://cutewallpaper.org/21/loading-gif-transparent-background/Download-Loading-Gif-Generator-Transparent-Background-PNG-.gif" alt="loading...">`)
    }
})


//creates new note to display on page
$("#submitButton").on("click", function (e) {
    e.preventDefault();
    $.ajax({
        method: "post",
        url: "https://next-message-board.herokuapp.com/messages",
        data: {
            text: $('#postInput').val()
        },
        success: function(res) {
            console.log(res);
            $('#boardRow').prepend(generateNote(res.message.text, res.message.created_at, res.message.id));
        },
        beforeSend: function() {
            $("#submitButton").val("Posting Note...");
            $("#submitButton").prop("disabled", true);
        },
        complete: function() {
            $("#submitButton").val("Note Posted!");
            $("#submitButton").prop("disabled", false);
        }
    })
})


//delete a note
$("#boardRow").on("click", ".removeNote", function (e) {
    e.preventDefault();
    $.ajax({
        method: "post",
        url: `https://next-message-board.herokuapp.com/messages/delete/${e.currentTarget.id}`,
        success: function(res) {
            $(e.currentTarget).parent().parent().remove();
        },
        beforeSend: function() {
            $(e.currentTarget).prop("disabled", true);
            $(e.currentTarget).parent().parent().toggleClass("minimize");
        }
    })
})
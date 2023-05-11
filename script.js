const container = document.querySelector('#content');
const initialText = container.innerHTML;

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function home() {
    container.innerHTML = initialText;
}

function about() {

}

function help() {

}

function contact() {

}

function topic1 () {
    container.innerHTML = "<h2>This is for subtopic1</h2>" +
                          "<p>Placeholder text</p>"
}

function topic2() {
    container.innerHTML = "<h2> Subtopic 2 </h2>" +
                          "<p>Placeholder text2</p>"
}


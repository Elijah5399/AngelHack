const container = document.querySelector('#content');
const initialText = container.innerHTML;

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
                          "<p>Your mama so fat, running across her takes O(N!) time</p>"
}

function topic2() {
    container.innerHTML = "<h2> Subtopic 2 </h2>" +
                          "<p>Binary searching for the pancake in her belly button is already an O(N) operation</p>"
}
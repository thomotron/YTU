function process() {
    var input = document.getElementById("url").value;
    var id = "";
    if (input.match(/(((http|https):\/\/(www.)?)?youtube\.com\/watch\?v=)/gi)) {
        id = input.split(/(\?[A-Z]=)|\&/ig);
        document.getElementById("embed").src = 'https://www.youtube-nocookie.com/embed/'.concat(id[2],'?wmode=transparent&iv_load_policy=3&autoplay=1&html5=1&showinfo=0&rel=0&modestbranding=1&playsinline=1&color=orange');
    } else {
        alert("Are you sure that's a valid YouTube URL?\nTry again");
        location.reload();
    }
}
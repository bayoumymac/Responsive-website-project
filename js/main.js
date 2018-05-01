document.getElementById('menu-button').onclick = function () {
    if (document.getElementById('mobile-m').style.display === 'none') {
        document.getElementById('mobile-m').style.display = 'block';
    } else {
        document.getElementById('mobile-m').style.display = 'none';
    }
};

document.getElementById('close_icon').onclick = function () {
    document.getElementById('mobile-m').style.display = 'none';
};
var width = document.getElementById('first-pic').offsetWidth;
document.getElementById('left-button').onclick = function () {
    document.getElementById('carousal').scrollLeft -= width;
}
document.getElementById('right-button').onclick = function () {
    document.getElementById('carousal').scrollLeft += width;
}
function slideDown() {
    console.log('hi');
    var rect = document.getElementById('social2').getBoundingClientRect();
    scroll(rect.x, rect.y);
}

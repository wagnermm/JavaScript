const video = document.querySelector('#video');
const button = document.querySelector('#button').addEventListener('click', (event)=> {
    play(event)
})

document.querySelector('#btn-pause').style.display="none"

const play = (event)=> {
    if(video.paused) {
        document.querySelector('#btn-play').style.display="block"
        document.querySelector('#btn-pause').style.display="none"
        video.play()
    } else {
        document.querySelector('#btn-play').style.display="none"
        document.querySelector('#btn-pause').style.display="block"
        video.pause()
    } 
};
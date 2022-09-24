document.querySelector('.hamburg').addEventListener('click', toggleNav)
document.querySelector('.read-more').addEventListener('click', toggleSpan)

function toggleNav(){
    document.querySelector('.toggleNav').classList.toggle('hidden')
}

function toggleSpan(){
    document.querySelector('.togglespan').classList.toggle('hidden')
}


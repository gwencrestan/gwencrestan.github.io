const pages = document.querySelectorAll('.page')
const links = document.querySelectorAll('header nav a')

function setActiveLink() {
    let closestPage = null
    let closestDistance = Infinity

    const viewportCenter = window.innerHeight / 2

    pages.forEach(page => {
        const rect = page.getBoundingClientRect()
        const pageCenter = rect.top + rect.height / 2
        const distance = Math.abs(pageCenter - viewportCenter)

        if (distance < closestDistance) {
            closestDistance = distance
            closestPage = page
        }
    })

    if (closestPage) {
        links.forEach(link => link.classList.remove('active'))
        const link = document.querySelector(`header nav a[href*="${closestPage.id}"]`)
        if (link) link.classList.add('active')
    }
}

window.addEventListener('scroll', () => {
    requestAnimationFrame(setActiveLink)
})

window.addEventListener('resize', () => {
    requestAnimationFrame(setActiveLink)
})

// Initial run
setActiveLink()




function langChange() {
    d = document.getElementById("lang_toggle").value
    console.log(d)
}
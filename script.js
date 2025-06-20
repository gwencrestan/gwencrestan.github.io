const pages = document.querySelectorAll('.page')
const links = document.querySelectorAll('header nav a')

const observer = new IntersectionObserver((entries) => {
    let mostVisible = null
    let maxRatio = 0

    entries.forEach(entry => {
        if (entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio
            mostVisible = entry.target
        }
    })

    if (mostVisible) {
        // Remove active from all
        links.forEach(link => link.classList.remove('active'))

        // Add active to the matching link
        const link = document.querySelector(`header nav a[href*="${mostVisible.id}"]`)
        if (link) link.classList.add('active')
    }
}, {
    threshold: Array.from({ length: 101 }, (_, i) => i / 100)  // from 0 to 1 in 0.01 steps
})

// Observe each section
pages.forEach(page => observer.observe(page))



function langChange() {
    d = document.getElementById("lang_toggle").value
    console.log(d)
}
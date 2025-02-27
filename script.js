function toggleContent() {
    let visionContent = document.getElementById('vision-content');
    let missionContent = document.getElementById('mission-content');
    let toggleText = document.getElementById('toggle-text');
    let circle1 = document.getElementById('circle1');
    let circle2 = document.getElementById('circle2');

    if (toggleText.innerText === "Vision") {
        toggleText.innerText = "Mission";
        circle2.style.backgroundColor="navy";
        circle1.style.backgroundColor="gray";
        visionContent.classList.remove('active');
        missionContent.classList.add('active');
    } else {
        toggleText.innerText = "Vision";
        circle2.style.backgroundColor="gray";
        circle1.style.backgroundColor="navy";
        missionContent.classList.remove('active');
        visionContent.classList.add('active');
    }
}
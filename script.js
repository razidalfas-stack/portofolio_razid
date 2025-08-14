// Animasi Fade In untuk Projects
document.addEventListener("DOMContentLoaded", () => {
    const projects = document.querySelectorAll('.project');
    projects.forEach((project, index) => {
        project.style.opacity = "0";
        project.style.transform = "translateY(20px)";
        setTimeout(() => {
            project.style.transition = "0.6s ease";
            project.style.opacity = "1";
            project.style.transform = "translateY(0)";
        }, index * 200);
    });
});

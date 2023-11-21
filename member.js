function skillsMember() {
    var member = document.getElementById("member");
    var skills = document.getElementById("skills");
    var projects = document.getElementById("projects");
    var contact = document.getElementById("contact");
    var about = document.getElementById("about");
    var memberContent = document.getElementById("memberContent");
    var skillsContent = document.getElementById("skillsContent");
    var projectsContent = document.getElementById("projectsContent");
    var contactContent = document.getElementById("contactContent");
    var aboutContent = document.getElementById("aboutContent");
    member.classList.add("active");
    skills.classList.remove("active");
    projects.classList.remove("active");
    contact.classList.remove("active");
    about.classList.remove("active");
    memberContent.classList.remove("hide");
    skillsContent.classList.add("hide");
    projectsContent.classList.add("hide");
    contactContent.classList.add("hide");
    aboutContent.classList.add("hide");
}

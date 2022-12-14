const skills = [
    {id: 1, skill: "Typing", hardskill: true},
    {id: 2, skill: "Express", hardskill: true},
    {id: 3, skill: "Task Oriented", hardskill: false},
    {id: 4, skill: "JavaScript", hardskill: true},
    {id: 5, skill: "Communication", hardskill: false},
    {id: 6, skill: "Punctual", hardskill: false},
    {id: 7, skill: "Python", hardskill: true},
    {id: 8, skill: "Ruby", hardskill: true},
]



module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
}

function getAll() {
    return skills
}

function getOne(id) {
    id = parseInt(id)
    return skills.find(skill => skill.id === id)
}

function create(skill) {
    skill.id = Date.now() %1000000
    skill.hardskill = false
    skills.push(skill)
}

function deleteOne(id) {
    id = parseInt(id)
    const idx = skills.findIndex(skill => skill.id === id)
    skills.splice(idx, 1)
}
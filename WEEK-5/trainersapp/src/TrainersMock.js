import Trainer from "./trainer";

const trainers = [
    new Trainer(
        1,
        "John",
        "john@gmail.com",
        "9876543210",
        "Java",
        ["Java", "Spring Boot", "MySQL"]
    ),

    new Trainer(
        2,
        "Peter",
        "peter@gmail.com",
        "9876543211",
        "React",
        ["HTML", "CSS", "JavaScript", "React"]
    ),

    new Trainer(
        3,
        "David",
        "david@gmail.com",
        "9876543212",
        "Python",
        ["Python", "Django", "Machine Learning"]
    )
];

export default trainers;
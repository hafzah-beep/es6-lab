// Langkah 2: Konversi var ke let dan const
const appName = "ES6 Laboratory";
let score = 80;

score = 90;

console.log(`Nama aplikasi: ${appName}`);
console.log(`Nilai akhir: ${score}`);

// Langkah 3: Fungsi panah
const calculateGrade = (score) => {
  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else {
    return "D";
  }
};

console.log(`Grade: ${calculateGrade(score)}`);

// Langkah 4: Template literals
const studentName = "Andi";
const subject = "JavaScript";

const message = `Halo, nama saya ${studentName}. Saya sedang belajar ${subject}.`;
console.log(message);

// Langkah 5: Fitur ES6 Modern

// Destructuring
const student = {
  name: "Andi",
  major: "Informatika",
  semester: 4
};

const { name, major, semester } = student;

console.log(`Nama: ${name}`);
console.log(`Jurusan: ${major}`);
console.log(`Semester: ${semester}`);

// Spread operator
const basicSkills = ["HTML", "CSS"];
const advancedSkills = ["JavaScript", "React"];

const allSkills = [...basicSkills, ...advancedSkills];

console.log("Daftar skill:", allSkills);

// Default parameter
const greetStudent = (name = "Mahasiswa") => {
  return `Selamat datang, ${name}!`;
};

console.log(greetStudent());
console.log(greetStudent(studentName));

// Contoh penggunaan semua fitur
const createStudentProfile = ({ name, major, semester }, skills = []) => {
  return `
Profil Mahasiswa:
Nama: ${name}
Jurusan: ${major}
Semester: ${semester}
Skill: ${skills.join(", ")}
`;
};

console.log(createStudentProfile(student, allSkills));
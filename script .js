const students = {
  "D001": { name: "KADAM SNEHAL SNEHAL", class: "11th", roll: "D001", marks: 50, rank: 1 },
  "D002": { name: "MORE RUSHIKESH KANTILAL", class: "11th", roll: "D002", marks: 17, rank: 33 },
  "D003": { name: "KADAM DNYANESHWARI SANDIP", class: "11th", roll: "D003", marks: 49, rank: 4 },
  "D004": { name: "MADHWAI SIDDHI BHAUSAHEB", class: "11th", roll: "D004", marks: 49, rank: 4 },
  "D005": { name: "HARKAL ASMITA SANDIP", class: "11th", roll: "D005", marks: 24, rank: 26 },
  "D006": { name: "KADAM JIDNYASA DNYANESHWAR", class: "11th", roll: "D006", marks: 49, rank: 4 },
  "D007": { name: "PAGAR HARSHAD ASHOK", class: "11th", roll: "D007", marks: 16, rank: 35 },
  "D008": { name: "KHANDEKAR GAURAV BHALCHANDRA", class: "11th", roll: "D008", marks: 8, rank: 43 },
  "D009": { name: "GITE BHUSHAN SHARAD", class: "11th", roll: "D009", marks: 4, rank: 44 },
  "D010": { name: "KADAM TANVI SAMADHAN", class: "11th", roll: "D010", marks: 50, rank: 1 },
  "D011": { name: "GITE SAIRAJ RAVSAHEB", class: "11th", roll: "D011", marks: 11, rank: 40 },
  "D012": { name: "GHANGHAV PRADNYA NARAYAN", class: "11th", roll: "D012", marks: 50, rank: 1 },
  "D013": { name: "KALE SARTHAK VALMIK", class: "11th", roll: "D013", marks: 30, rank: 20 },
  "D014": { name: "GHANGHAV SOHAM SANDIP", class: "11th", roll: "D014", marks: 45, rank: 7 },
  "D015": { name: "KADAM SAMIKSHA DATTATRAY", class: "11th", roll: "D015", marks: 47, rank: 6 },
  "D016": { name: "THAKARE OM DNYANESHWAR", class: "11th", roll: "D016", marks: 15, rank: 37 },
  "D017": { name: "BHOKNAL ADESH ATMARAM", class: "11th", roll: "D017", marks: 50, rank: 1 },
  "D018": { name: "KADAM SHIVAM ASHOK", class: "11th", roll: "D018", marks: 11, rank: 40 },
  "D019": { name: "GORDE PREM SAMADHAN", class: "11th", roll: "D019", marks: 12, rank: 39 },
  "D020": { name: "AHER OM DATTATRAY", class: "11th", roll: "D020", marks: 8, rank: 43 },
  "D021": { name: "GANGURDE AADESH SANTOSH", class: "11th", roll: "D021", marks: 28, rank: 22 },
  "D022": { name: "PIMPARKAR VAISHNAVI S.", class: "11th", roll: "D022", marks: 49, rank: 4 },
  "D023": { name: "KADAM VAISHNAVI ARJUN", class: "11th", roll: "D023", marks: 50, rank: 1 },
  "D024": { name: "JADHAV DARSHAN BALU", class: "11th", roll: "D024", marks: 26, rank: 24 },
  "D025": { name: "GAIKWAD SUJIT DATTATRAY", class: "11th", roll: "D025", marks: 9, rank: 42 },
  "D026": { name: "GADHE SURAJ ANNA", class: "11th", roll: "D026", marks: 13, rank: 38 },
  "D027": { name: "GANGURDE PRATHMESH KAILAS", class: "11th", roll: "D027", marks: 15, rank: 37 },
  "D028": { name: "GANGURDE SAI PAPPU", class: "11th", roll: "D028", marks: 12, rank: 39 },
  "D029": { name: "KASEKAR JAYDIP VIJAY", class: "11th", roll: "D029", marks: 33, rank: 15 },
  "D030": { name: "SHAIKH TAHIR TAIGGAB", class: "11th", roll: "D030", marks: 44, rank: 8 },
  "D031": { name: "GANGURDE PRATHMESH NAVNATH", class: "11th", roll: "D031", marks: 26, rank: 24 },
  "D032": { name: "WAKCHOURE RUTIK NANDU", class: "11th", roll: "D032", marks: 10, rank: 41 },
  "D033": { name: "THAKARE SAMIR BALU", class: "11th", roll: "D033", marks: 40, rank: 10 },
  "D034": { name: "PATHARE PANKAJ BHAUSAHEB", class: "11th", roll: "D034", marks: 10, rank: 41 },
  "D035": { name: "KADAM MANOJ GANESH", class: "11th", roll: "D035", marks: 16, rank: 35 },
  "D036": { name: "WAKCHOURE OM SURYAKANT", class: "11th", roll: "D036", marks: 12, rank: 39 },
  "D037": { name: "GANGURDE ROSHAN SANTOSH", class: "11th", roll: "D037", marks: 20, rank: 29 },
  "D038": { name: "GHOLAP SIDDESH BHARAT", class: "11th", roll: "D038", marks: 26, rank: 24 },
  "D039": { name: "GANGURDE ADITY RAMNATH", class: "11th", roll: "D039", marks: 22, rank: 27 },
  "D040": { name: "AJAGE VAISHNAVI TULSIRAM", class: "11th", roll: "D040", marks: 21, rank: 28 },
  "D041": { name: "SHINDE ASHWINI", class: "11th", roll: "D041", marks: 0, rank: "-" },
  "D042": { name: "KURHE OM ANIL", class: "11th", roll: "D042", marks: 26, rank: 24 },
  "D043": { name: "NIKAM PRATIKSHA SANTOSH", class: "11th", roll: "D043", marks: 30, rank: 20 },
  "D044": { name: "PAWAR SAKSHI", class: "11th", roll: "D044", marks: 0, rank: "-" }
};

function showResult() {
  const seat = document.getElementById("seatInput").value.trim().toUpperCase();
  const data = students[seat];
  
  if (data) {
    document.getElementById("result-section").classList.remove("hidden");
    document.getElementById("studentName").textContent = data.name;
    document.getElementById("studentClass").textContent = data.class;
    document.getElementById("studentRoll").textContent = data.roll;
    
    const percentage = ((data.marks / 50) * 100).toFixed(2);
    document.getElementById("resultTable").innerHTML = `
      <tr>
        <td>Physics</td>
        <td>${data.marks}</td>
        <td>50</td>
        <td>${percentage}%</td>
        <td>${data.rank}</td>
      </tr>
    `;
  } else {
    alert("Seat number सापडला नाही. कृपया योग्य नंबर टाका (उदा. D001)");
  }
}

// ---- Result Published Date & Time ----
const now = new Date();
const options = { 
  year: 'numeric', 
  month: 'long', 
  day: 'numeric', 
  hour: '2-digit', 
  minute: '2-digit'
};
document.getElementById("result-published").innerText =
  "Result Published on: " + now.toLocaleString("en-IN", options);
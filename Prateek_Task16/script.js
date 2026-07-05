const students = [
    {
        name: "Salmaan Ahmed",
        marks: 38,
        class: "3rd",
        address: "India"
    },
    {
        name: "Rahul Sharma",
        marks: 76,
        class: "5th",
        address: "Delhi"
    },
    {
        name: "Ayesha Khan",
        marks: 84,
        class: "4th",
        address: "Mumbai"
    },
    {
        name: "Rohan Verma",
        marks: 67,
        class: "6th",
        address: "Jaipur"
    },
    {
        name: "Priya Singh",
        marks: 91,
        class: "7th",
        address: "Lucknow"
    },
    {
        name: "Arjun Mehta",
        marks: 55,
        class: "5th",
        address: "Pune"
    },
    {
        name: "Neha Gupta",
        marks: 73,
        class: "4th",
        address: "Chandigarh"
    },
    {
        name: "Kabir Malhotra",
        marks: 88,
        class: "8th",
        address: "Delhi"
    },
    {
        name: "Sneha Patel",
        marks: 62,
        class: "6th",
        address: "Ahmedabad"
    },
    {
        name: "Aditya Rao",
        marks: 79,
        class: "7th",
        address: "Bengaluru"
    },
    {
        name: "Ananya Joshi",
        marks: 86,
        class: "8th",
        address: "Pune"
    },
    {
        name: "Vikram Singh",
        marks: 48,
        class: "3rd",
        address: "Delhi"
    },
    {
        name: "Meera Nair",
        marks: 92,
        class: "9th",
        address: "Kochi"
    },
    {
        name: "Karan Kapoor",
        marks: 64,
        class: "6th",
        address: "Mumbai"
    },
    {
        name: "Ishita Das",
        marks: 81,
        class: "7th",
        address: "Kolkata"
    },
    {
        name: "Dev Patel",
        marks: 59,
        class: "5th",
        address: "Surat"
    },
    {
        name: "Riya Choudhary",
        marks: 74,
        class: "8th",
        address: "Jaipur"
    },
    {
        name: "Aryan Mishra",
        marks: 69,
        class: "6th",
        address: "Bhopal"
    },
    {
        name: "Simran Kaur",
        marks: 89,
        class: "9th",
        address: "Amritsar"
    },
    {
        name: "Nikhil Yadav",
        marks: 53,
        class: "4th",
        address: "Noida"
    },
    {
        name: "Pooja Iyer",
        marks: 95,
        class: "10th",
        address: "Chennai"
    },
    {
        name: "Manav Bansal",
        marks: 71,
        class: "7th",
        address: "Gurugram"
    },
    {
        name: "Tanya Saxena",
        marks: 83,
        class: "8th",
        address: "Kanpur"
    },
    {
        name: "Harsh Vardhan",
        marks: 44,
        class: "3rd",
        address: "Patna"
    },
    {
        name: "Sakshi Jain",
        marks: 78,
        class: "6th",
        address: "Indore"
    },
    {
        name: "Yash Thakur",
        marks: 66,
        class: "5th",
        address: "Shimla"
    },
    {
        name: "Muskan Ali",
        marks: 87,
        class: "9th",
        address: "Hyderabad"
    },
    {
        name: "Varun Khanna",
        marks: 57,
        class: "4th",
        address: "Delhi"
    },
    {
        name: "Naina Roy",
        marks: 93,
        class: "10th",
        address: "Kolkata"
    },
    {
        name: "Aman Tiwari",
        marks: 61,
        class: "6th",
        address: "Prayagraj"
    },
    {
        name: "Shruti Menon",
        marks: 85,
        class: "8th",
        address: "Kochi"
    },
    {
        name: "Raj Malhotra",
        marks: 49,
        class: "3rd",
        address: "Chandigarh"
    },
    {
        name: "Diya Sharma",
        marks: 90,
        class: "9th",
        address: "Delhi"
    },
    {
        name: "Siddharth Jain",
        marks: 72,
        class: "7th",
        address: "Indore"
    },
    {
        name: "Kavya Reddy",
        marks: 96,
        class: "10th",
        address: "Hyderabad"
    },
    {
        name: "Mohit Agarwal",
        marks: 58,
        class: "5th",
        address: "Agra"
    },
    {
        name: "Zoya Khan",
        marks: 82,
        class: "8th",
        address: "Mumbai"
    },
    {
        name: "Abhinav Sinha",
        marks: 68,
        class: "6th",
        address: "Patna"
    },
    {
        name: "Palak Arora",
        marks: 77,
        class: "7th",
        address: "Ludhiana"
    },
    {
        name: "Rishabh Gupta",
        marks: 54,
        class: "4th",
        address: "Noida"
    }
];
//Show all cards

const container= document.querySelector(".cards-container");

function showUsers(arr){
    container.innerHTML = "";
    const cards = arr.map(function(student){
        const card = document.createElement("div");
        card.classList.add("card");
        const p1 = document.createElement("p");
        p1.innerHTML = `Student Name: <span>${student.name}</span>`;
        const p2 = document.createElement("p");
        p2.innerHTML = `Marks: <span>${student.marks}%</span>`;
        const p3 = document.createElement("p");
        p3.innerHTML = `Class: <span>${student.class}</span>`;
        const p4 = document.createElement("p");
        p4.innerHTML = `Address: <span>${student.address}</span>`;
        card.appendChild(p1);
        card.appendChild(p2);
        card.appendChild(p3);
        card.appendChild(p4);
        return card;
    });
    cards.forEach(function(card){
        container.appendChild(card);
    });
}
showUsers(students);

//filter cards

let btn=document.querySelector("#button");
btn.addEventListener("click", function(){
    let inp=document.querySelector(".inp")
    let showname=document.querySelector(".search-name");
    const h2=document.createElement("h2");
    h2.innerHTML=`Search Results for ${inp.value}....`;
    showname.innerHTML="";
    showname.appendChild(h2);
    showname.style.display="block";
    let newUsers= students.filter((user)=>{
        return user.name.toLowerCase().startsWith(inp.value.toLowerCase());
    });
    showUsers(newUsers);
    let noRecords=document.querySelector("#noRecords");
    if(newUsers.length === 0){
        noRecords.style.display = "block";
    }
    else{
        noRecords.style.display = "none";
    }
});
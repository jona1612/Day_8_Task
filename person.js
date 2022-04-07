class person {

    constructor(Name, Father_Name, Gender, Age, Address, Mobile_No, Email, Graduation, Collage) {
        this.Name = Name;
        this.Father_Name = Father_Name;
        this.Gender = Gender;
        this.Age = Age
        this.Address = Address;
        this.Mobile_No = Mobile_No;;
        this.Email = Email;
        this.Graduation = Graduation;
        this.Collage = Collage;

    }
    person_name() {
        return `Name : ${this.Name}`;
    }
    person_father_name() {
        return `Father Name : ${this.Father_Name}`;
    }
    person_gender() {
        return `Gender : ${this.Gender}`;
    }
    person_age() {
        return `Age : ${this.Age}`;
    }
    person_address() {
        return `Address : ${this.Address}`;
    }
    person_mobile_no() {
        return `Contact No : ${this.Mobile_No}`;
    }
    person_Email() {
        return `Email id : ${this.Email}`;
    }
    person_Graduation() {
        return `Completed : ${this.Graduation
            }`;
    }
    person_Collage() {
        return `Graduated at : ${this.Collage}`;
    }
}

const person_obj = new person("Jonathan", "Pannerselvam", "Male", "26", "Chennai", "1234567890", "jonathan16official@gmail.com",
    "BCA", "DB Jain Collage");
console.log(person_obj.person_name());
console.log(person_obj.person_father_name());
console.log(person_obj.person_gender());
console.log(person_obj.person_age());
console.log(person_obj.person_address());
console.log(person_obj.person_mobile_no());
console.log(person_obj.person_Email());
console.log(person_obj.person_Graduation());
console.log(person_obj.person_Collage());
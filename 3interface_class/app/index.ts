interface Person {
    firstname: string;
    lastname: string;
    getInfo(): string;
}

interface Teacher extends Person {
		subject : string
}

class ImpPerson implements Teacher {
	public firstname: string;
  public lastname: string;
  public subject: string;
  private weight: number;
  private height: number;

	constructor(firstname, lastname, height, weight, subject ) {
		this.firstname = firstname;
		this.lastname = lastname;
		this.height = height;
		this.weight = weight;
		this.subject = subject
	}

	getInfo() : string {
		var info: string;
		info = "name : " + this.combineName() + "<br>"
			+ "height : " + this.height + "<br>"
			+ "weight : " + this.weight + "<br>";

		return info
	}

	private combineName():string {
		return this.firstname + " " + this.lastname;
	}
}

var user: Person = new ImpPerson("Huang", "Miya", 170, 70, "CS");

document.body.innerHTML = user.getInfo();



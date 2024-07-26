export default function createIteratorObject(report) {
	  let allEmployees = [];
	  
	  for (const department in report.allEmployees) {
		      allEmployees = [...allEmployees, ...report.allEmployees[department]];
		    }

	  return allEmployees[Symbol.iterator]();
}


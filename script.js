function createTable() {
    //Write your code here
	const tabel= document.getElementById("myTable")
	const x = prompt("Input number of rows");
	const y = prompt("Input number of columns");
	
	for(let i = 0;i<x;i++){
		const row = document.createElement('tr');
		for(let j = 0;j<y;j++){
			const tdata = document.createElement("td");
			tdata.innerText = `Row-${i} Column-${j}`;
			row.appendChild(tdata);
		}
		tabel.appendChild(row);
	}
  
}

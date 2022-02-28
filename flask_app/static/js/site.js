
function getUsers(){
    fetch('http://127.0.0.1:5000/users')
        .then(res =>  res.json())
        .then(data => {
            var users = document.getElementById('users');
            users.innerHTML=' '
            console.log(users)
            for( let i = 0; i < data.length; i++){
                let row = document.createElement('tr');

                let name = document.createElement('td');
                name.innerHTML = data[i].user_name;
                row.appendChild(name);
                
                let email = document.createElement('td');
                email.innerHTML = data[i].email;
                row.appendChild(email);
                users.appendChild(row);
                console.log(users)
            }
        })

}

var myForm = document.getElementById('myForm');
    myForm.onsubmit = function(e){
        e.preventDefault();
        var form = new FormData(myForm);
        console.log(form.get('user_name'))
        // this how we set up a post request and send the form data.
        fetch("http://127.0.0.1:5000/create/user", { method :'POST', body : form})
            .then( response => response.json() )
            .then( data => console.log(data) )
        var users = document.getElementById('users');
        let row = document.createElement('tr');
                let name = document.createElement('td');
                name.innerHTML = form.get('user_name');
                row.appendChild(name);
                
                let email = document.createElement('td');
                email.innerHTML = form.get('email');
                row.appendChild(email);
                users.appendChild(row);
                console.log(users)


    }



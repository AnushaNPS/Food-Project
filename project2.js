function showSidebar(event) {
    event.preventDefault(); // Prevent the default link action
    const sidebar = document.querySelector('.sidebar');
    if (sidebar) {
        sidebar.style.display = 'flex';
    } else {
        console.error("Sidebar element with class '.sidebar' not found.");
    }
}

function hideSidebar(event) {
    event.preventDefault(); // Prevent the default link action
    const sidebar = document.querySelector('.sidebar');
    if (sidebar) {
        sidebar.style.display = 'none';
    } else {
        console.error("Sidebar element with class '.sidebar' not found.");
    }
}



const search = () =>{
    const searchbox=document.getElementById("search-item").value.toUpperCase();
    const storeitem=document.getElementById("item")
    const product=document.querySelectorAll(".food-list")
    const pname=document.getElementsByTagName("h1")
  
    for(var i=0; i<pname.length; i++){
        let match = product[i].getElementsByTagName('h1')[0];

        if(match){
           let textvalue= match.textContent || match.innerHTML

           if(textvalue.toUpperCase().indexOf(searchbox)>-1){
            product[i].style.display="";
           }else{
            product[i].style.display="none";
           }
        }
    }
}


// login
const form=document.getElementById('login-form');
const email=document.getElementById('email');
const password=document.getElementById('password');

form.addEventListener('submit',function(event){
    event.preventDefault();

    const validCredentials=[
        { email :'email1',password:'pass1'},
        { email :'email2',password:'pass2'}
    ];

    for (const credential of validCredentials){
        if (credential.email === email?.value && credential.password === password?.value) {
            window.location.href='project2.html';
        }else{
            alert('Invalid email or password');
        }
        }
});


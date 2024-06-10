
        const sign = document.getElementById("signin")
        const signup = document.getElementById("signup")
        function reset(){
            document.getElementById('form').reset();
        }
        function log() {
            sign.style.display = "block"
            sign.style.justifyContent = "center"
        }
        function clos() {
            sign.style.display = "none"
        }
        function up() {
            signup.style.display = "block"
        }
        function down() {
            signup.style.display = "none"
        }


        /*   store values   */

        function savedata() {
            let fname, lname, email, password, phoneno,  nation, gender;
            fname = document.getElementById('firstname').value;
            lname = document.getElementById('lastname').value;
            email = document.getElementById('email').value;
            phoneno = document.getElementById('phoneno').value;
            password = document.getElementById('password').value;
            gender = document.getElementsByName('gender').value;
            nation = document.getElementById('nation').value;

            localStorage.setItem('firstname', fname);
            localStorage.setItem('lastname', lname);
            localStorage.setItem('usermail', email);
            localStorage.setItem('phoneno', phoneno);
            localStorage.setItem('userpassword', password);
            localStorage.setItem('Natinality', nation);



        }

        function getdata() {
            let email, password;
            email = document.getElementById('emailadd').value;
            password = document.getElementById('pwd').value;


            let getmail, getpassword;
            getmail = localStorage.getItem('usermail');
            getpassword = localStorage.getItem('userpassword')

            if (email === getmail) {
                if (password === getpassword) {
                    alert("login successful")
                } else {
                    alert("password is worng")
                }
            } else {
                alert("mail id is wrong")
            }

        }

        /*   store values   */

        /* validation */
        const form = document.getElementById('form');
        const firstname = document.getElementById('firstname');
        const lastname = document.getElementById('lastname')
        const email = document.getElementById('email');
        const password = document.getElementById('password');
        const confirmPassword = document.getElementById('cpassword');
        const gender = document.getElementsByName('gender');
        const phonenumber = document.getElementById('phoneno');
        const nation = document.getElementById('nation');
        const confirmPasswordFeedback = document.getElementById('confirm-password-feedback');
        form.addEventListener('submit', function (event) {
            event.preventDefault();
            let isValid = true;
            validateInputs();
            
        });
        function validateInputs() {
            if (!firstname.validity.valid) {
                firstname.classList.add('is-invalid');
                firstname.focus();
                isvalid = false;
            } else {
                firstname.classList.remove('is-invalid');
            }

            if (!lastname.validity.valid) {
                lastname.classList.add('is-invalid');
                isvalid = false;
            }else {
                lastname.classList.remove('is-invalid');
            }

            let genderchose = false;
            for (const g of gender) {
                if (g.checked) {
                    genderchose = true;
                    break;
                }
            }
            if (!genderchose) {
                gender[0].classList.add('is-invalid');
                gender[1].classList.add('is-invalid');
                isValid = false;
            } else {
                gender[0].classList.remove('is-invalid');
                gender[1].classList.remove('is-invalid');
            }




            if (!nation.validity.valid) {
                nation.classList.add('is-invalid');
                isvalid = false;
            } else {
                nation.classList.remove('is-invalid');
            }

            if (!phonenumber.validity.valid) {
                phonenumber.classList.add('is-invalid');
                isValid = false;
            } else {
                phonenumber.classList.remove('is-invalid');
            }

            if (!email.validity.valid) {
                email.classList.add('is-invalid');
                isvalid = false;
            } else {
                email.classList.remove('is-invalid');
            }

            if (!password.validity.valid) {
                password.classList.add('is-invalid');
                isvalid = false;
            } else {
                password.classList.remove('is-invalid');
            }

            if (confirmPassword.value !== password.value) {
                confirmPassword.classList.add('is-invalid');
                confirmPasswordFeedback.textContent = 'Password do not match';
                isvalid = false;
            } {
                confirmPassword.classList.remove('is-invalid');
                confirmPasswordFeedback.textContent = '';
            }

            
        }
      

        firstname.addEventListener('input', () => firstname.classList.remove('is-invalid'));
        lastname.addEventListener('input', () => lastname.classList.remove('is-invalid'));
        gender.forEach(g => g.addEventListener('change', () => {
            gender[0].classList.remove('is-invalid');
            gender[1].classList.remove('is-invalid');
        }));
        nation.addEventListener('input', () => nation.classList.remove('is-invalid'));
        phonenumber.addEventListener('input', () => phonenumber.classList.remove('is-invalid'));


        
        email.addEventListener('input', () => email.classList.remove('is-invalid'));

        password.addEventListener('input', () => password.classList.remove('is-invalid'));
        confirmPassword.addEventListener('input', () => {
            confirmPassword.classList.remove('is-invalid');
            confirmPasswordFeedback.textContent = '';
        });
        /* validation */


     /* Add to cart */

    document.addEventListener('DOMContentLoaded', function () {
    const cartItems = [];
    const addToCartButtons = document.querySelectorAll('.addcart');
    const cartNav = document.getElementById('cartNav');
    const cartSidebar = document.getElementById('cartSidebar');
    const cartItemsList = document.getElementById('cartItems');
    const totalAmount = document.getElementById('totalAmount');
    const closeCart = document.querySelector('.close-cart');


    addToCartButtons.forEach(button => {
        button.addEventListener('click', function () {
            const card = this.closest('.card');
            const itemName = card.querySelector('.card-titile').textContent.trim();
            const itemPrice = parseInt(card.querySelector('.card-text').textContent.trim().split(' ')[0]);
            const itemImgSrc = card.querySelector('img').src;


            const addItem = cartItems.find(cartItem => cartItem.name === itemName);
                if (addItem) {
                    addItem.quantity += 1; 
                } else {
                    cartItems.push({ name: itemName, price: itemPrice, imgSrc: itemImgSrc, quantity: 1 });
                }
                updateCart();
                cartSidebar.style.width = '350px';
        });
    });

    cartNav.addEventListener('click', function () {
        cartSidebar.style.width = '300px';
    });

    closeCart.addEventListener('click', function () {
        cartSidebar.style.width = '0';
    });

    window.addEventListener('click', function (event) {
        if (event.target === cartSidebar) {
            cartSidebar.style.width = '0';
        }
    });

    function updateCart() {
        cartItemsList.innerHTML = '';
        let total = 0;
        cartItems.forEach(item => {
            const li = document.createElement('li');
            const img = document.createElement('img');
            img.src = item.imgSrc;

            const text = document.createElement('span');
            text.textContent = item.name+" Rs-"+item.price+" Quantity -"+item.quantity;

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Remove';
            deleteBtn.style.height='30px'
            deleteBtn.className = 'btn btn-danger btn-sm';
            deleteBtn.addEventListener('click', () => {
                const index = cartItems.indexOf(item);
                cartItems.splice(index, 1);
                updateCart();
            });
    
                const increaseBtn = document.createElement('button');
                increaseBtn.style.height='30px'
                increaseBtn.textContent = '+';
                increaseBtn.className = 'btn btn-success btn-sm mx-1';
                increaseBtn.addEventListener('click', () => {
                    item.quantity++;
                    updateCart();
                });
    
                const decreaseBtn = document.createElement('button');
                decreaseBtn.style.height='30px'
                decreaseBtn.textContent = '-';
                decreaseBtn.className = 'btn btn-danger btn-sm mx-1';
                decreaseBtn.addEventListener('click', () => {
                    if (item.quantity > 1) {
                        item.quantity--;
                        updateCart();
                    }
                });
    

            li.appendChild(img);
            li.appendChild(text);
            li.appendChild(deleteBtn);
            li.appendChild(increaseBtn);
            li.appendChild(decreaseBtn);
            cartItemsList.appendChild(li);

            total += item.price * item.quantity;
        });
        totalAmount.textContent = total;
    }
});

/* Add to cart  */

/* details */
const detailsButtons = document.querySelectorAll('.details');
const modalItemName = document.getElementById('modalItemName');
const modalItemPrice = document.getElementById('modalItemPrice');
const modalItemDesc = document.getElementById('modalItemDesc');
const modalimage=document.querySelector('.modalimg')

detailsButtons.forEach(button => {
    button.addEventListener('click', function () {
        
        const itemName = this.getAttribute('data-name');
        const itemPrice = this.getAttribute('data-price');
        const itemDesc = this.getAttribute('data-desc');
        const itemimg=this.getAttribute('data-img')
      
        
        modalItemName.textContent = itemName;
        modalItemPrice.textContent = itemPrice;
        modalItemDesc.textContent = itemDesc;
        
        modalimage.innerHTML='';
        const imgelement=document.createElement('img');
        imgelement.src=itemimg;
        imgelement.style.width='200px';
        imgelement.style.height='200px';

        modalimage.appendChild(imgelement);
    });
});
/* details */


   

    /* Search */
    document.addEventListener('DOMContentLoaded',()=>{
        const searchinput=document.getElementById('searchInput');
        const cards=document.querySelectorAll('.card');

        searchinput.addEventListener('input',()=>{
            const searchitem=searchinput.value.toLowerCase();
            cards.forEach(card =>{
                const cardname=card.getAttribute('data-name').toLowerCase();
                if(searchitem === ''){
                    card.parentElement.style.display='block';
                }else if(cardname.includes(searchitem)){
                    card.parentElement.style.display='block';
                }else{
                    card.parentElement.style.display='none';
                }

            })
        })

    })

    /* Search */


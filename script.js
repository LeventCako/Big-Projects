


const myInput = document.getElementById('Input-Field');

const CountChar = document.getElementById('Count-Char');
const CountWords = document.getElementById('Count-Words');

const CountBoth = document.getElementById('Count-Both');

const Result = document.createElement('p');
Result.classList.add('Result');
Result.innerHTML = `Enter a Sentence...`;
document.body.append(Result);


CountChar.addEventListener('click', () => {

    let CharacterCount = myInput.value.length;

    Result.innerHTML = `This Sentence has ${CharacterCount} Character`
})


CountWords.addEventListener('click', () => {
    const inputWords = myInput.value.trim();

    const wordCount = inputWords.split(/\s+/).length;

    Result.innerHTML = `This Sentence has ${wordCount} Words`;
})

const DeleteTextButton = document.querySelector('.DeleteText');
DeleteTextButton.addEventListener('click', () => {
    myInput.value = '';
    Result.innerHTML = 'Enter a Sentence...';
})

CountBoth.addEventListener('click', () => {


    const CharacterCount = myInput.value.length;
    const inputWords = myInput.value.trim();

   const  wordCount = inputWords.split(/\s+/).length;


    Result.innerHTML = `This Sentence has ${CharacterCount} Character/s and ${wordCount} Words`




})



/* Login Button Functionality */

const LoginButton = document.getElementById('LoginButton');

LoginButton.addEventListener('click', () => {
    const LoginDiv = document.createElement('div');
    LoginDiv.classList.add('LoginDiv');
    document.body.append(LoginDiv);

    const LoginTitle = document.createElement('h1');
    LoginTitle.innerHTML = 'Login';
    LoginTitle.classList.add('LoginTitle');
    LoginDiv.appendChild(LoginTitle);

    const LoginUserName = document.createElement('input');
    LoginUserName.placeholder = 'Enter Username';
    LoginUserName.classList.add('LoginUserName');
    LoginDiv.appendChild(LoginUserName);

    const LoginPassword = document.createElement('input');
    LoginPassword.placeholder = 'Enter Password';
    LoginPassword.type = 'password';
    LoginPassword.classList.add('LoginPassword');
    LoginDiv.appendChild(LoginPassword);

     const LoginSubmitButton = document.createElement('button');
    LoginSubmitButton.innerHTML = 'Login';
    LoginSubmitButton.classList.add('LoginSubmitButton');
    LoginDiv.appendChild(LoginSubmitButton);

    const BodyContent = document.getElementById('BodyContent');
    BodyContent.classList.add('BodyContent');


    LoginButton.remove();


    /* Here we make that 
    the username will show on the rihgt side
    of the screen
    when clicking login */


    LoginSubmitButton.addEventListener('click', () => {
        let Username = LoginUserName.value;
        LoginDiv.remove()
        const BodyContentAfter = document.getElementById('BodyContent');
        BodyContentAfter.classList.add('BodyContentAfter');

      

        if(Username.length > 11) {
            alert('Username cant be longer than 11 characters...try again');
           
             location.reload(); 
        }
        let UserProfile = document.createElement('button');
        UserProfile.classList.add('UserProfile');
        UserProfile.innerHTML = `${Username}`;
        document.body.append(UserProfile);

        /* Here we make that the Username
        cant be longer than 12 characters */

       

       function toggleDropdown () {
        let dropdownContent = document.getElementById('myDropdown');
        dropdownContent.classList.toggle('show');
       }
    
       UserProfile.addEventListener('click', () => {
        const SignOutBtn = document.getElementById('SignOutBtn');
        const ContactMeBtn = document.getElementById('ContactMeBtn');
        const SettingsBtn = document.getElementById('SettingsBtn');

        const ReturnBtn = document.createElement('button');
        ReturnBtn.classList.add('ReturnBtn');
        ReturnBtn.innerHTML = 'X';
      

        UserProfile.classList.add('DropButton');
        toggleDropdown();
        let dropdownContent = document.getElementById('myDropdown');
        dropdownContent.appendChild(ReturnBtn);
        
          /* Update content based on Selected option */

          ReturnBtn.addEventListener('click', () => {
            dropdownContent.classList.toggle('show');
            ReturnBtn.remove();
          })
         SignOutBtn.addEventListener('click', () => {
            location.reload();
         })


          ContactMeBtn.addEventListener('click', () => {   
            location.href = "https://github.com/LeventCako/LeventCako";
         })  


       })
   return false;
    });
  
});


const TodoListBtn = document.getElementById('TodoListBtn');
TodoListBtn.addEventListener('click', () => {
    window.open('TodoList.html');
})

const LiveCountBtn = document.getElementById('liveCountBtn');

LiveCountBtn.addEventListener('click', () => {

  
    
   const callback = counter => {
    const charCount = counter.characters;
    const wordCount = counter.words;

    Result.innerHTML = ` we have ${wordCount} words and ${charCount} characters`
   };

   Countable.on(myInput, callback);

   if(!LiveCountBtn) {
    return;
   }

   if(LiveCountBtn) {
    LiveCountBtn.innerText = 'Disable';
   } 
    if(LiveCountBtn.innerText === 'Disable') {
    LiveCountBtn.addEventListener('click', () => {
       Countable.off(myInput);
      
       if (Countable.off) {
        LiveCountBtn.innerText = 'Enable'
       }  if (LiveCountBtn.innerText === 'Enable') {
        LiveCountBtn.addEventListener('click', () => {
            LiveCountBtn.innerText = 'Disable'
            
               Countable.on(myInput, callback);
            
        })
         
       }

     
       
    }) 
    
   }
  
})

/*  Here we calculate the estiamte reading time */

const ReadingTime = document.getElementById('readingTime');
ReadingTime.addEventListener('click', () => {
    /* The RS stands for Reading Speed */
    const inputWords = myInput.value.trim();
    const wordCount =  inputWords.split(/\s+/).length;
    const AverageRS = 125;
    const Time = Math.ceil(wordCount / AverageRS);
    Result.innerHTML = ` ${Time} Minute/s Read time`;
})

/* Here we create the estimate Speaking Time */

const SpeakingTime = document.getElementById('speakingTime');

SpeakingTime.addEventListener('click', () => {
/* The ST stands for Speaking time */
const inputWords = myInput.value.trim();
const wordCount =  inputWords.split(/\s+/).length;
const AverageST = 150;
const SpeakingTimeResult = Math.ceil(wordCount / AverageST);
Result.innerHTML = `${SpeakingTimeResult} Minute/s speak time`;
})






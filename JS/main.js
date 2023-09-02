
            const textInputs = document.querySelectorAll("input");

            textInputs
            .forEach(textInput => {
                textInput.addEventListener("focus", () =>{
                    let parent = textInput.parentNode;
                    parent.classList.add("active");
                });
            });

            /*pwd show/hide */
            const passwordInput = document.querySelector(".password-input");
            const eyeBtn = document.querySelector(".eye-btn");

            eyeBtn.addEventListener("click", ()=> {
                if(passwordInput.type == "password"){
                    passwordInput.type = "text";
                    eyeBtn.innerHTML = "<i class='uil-eye'></i>";
                }
                else{
                    passwordInput.type = "password"
                    eyeBtn.innerHTML = "<i class='uil-eye-slash'></i>";
                }
            });
<script>
        function validateForm(event) {
            event.preventDefault(); // Prevent form submission
            
            let email = document.getElementById("email").value;
            let password = document.getElementById("password").value;
            let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            
            if (!emailPattern.test(email)) {
                alert("Please enter a valid email address containing '@' and a domain like '.com'.");
                return false;
            }
            
            if (password.trim() === "") {
                alert("Password cannot be empty.");
                return false;
            }
            
            document.getElementById("loginForm").submit();
        }
</script>
// User Login
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            // In a real app, this would be an API call
            if ((email && password )||( email == "nithimaran1233@gmail.com" && password == "123")) {
                // Simulate successful login
                sessionStorage.setItem('userToken', 'user_auth_token');
                sessionStorage.setItem('userEmail', email);
                sessionStorage.setItem('userName', email.split('@')[0]);
                
                // Redirect to user dashboard
                window.location.href = 'home.html';
            } else {
                document.getElementById('loginError').textContent = 'Invalid email or password';
            }
        });
    }
    
    // User Signup
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            
            if (password !== confirmPassword) {
                document.getElementById('signupError').textContent = 'Passwords do not match';
                return;
            }
            
            // In a real app, this would be an API call
            if (name && email && password) {
                // Simulate successful signup
                sessionStorage.setItem('userToken', 'user_auth_token');
                sessionStorage.setItem('userEmail', email);
                sessionStorage.setItem('userName', name);
                
                // Redirect to user dashboard
                window.location.href = 'login.html';
            } else {
                document.getElementById('signupError').textContent = 'Please fill all fields';
            }
        });
    }
    
    // Admin Login
    const adminLoginForm = document.getElementById('adminLoginForm');
    if (adminLoginForm) {
        adminLoginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            
            // In a real app, this would be an API call with different credentials
            if (username === 'nithi' && password === '123') {
                sessionStorage.setItem('adminToken', 'admin_auth_token');
                sessionStorage.setItem('adminUser', username);
                
                // Redirect to admin dashboard
                window.location.href = 'admin_dashboard.html';
            } else {
                document.getElementById('loginError').textContent = 'Invalid admin credentials';
            }
        });
    }
});
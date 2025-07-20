// Session management utilities
function checkUserSession() {
    if (window.location.pathname.includes('user_dashboard.html') && 
        !sessionStorage.getItem('userToken')) {
        window.location.href = 'login.html';
    }
}

function checkAdminSession() {
    if (window.location.pathname.includes('admin_dashboard.html') && 
        !sessionStorage.getItem('adminToken')) {
        window.location.href = 'admin-login.html';
    }
}

// Check sessions on page load
document.addEventListener('DOMContentLoaded', function() {
    checkUserSession();
    checkAdminSession();
});
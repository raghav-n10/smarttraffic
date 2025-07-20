// Admin authentication and functions
document.addEventListener('DOMContentLoaded', function() {
    // Check if user is logged in on admin pages
    if (window.location.pathname.includes('/admin/') && 
        !window.location.pathname.includes('login.html')) {
        checkAdminAuth();
    }
    
    // Login form handler
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            
            // In a real app, this would be an API call
            if (username === 'nithi' && password === '123') {
                // Store auth token (in real app, use proper JWT)
                localStorage.setItem('adminAuth', 'true');
                window.location.href = 'admin_dashboard.html';
            } else {
                document.getElementById('loginError').textContent = 'Invalid username or password';
            }
        });
    }
    
    // Logout button
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function(e) {
            e.preventDefault();
            localStorage.removeItem('adminAuth');
            window.location.href = '../index.html';
        });
    }
    
    // Load recent alerts in dashboard
    if (document.getElementById('recentAlerts')) {
        loadRecentAlerts();
    }
    
    // Signal control functionality
    setupSignalControls();
});

function checkAdminAuth() {
    const isAuthenticated = localStorage.getItem('adminAuth') === 'true';
    if (!isAuthenticated) {
        window.location.href = 'index.html';
    }
}

function loadRecentAlerts() {
    // In a real app, this would fetch from an API
    const alerts = [
        { type: 'accident', location: 'Main St & 1st Ave', time: '10:30 AM', severity: 'high' },
        { type: 'breakdown', location: 'Central Blvd', time: '9:15 AM', severity: 'medium' },
        { type: 'hazard', location: 'River Side Dr', time: '8:45 AM', severity: 'low' }
    ];
    
    const alertsContainer = document.getElementById('recentAlerts');
    alertsContainer.innerHTML = '';
    
    alerts.forEach(alert => {
        const alertElement = document.createElement('div');
        alertElement.className = `alert-item ${alert.severity}`;
        alertElement.innerHTML = `
            <div class="alert-icon">
                <i class="fas fa-${getAlertIcon(alert.type)}"></i>
            </div>
            <div class="alert-content">
                <h4>${formatAlertType(alert.type)}</h4>
                <p>${alert.location} • ${alert.time}</p>
            </div>
        `;
        alertsContainer.appendChild(alertElement);
    });
}

function getAlertIcon(type) {
    const icons = {
        accident: 'car-crash',
        breakdown: 'car-battery',
        roadblock: 'road-barrier',
        hazard: 'exclamation-triangle',
        other: 'exclamation-circle'
    };
    return icons[type] || 'exclamation-circle';
}

function formatAlertType(type) {
    const names = {
        accident: 'Vehicle Accident',
        breakdown: 'Vehicle Breakdown',
        roadblock: 'Road Block',
        hazard: 'Road Hazard',
        other: 'Incident'
    };
    return names[type] || 'Incident';
}

function setupSignalControls() {
    const signalButtons = document.querySelectorAll('.signal-btn');
    signalButtons.forEach(button => {
        button.addEventListener('click', function() {
            const signalItem = this.closest('.signal-item');
            const currentActive = signalItem.querySelector('.signal-btn.active');
            
            if (currentActive) {
                currentActive.classList.remove('active');
            }
            
            this.classList.add('active');
            
            // Update status indicator
            const color = this.classList.contains('red') ? 'red' : 
                         this.classList.contains('yellow') ? 'yellow' : 'green';
            
            const indicator = signalItem.querySelector('.status-indicator');
            indicator.className = 'status-indicator';
            indicator.classList.add(color);
            
            // In a real app, this would send a command to the traffic signal
            console.log(`Set signal to ${color}`);
        });
    });
}
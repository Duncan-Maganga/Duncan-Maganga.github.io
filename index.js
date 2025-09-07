// Matrix animation
const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');
let matrixAnimationId = null;

// Set canvas size
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

// Matrix characters
const matrixChars = "01010101abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+-=[]{}|;:,.<>?";
const fontSize = 14;
const columns = Math.floor(canvas.width / fontSize);
const drops = Array(columns).fill(1);

// Matrix animation
function drawMatrix() {
    ctx.fillStyle = 'rgba(10, 25, 47, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = '#64ffda';
    ctx.font = `${fontSize}px monospace`;
    
    for (let i = 0; i < drops.length; i++) {
        const text = matrixChars[Math.floor(Math.random() * matrixChars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        
        drops[i]++;
    }
}

function startMatrixAnimation() {
    if (!matrixAnimationId) {
        matrixAnimationId = setInterval(drawMatrix, 33);
    }
}

function stopMatrixAnimation() {
    if (matrixAnimationId) {
        clearInterval(matrixAnimationId);
        matrixAnimationId = null;
    }
}

startMatrixAnimation();

// Projects and Writeups data
const projects = [
    { title: "Project 1", description: "Network vulnerability scanner with real-time reporting.", link: "https://github.com/Duncan-Maganga/project1", markdown: "projects/project1.md" },
   // { title: "Project 2", description: "Cloud security assessment tool for AWS and Azure environments.", link: "https://github.com/Duncan-Maganga/project2", markdown: "project2.md" },
   // { title: "Project 3", description: "Incident response automation platform for SOC teams.", link: "https://github.com/Duncan-Maganga/project3", markdown: "project3.md" },
   // { title: "Project 4", description: "Developed a phishing simulation campaign using Gophish.", link: "https://github.com/Duncan-Magangaa", markdown: "project4.md" },
    { title: "Project 5", description: "Built an automated vulnerability scanner with Python.", link: "https://github.com/Duncan-MagangaA", markdown: "project5.md" },
    { title: "Project 6", description: "Configured SIEM rules for real-time incident detection.", link: "https://github.com/Duncan-Magangab", markdown: "project6.md" },
    { title: "Project 7", description: "Created a malware sandbox for safe binary execution.", link: "https://github.com/Duncan-MagangAB", markdown: "project7.md" },
    { title: "Project 8", description: "Set up honeypots to collect attacker TTPs.", link: "https://github.com/Duncan-Magangac", markdown: "project8.md" },
    { title: "Project 9", description: "Implemented network intrusion detection with Suricata.", link: "https://github.com/Duncan-MagangAC", markdown: "project9.md" },
    { title: "Project 10", description: "Deployed secure Active Directory environment for testing.", link: "https://github.com/Duncan-Magangad", markdown: "project10.md" },
    { title: "Project 11", description: "Automated phishing email detection with regex rules.", link: "https://github.com/Duncan-MagangAD", markdown: "project11.md" },
    { title: "Project 12", description: "Conducted penetration testing on web applications.", link: "https://github.com/Duncan-Magangae", markdown: "project12.md" },
    { title: "Project 13", description: "Performed threat hunting exercises on enterprise logs.", link: "https://github.com/Duncan-MagangAE", markdown: "project13.md" },
    { title: "Project 14", description: "Built custom payloads for red team operations.", link: "https://github.com/Duncan-Magangaf", markdown: "project14.md" },
    { title: "Project 15", description: "Analyzed ransomware behavior in isolated lab.", link: "https://github.com/Duncan-MagangAF", markdown: "project15.md" },
    { title: "Project 16", description: "Implemented EDR monitoring for abnormal login activity.", link: "https://github.com/Duncan-Magangag", markdown: "project16.md" },
    { title: "Project 17", description: "Created custom exploits for privilege escalation.", link: "https://github.com/Duncan-MagangAG", markdown: "project17.md" },
    { title: "Project 18", description: "Configured firewall rules for zero-trust segmentation.", link: "https://github.com/Duncan-Magangah", markdown: "project18.md" },
    { title: "Project 19", description: "Tested API endpoints for injection vulnerabilities.", link: "https://github.com/Duncan-MagangAH", markdown: "project19.md" },
    { title: "Project 20", description: "Built a dashboard for real-time SOC metrics.", link: "https://github.com/Duncan-Magangai", markdown: "project20.md" },
    { title: "Project 21", description: "Reverse engineered obfuscated malware samples.", link: "https://github.com/Duncan-MangangAI", markdown: "project21.md" },
    { title: "Project 22", description: "Simulated insider threat scenarios with controlled accounts.", link: "https://github.com/Duncan-Mangangaj", markdown: "project22.md" },
    { title: "Project 23", description: "Developed an incident response playbook for SOC teams.", link: "https://github.com/Duncan-MangangAJ", markdown: "project23.md" },
    { title: "Project 24", description: "Automated log enrichment with threat intelligence feeds.", link: "https://github.com/Duncan-Mangangak", markdown: "project24.md" },
    { title: "Project 25", description: "Performed penetration testing on IoT devices.", link: "https://github.com/Duncan-MangangAK", markdown: "project25.md" },
    { title: "Project 26", description: "Analyzed phishing kits and templates.", link: "https://github.com/Duncan-Mangal", markdown: "project26.md" },
    { title: "Project 27", description: "Investigated credential stuffing attacks.", link: "https://github.com/Duncan-MangalL", markdown: "project27.md" },
    { title: "Project 28", description: "Created detection signatures for MITRE ATT&CK techniques.", link: "https://github.com/Duncan-Manganm", markdown: "project28.md" },
    { title: "Project 29", description: "Tested password policies for enterprise environments.", link: "https://github.com/Duncan-ManganM", markdown: "project29.md" },
    { title: "Project 30", description: "Conducted security awareness training simulations.", link: "https://github.com/Duncan-Magann", markdown: "project30.md" },
    { title: "Project 31", description: "Configured syslog forwarding for centralized monitoring.", link: "https://github.com/Duncan-MaganN", markdown: "project31.md" },
    { title: "Project 32", description: "Built an AI-powered anomaly detection model for logs.", link: "https://github.com/Duncan-Magano", markdown: "project32.md" },
    { title: "Project 33", description: "Analyzed CVE vulnerabilities for patch management.", link: "https://github.com/Duncan-MaganO", markdown: "project33.md" },
    { title: "Project 34", description: "Simulated DDoS attacks for resilience testing.", link: "https://github.com/Duncan-Maganp", markdown: "project34.md" },
    { title: "Project 35", description: "Integrated threat intel APIs into SIEM workflows.", link: "https://github.com/Duncan-MaganP", markdown: "project35.md" },
    { title: "Project 36", description: "Conducted forensic analysis on compromised endpoints.", link: "https://github.com/Duncan-Maganq", markdown: "project36.md" },
    { title: "Project 37", description: "Developed SOC automation workflows with n8n.", link: "https://github.com/Duncan-MaganQ", markdown: "project37.md" },
    { title: "Project 38", description: "Explored API security flaws in mobile apps.", link: "https://github.com/Duncan-Maganr", markdown: "project38.md" },
    { title: "Project 39", description: "Simulated APT-style persistence on test networks.", link: "https://github.com/Duncan-MaganR", markdown: "project39.md" },
    { title: "Project 40", description: "Implemented secure coding practices in Python apps.", link: "https://github.com/Duncan-Magans", markdown: "project40.md" },
    { title: "Project 41", description: "Monitored cloud workloads for anomalous activity.", link: "https://github.com/Duncan-MaganS", markdown: "project41.md" },
    { title: "Project 42", description: "Conducted red team-blue team cyber defense exercise.", link: "https://github.com/Duncan-Magant", markdown: "project42.md" },
    { title: "Project 43", description: "Configured Splunk dashboards for SOC analysis.", link: "https://github.com/Duncan-MaganT", markdown: "project43.md" },
    { title: "Project 44", description: "Implemented MFA and adaptive authentication controls.", link: "https://github.com/Duncan-Maganu", markdown: "project44.md" },
    { title: "Project 45", description: "Explored evasion techniques against modern EDRs.", link: "https://github.com/Duncan-MaganU", markdown: "project45.md" },
    { title: "Project 46", description: "Developed Python scripts for automated exploit testing.", link: "https://github.com/Duncan-Maganv", markdown: "project46.md" },
    { title: "Project 47", description: "Investigated ransomware encryption techniques.", link: "https://github.com/Duncan-MaganV", markdown: "project47.md" },
    { title: "Project 48", description: "Tested secure file transfer with encryption layers.", link: "https://github.com/Duncan-Maganw", markdown: "project48.md" },
    { title: "Project 49", description: "Explored AI-assisted phishing detection models.", link: "https://github.com/Duncan-MaganW", markdown: "project49.md" },
    { title: "Project 50", description: "Researched the future of SOC automation with AI.", link: "https://github.com/Duncan-Maganx", markdown: "project50.md" }
];

const writeups = [
    { title: "Writeup 1", description: "Analysis of recent ransomware attack patterns and defense strategies.", link: "https://github.com/Duncan-Maganga/writeup1", markdown: "writeups/writeup1.md" },
    { title: "Writeup 2", description: "Comprehensive guide to implementing zero-trust architecture.", link: "https://github.com/Duncan-Maganga/writeup2", markdown: "writeups/writeup2.md" },
    { title: "Writeup 3", description: "Exploring phishing attack simulations and mitigation strategies.", link: "https://github.com/Duncan-Magangaa", markdown: "writeup3.md" },
    { title: "Writeup 4", description: "SQL injection case study with real-world exploitation patterns.", link: "https://github.com/Duncan-MagangaA", markdown: "writeup4.md" },
    { title: "Writeup 5", description: "Cross-site scripting (XSS) vulnerability testing in web apps.", link: "https://github.com/Duncan-Magangb", markdown: "writeup5.md" },
    { title: "Writeup 6", description: "Reverse engineering malware samples in a sandboxed lab.", link: "https://github.com/Duncan-MagangB", markdown: "writeup6.md" },
    { title: "Writeup 7", description: "Investigating brute-force attacks and password cracking tools.", link: "https://github.com/Duncan-Magangc", markdown: "writeup7.md" },
    { title: "Writeup 8", description: "Packet sniffing and traffic analysis using Wireshark.", link: "https://github.com/Duncan-MagangC", markdown: "writeup8.md" },
    { title: "Writeup 9", description: "Privilege escalation techniques on Linux environments.", link: "https://github.com/Duncan-Magangd", markdown: "writeup9.md" },
    { title: "Writeup 10", description: "Windows Active Directory exploitation fundamentals.", link: "https://github.com/Duncan-MagangD", markdown: "writeup10.md" },
    { title: "Writeup 11", description: "Post-exploitation persistence mechanisms in real networks.", link: "https://github.com/Duncan-Magange", markdown: "writeup11.md" },
    { title: "Writeup 12", description: "Buffer overflow exploitation basics with C programs.", link: "https://github.com/Duncan-MagangE", markdown: "writeup12.md" },
    { title: "Writeup 13", description: "Incident response workflow for ransomware infections.", link: "https://github.com/Duncan-Magangf", markdown: "writeup13.md" },
    { title: "Writeup 14", description: "Digital forensics imaging and evidence preservation.", link: "https://github.com/Duncan-MagangF", markdown: "writeup14.md" },
    { title: "Writeup 15", description: "Enumeration techniques in penetration testing engagements.", link: "https://github.com/Duncan-Mangang", markdown: "writeup15.md" },
    { title: "Writeup 16", description: "Cloud security misconfigurations in AWS environments.", link: "https://github.com/Duncan-MangangG", markdown: "writeup16.md" },
    { title: "Writeup 17", description: "Using OSINT tools for threat intelligence gathering.", link: "https://github.com/Duncan-Manganh", markdown: "writeup17.md" },
    { title: "Writeup 18", description: "Simulating insider threats in corporate networks.", link: "https://github.com/Duncan-ManganH", markdown: "writeup18.md" },
    { title: "Writeup 19", description: "Phishing email header analysis and detection methods.", link: "https://github.com/Duncan-Mangani", markdown: "writeup19.md" },
    { title: "Writeup 20", description: "Network scanning with Nmap for vulnerability discovery.", link: "https://github.com/Duncan-ManganI", markdown: "writeup20.md" },
    { title: "Writeup 21", description: "Firewalls vs intrusion detection/prevention systems (IDS/IPS).", link: "https://github.com/Duncan-Manganj", markdown: "writeup21.md" },
    { title: "Writeup 22", description: "Keylogging techniques and defensive countermeasures.", link: "https://github.com/Duncan-ManganJ", markdown: "writeup22.md" },
    { title: "Writeup 23", description: "Analyzing attack logs to trace lateral movement attempts.", link: "https://github.com/Duncan-Magank", markdown: "writeup23.md" },
    { title: "Writeup 24", description: "DNS tunneling attacks and detection techniques.", link: "https://github.com/Duncan-MaganK", markdown: "writeup24.md" },
    { title: "Writeup 25", description: "Setting up honeypots to attract and study attackers.", link: "https://github.com/Duncan-Maganl", markdown: "writeup25.md" },
    { title: "Writeup 26", description: "Binary exploitation challenges in Capture The Flag (CTF) contests.", link: "https://github.com/Duncan-MaganL", markdown: "writeup26.md" },
    { title: "Writeup 27", description: "Exploring Kerberoasting in Windows environments.", link: "https://github.com/Duncan-Maganm", markdown: "writeup27.md" },
    { title: "Writeup 28", description: "Web application authentication flaws and bypasses.", link: "https://github.com/Duncan-MaganM", markdown: "writeup28.md" },
    { title: "Writeup 29", description: "Tracking command-and-control (C2) communications.", link: "https://github.com/Duncan-Magann", markdown: "writeup29.md" },
    { title: "Writeup 30", description: "Wireless network attacks with WPA2 cracking.", link: "https://github.com/Duncan-MaganN", markdown: "writeup30.md" },
    { title: "Writeup 31", description: "Using threat hunting techniques for proactive defense.", link: "https://github.com/Duncan-Magano", markdown: "writeup31.md" },
    { title: "Writeup 32", description: "MITRE ATT&CK framework mapping for incidents.", link: "https://github.com/Duncan-MaganO", markdown: "writeup32.md" },
    { title: "Writeup 33", description: "Developing detection rules in SIEM platforms.", link: "https://github.com/Duncan-Maganp", markdown: "writeup33.md" },
    { title: "Writeup 34", description: "Zero-day exploits and responsible disclosure processes.", link: "https://github.com/Duncan-MaganP", markdown: "writeup34.md" },
    { title: "Writeup 35", description: "Red team vs blue team exercises in enterprise defense.", link: "https://github.com/Duncan-Maganq", markdown: "writeup35.md" },
    { title: "Writeup 36", description: "Insider data exfiltration detection case study.", link: "https://github.com/Duncan-MaganQ", markdown: "writeup36.md" },
    { title: "Writeup 37", description: "Scripting for automation in penetration testing.", link: "https://github.com/Duncan-Maganr", markdown: "writeup37.md" },
    { title: "Writeup 38", description: "Deep dive into SSL/TLS man-in-the-middle attacks.", link: "https://github.com/Duncan-MaganR", markdown: "writeup38.md" },
    { title: "Writeup 39", description: "Malware obfuscation and unpacking techniques.", link: "https://github.com/Duncan-Magans", markdown: "writeup39.md" },
    { title: "Writeup 40", description: "Advanced persistent threat (APT) lifecycle explained.", link: "https://github.com/Duncan-MaganS", markdown: "writeup40.md" },
    { title: "Writeup 41", description: "Analyzing phishing kits and automation scripts.", link: "https://github.com/Duncan-Magant", markdown: "writeup41.md" },
    { title: "Writeup 42", description: "IoT device vulnerabilities and exploitation.", link: "https://github.com/Duncan-MaganT", markdown: "writeup42.md" },
    { title: "Writeup 43", description: "Evading antivirus and endpoint detection systems.", link: "https://github.com/Duncan-Maganu", markdown: "writeup43.md" },
    { title: "Writeup 44", description: "Supply chain attack case study and prevention.", link: "https://github.com/Duncan-MaganU", markdown: "writeup44.md" },
    { title: "Writeup 45", description: "Analyzing credential dumps from breached databases.", link: "https://github.com/Duncan-Maganv", markdown: "writeup45.md" },
    { title: "Writeup 46", description: "Threat modeling for enterprise applications.", link: "https://github.com/Duncan-MaganV", markdown: "writeup46.md" },
    { title: "Writeup 47", description: "Privilege abuse in cloud-native applications.", link: "https://github.com/Duncan-Maganw", markdown: "writeup47.md" },
    { title: "Writeup 48", description: "Exploring social engineering attack techniques.", link: "https://github.com/Duncan-MaganW", markdown: "writeup48.md" },
    { title: "Writeup 49", description: "API security testing and common pitfalls.", link: "https://github.com/Duncan-Maganx", markdown: "writeup49.md" },
    { title: "Writeup 50", description: "Future of cybersecurity and AI-driven defense.", link: "https://github.com/Duncan-MaganX", markdown: "writeup50.md" }
];

// SPA Navigation
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav-link');
let currentSection = 'home';

function showSection(sectionId) {
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    
    document.getElementById(sectionId).classList.add('active');
    document.querySelector(`[data-section="${sectionId}"]`).classList.add('active');
    
    currentSection = sectionId;
    
    // Pause matrix animation when in detail view for better readability
    if (sectionId === 'detail-view') {
        stopMatrixAnimation();
    } else {
        startMatrixAnimation();
    }
}

// Render projects and writeups
function renderProjects() {
    const projectsGrid = document.getElementById('projects-grid');
    projectsGrid.innerHTML = '';
    
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'card';
        projectCard.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="card-actions">
                <button class="btn btn-outline view-btn" data-type="project" data-title="${project.title}" data-markdown="${project.markdown}">View</button>
                <a href="${project.link}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">Git</a>
            </div>
        `;
        projectsGrid.appendChild(projectCard);
    });
}

function renderWriteups() {
    const writeupsGrid = document.getElementById('writeups-grid');
    writeupsGrid.innerHTML = '';
    
    writeups.forEach(writeup => {
        const writeupCard = document.createElement('div');
        writeupCard.className = 'card';
        writeupCard.innerHTML = `
            <h3>${writeup.title}</h3>
            <p>${writeup.description}</p>
            <div class="card-actions">
                <button class="btn btn-outline view-btn" data-type="writeup" data-title="${writeup.title}" data-markdown="${writeup.markdown}">View</button>
                <a href="${writeup.link}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">Git</a>
            </div>
        `;
        writeupsGrid.appendChild(writeupCard);
    });
}

// Load markdown content (simulated)
function loadMarkdownContent(type, title, markdownFile) {
    // In a real implementation, you would fetch the markdown file from the server
    // For this example, we'll simulate the content
    // ✅ Fetch the real markdown file from correct folder
fetch(markdownFile)   // e.g. "projects/project1.md" or "writeups/writeup1.md"
    .then(response => {
        if (!response.ok) {
            throw new Error("Failed to load " + markdownFile);
        }
        return response.text();
    })
    .then(text => {
        document.getElementById('markdown-content').innerHTML = marked.parse(text);
    })
    .catch(err => {
        document.getElementById('markdown-content').innerHTML = 
            `<p style="color:red;">⚠ Could not load ${markdownFile}: ${err.message}</p>`;
    });

    document.getElementById('github-btn').setAttribute('href', 
        type === 'project' 
            ? projects.find(p => p.title === title)?.link || '#' 
            : writeups.find(w => w.title === title)?.link || '#'
    );
    
    showSection('detail-view');
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    // Render projects and writeups
    renderProjects();
    renderWriteups();
    
    // Navigation
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const section = this.getAttribute('data-section');
            showSection(section);
        });
    });
    
    // CTA buttons
    document.querySelector('[data-section="projects"]').addEventListener('click', function() {
        showSection('projects');
    });
    
    document.getElementById('contact-btn').addEventListener('click', function() {
        showSection('contact');
    });
    
    document.getElementById('contact-btn-2').addEventListener('click', function() {
        showSection('contact');
    });
    
    // Back button
    document.getElementById('back-btn').addEventListener('click', function() {
        showSection(currentSection === 'detail-view' ? 'home' : currentSection);
    });
    
    // View buttons (using event delegation for dynamically created elements)
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('view-btn')) {
            const type = e.target.getAttribute('data-type');
            const title = e.target.getAttribute('data-title');
            const markdownFile = e.target.getAttribute('data-markdown');
            loadMarkdownContent(type, title, markdownFile);
        }
    });
    
    // Social links
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const platform = this.getAttribute('data-platform');
            let url = '#';
            
            switch(platform) {
                case 'linkedin':
                    url = 'https://linkedin.com/in/duncanmaganga';
                    break;
                case 'twitter':
                    url = 'https://twitter.com/duncanmaganga';
                    break;
                case 'github':
                    url = 'https://github.com/Duncan-Maganga';
                    break;
                case 'medium':
                    url = 'https://medium.com/@duncanmaganga10';
                    break;
            }
            
            window.open(url, '_blank');
        });
    });
    
    // Hamburger menu for mobile
    const hamburger = document.querySelector('.hamburger');
    const navLinksContainer = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinksContainer.classList.toggle('active');
    });
});

// Handle page visibility change for matrix animation
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        stopMatrixAnimation();
    } else {
        startMatrixAnimation();
    }
});